import React from 'react'
import Cartitem from './Cartitem'
import { Outlet, Link } from "react-router-dom";

export default function Cart() {
    return (
        <>
        <div className='cart-main'>
            <div className="cart-m">
                <div className="items-c">
                    <div className="text-c">
                        <span className='cart-head'><h4>Shopping Cart</h4></span> <span className='cart-num'><h5>2 Items</h5></span>
                    </div>
                    <div className="item-t">
                        <span className='pd'>Product Details</span><span className='qd'>Quantity</span><span className='qd'>Price</span><span className='qd'>Total</span>
                    </div>
                    <div className="item-l">
                        <Cartitem />
                        <Cartitem />
                        <Cartitem />
                    </div>
                    <div className="continues">
                    <span><i class="fa-solid fa-arrow-left"></i>Continue Shopping</span>
                    </div>
                </div>
                <div className="summary-c">
                    <div className="text-c">
                        <span className="cart-head"><h4>Order Summary</h4></span>
                    </div>
                    <div className="item-t">
                        <span className='pd1'>ITEMS 3</span><span className='qd'></span><span className='qd'></span><span className='qd1'>$450</span>
                    </div>
                    <div className="delopt">
                        <div className="delopt1">
                            <div className='pd1'>SHIPPING</div>
                            <select className='delivery' name="Delivery">
                                <option value="Standard">Standard Shipping</option>
                                <option value="Delux">One day Delivery</option>
                            </select>
                        </div>
                        <div className="delopt1">
                            <div className='pd1'>PROMO CODE</div>
                            <input className='delivery' type="text" name="promo" />
                        </div>
                        <button className='apply'>Apply</button>
                    </div>
                    <div className="sumbut">
                    <div className="item-t">
                        <span className='pd1'>ITEMS 3</span><span className='qd'></span><span className='qd'></span><span className='qd1'>$450</span>
                    </div>
                    <button className='checkbut'>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    )
}
