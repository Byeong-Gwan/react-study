import React from 'react'

function Box(props) {
    return (
        <div >
            <div className='box'>
                <h1>{props.title}</h1>
                <img className='item-img' src={props.item && props.item.img} />
                <h2>Win</h2>
            </div>
        </div>
        
    )
}

export default Box
