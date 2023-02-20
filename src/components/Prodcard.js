import React from 'react'

export default function Prodcard(props) {
  return (
    <div className='prodcard'>
        <div className="prodimg">
            <img src={`${props.img}`}/>
        </div>
        <div className="proddet">
            <div className="prodname">
            {`${props.name}`}
            </div>
            <div className="prodprice">
            {`${props.price}`}
            </div>
        </div>
    </div>
  )
}
