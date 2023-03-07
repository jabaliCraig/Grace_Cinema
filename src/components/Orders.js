import React from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Personnel from "./Personnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Users from "./Users";
import Cart from "./Cart";
import SideNav from "./SideNav";
import NoPage from "./NoPage";
import { selectOrders } from "../features/orders";
import { useSelector } from "react-redux";

// THE historical cart orders which will allow us to viewing the orders

const Orders = () => {
  const orders = useSelector(selectOrders)
  return (
  <div>
    {
      		orders.map((order)=>{
            return(
              <div key = {order.id}>
                {/* <h4>Quantities: {order.quantities}</h4>
                <h4> Total: {order.total}</h4> */}
                <h4>Status: {order.status}</h4>
              </div>
            )
          })
    }

  </div>
  )

};

export default Orders;
