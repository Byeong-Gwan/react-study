import React from 'react'

function Box(props) {
    let result = '';

    if (props.title === 'You' && props.result !== 'tie' && props.result !== '') {
        result = props.result === 'win' ? 'lose' : 'win';
    } else {
        result = props.result;
    }

    const imgSrc = props.item && props.item.img;

    return (
        <div >
            <div className={`box ${result}`}>
                <h1>{props.title}</h1>
                {imgSrc && (
                    <img
                      className='item-img'
                      src={imgSrc}
                      alt={`${props.title} choice`}
                      loading="eager"
                      decoding="sync"
                    />
                )}
                <h2>{result}</h2>
            </div>
        </div>
        
    )
}

export default Box
