const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require('../_db');


const User = db.define('user', {
    fName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
				validate: {
					isEmail: true
				}
    },
    type: {
        type: Sequelize.ENUM('customer', 'Admin'),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});


const SALT_ROUNDS = 5;

User.prototype.correctPassword = function(candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
}

User.prototype.generateToken = function() {
  return jwt.sign({id: this.id}, process.env.JWT)
}

User.authenticate = async function({ email, password }){
  const user = await this.findOne({where: { email }})
  if (!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect username/password');
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function(token) {
try {
  const {id}= jwt.verify(token, process.env.JWT)
  const user = await User.findByPk(id)
  if (user) {
    return user
  }
  const error = Error('bad token')
  error.status = 401
} catch (ex) {
  const error = Error('bad token')
  throw error
}
}

User.addHook('beforeCreate', async(user)=> {
  if(user.changed('password')){
    user.password = await bcrypt.hash(user.password, 3);
  }
});
/**
* hooks
*/
const hashPassword = async(user) => {
//in case the password has been changed, we want to encrypt it with bcrypt
if (user.changed('password')) {
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
}
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)
User.beforeBulkCreate(users => Promise.all(users.map(hashPassword)))

module.exports = User;
