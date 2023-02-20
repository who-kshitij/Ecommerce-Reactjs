import React from 'react'
import Prodcard from './Prodcard'
import { Outlet, Link } from "react-router-dom";


export default function
    () {
    return (
        <>
        <div className='container'>
            <div className="shoptit">
                <span className='fil1'>FILTERS</span>
                <span className='fil2'>Showing all products</span>
            </div>
            <div className="shop-main">
                <div className="filter">
                    <div className="filopt">
                        <div className="filopt1">
                            CATEGORIES
                        </div>
                        <div className="filopt2">
                            <span><input type="checkbox" id="" /> <span>Shirts</span></span>
                            <span><input type="checkbox" id="" /> <span>Jeans</span></span>
                            <span><input type="checkbox" id="" /> <span>Shoes</span></span>
                            <span><input type="checkbox" id="" /> <span>Briefs</span></span>
                        </div>
                        <div className="filopt1">
                            PRICE RANGE
                        </div>
                        <div className="filopt2">
                            <span><input type="checkbox" id="" /> <span>0-500</span></span>
                            <span><input type="checkbox" id="" /> <span>500-1000</span></span>
                            <span><input type="checkbox" id="" /> <span>1000-2000</span></span>
                            <span><input type="checkbox" id="" /> <span>{'>'}2000</span></span>
                        </div>
                        <div className="filopt1">
                            BRANDS
                        </div>
                        <div className="filopt2">
                            <span><input type="checkbox" id="" /> <span>Adidas</span></span>
                            <span><input type="checkbox" id="" /> <span>Nike</span></span>
                            <span><input type="checkbox" id="" /> <span>Roadster</span></span>
                            <span><input type="checkbox" id="" /> <span>H&M</span></span>
                        </div>
                    </div>

                </div>
                <div className="product-all">
                    <Prodcard/>
                    <Prodcard/>
                    <Prodcard/>
                    <Prodcard/>
                    <Prodcard/>
                    <Prodcard/>
                    <Prodcard/>
                    <Prodcard/>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    )
}
