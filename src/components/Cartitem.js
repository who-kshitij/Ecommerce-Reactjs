import React from 'react'

export default function Cartitem(props) {
  return (
    <div className='cartitem'>
        <div className="idetail">
            <div className="cimg"><img src="" alt="" /></div>
            <div className="idet">
                <p className='pname'>{`${props.name}`}</p>
                <p className='cname'>{`${props.cname}`}</p>
            </div>
        </div>
        <div className="iquantity">
            <span><button>-</button></span><span className='item-cnt'>2</span><span><button>+</button></span>
        </div>
        <div className="iprice">
        {`${props.price}`}
        </div>
        <div className="itotal">
        {`${props.price}`}
        </div>
    </div>
  )
}
