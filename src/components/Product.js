import React from 'react'
import Pro1 from './Images/2.png'

export default function Product
() {
   
  return (
    <div>
        <div class=" page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src={Pro1} alt=""/>
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">I feel like Pablo</span>
              <span class="p-company">Yeezy</span>
            </div>
            <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a class="cart" href="/">
            <span class="price">$120</span>
            <span class="add-to-cart">
              <span class="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
