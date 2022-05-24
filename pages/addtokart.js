// Akshit Jariwala B00866255

// This page is developed for checkout page. This page shows the list of orders user has added in the cart to order.

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from "axios";
import Navbar from "../components/navbar";
import { TextField, Box, Paper, Button, Typography } from "@mui/material";


export default function AddToKart() {

    const [orders, setOrders] = useState();
    const [subTotal, setSubTotal] = useState();
    const [tax, setTax] = useState();
    const [cartValue, setCartValue] = useState();
    const router = useRouter();


    useEffect(() => {
        fetchOrders();
    }, [])

    const fetchOrders = async () => {
        let result = await axios.get('https://fresh-kit-backend.herokuapp.com/checkout');
        let data = result.data;
        setOrders(data);
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += parseFloat(data[i].price);
            console.log(data[0].price);
        }

        total = parseFloat(total.toFixed(2))
        setSubTotal(total);
        let taxValue = total * 0.15;
        taxValue = parseFloat(taxValue.toFixed(2));
        setTax(taxValue);
        let totalValue = total + taxValue + 2.99;
        totalValue = parseFloat(totalValue.toFixed(2));
        setCartValue(totalValue);
    }

    const deleteOrder = async (e, orderID) => {
        // delete from database.

        console.log(orderID);

        let orderObject = {
            orderid : orderID
        }
        let result = await axios.post('https://fresh-kit-backend.herokuapp.com/checkout/removeorder',orderObject);

        console.log(result.status);

        if(result.status == 200){
            fetchOrders();
        } 
    }

    const pushToPaymentPage = async () => {
        router.push("/AddDeliveryAddress")
    }

    return (
        <>
        <Navbar></Navbar>
            <h2 style={{ marginLeft: 20, marginTop: 25 }}><Typography variant="h4"><strong>SHOPPING CART</strong></Typography></h2>
            <div className="row" style={{ marginTop: 30, marginRight: 0 }}>
                <div className="col-8">
                    {
                        orders && orders.map((order, index) =>
                            <div className="card" style={{ marginLeft: 20, marginTop: 10}}>
                                <div className="card-body" style={{width:920,height:185}}>
                                    <h4 className="card-title"><Typography variant="h5"><strong>{order.dishname}</strong></Typography></h4>
                                    <p className="card-text"><Typography variant="subtitle1">{order.ingridients}</Typography></p>
                                    <p className="card-text" style={{width:100,display:"inline-block"}}><Typography variant="subtitle1"><strong>$ {order.price}</strong></Typography></p>
                                    <Button variant="contained"  style={{display:"inline-block",marginLeft:"72%"}} onClick={(e) => deleteOrder(e, order._id)}><Typography variant="subtitle2">REMOVE</Typography></Button>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="col-4" style={{ marginTop: 10 }}>
                    <div className="card card-cascade card-ecommerce wider shadow p-3 mb-5" style={{width:435,height:327}}>
                        <div className="card-body card-body-cascade">
                            <div className="card2decs">
                                <h5 ><Typography variant="h5"><strong>ORDER VALUE</strong></Typography></h5>
                                <p style={{ marginTop: 30 }}>SUBTOTAL <span className="float-right text1" style={{ marginLeft: 239 }}>$ {subTotal}</span></p>
                                <p >TAX<span className="float-right text1" style={{ marginLeft: 288 }}>$ {tax}</span></p>
                                <p >DELIVERY FEES<span className="float-right text1" style={{ marginLeft: 210 }}>$ 2.99</span></p>
                                <p ><strong>TOTAL</strong><span className="float-right totalText1"><span className="totalText2" style={{ marginLeft: 265 }}><strong>$ {cartValue}</strong></span></span></p>
                                <Button className="btn btn-primary" variant="contained" style={{ marginLeft: "72%" }} onClick={(e) => pushToPaymentPage(e)}><Typography variant="subtitle2">Checkout</Typography></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}