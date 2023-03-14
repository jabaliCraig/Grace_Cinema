const router = require('express').Router();
const { Personnel, Movie }=require("../db");

// GET /api/personnel
router.get('/', async (req, res, next) => {
    try {
        const personnel = await Personnel.findAll({
            include: Movie
        })
        res.json(personnel)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/personnel/:id
router.get('/:id', async (req, res, next) => {
    try {
        const person = await Personnel.findByPk(req.params.id, {
            include: [ Movie ]
        })
        res.send(person)
    }
    catch (error) {
        next(error)
    }
})

// // POST /api/personnel
// router.post('/', async (req, res, next) => {
//     try {
//         const addPersonnel = await Personnel.create(req.body);
//         res.send(addPersonnel)
//     }
//     catch (error) {
//         next(error)
//     }
// })

// // PUT /api/personnel/:id
// router.put('/personnel/:id', async (req, res, next) => {
//     try {
//         const updatePersonnel = await Personnel.findByPk(req.params.id);
//         const updated = await updatePersonnel.update(req.body);
//         res.send(updated)
//     }
//     catch (error) {
//         next(error)
//     }
// })

// // DELETE /api/personnel/:id
// router.delete('/personnel/:id', async (req, res, next) => {
//     try {
//         const personnelId = Number(req.params.id)
//         const deletePersonnel = await Personnel.findByPk(id);
//         await deletePersonnel.destroy()
//         res.send(deletePersonnel)
//     }
//     catch (error) {
//         next(error)
//     }
// })


module.exports = router;
