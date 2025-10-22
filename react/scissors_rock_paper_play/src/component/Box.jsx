import React from 'react'

function Box(props) {
    let result = '';

    if (props.title === 'You' && props.result !== 'tie' && props.result !== '') {
        result = props.result === 'win' ? 'lose' : 'win';
    } else {
        result = props.result;
    }

    return (
        <div >
            <div className={`box ${result}`}>
                <h1>{props.title}</h1>
                <img className='item-img' src={props.item && props.item.img} />
                <h2>{result}</h2>
            </div>
        </div>
        
    )
}

export default Box
