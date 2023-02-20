import React from 'react'
import Product from './Product'

export default function Featured
() {
  return (
    <div className='container fprod'>
        <div className="ftitle"> Featured Products</div>
        <div className="prod">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>
    </div>
  )
}
