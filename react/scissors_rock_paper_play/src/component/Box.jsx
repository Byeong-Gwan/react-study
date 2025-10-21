import React from 'react'

function Box(props) {
    // 삼항연산자로 처리
    // 결과 값이 없으면 빈 객체로 초기화
    const res = props.result || { user: '', computer: '' }; // 승무패 결과 및 없으면 빈 객체
    const result = props.title === 'Computer' ? res.computer : res.user; // 컴퓨터면 컴퓨터 결과, 아니면 user 결과
    const wins = props.wins ?? 0; // 승리 횟수
    const totalDots = props.totalDots ?? 3; // 도트 개수

    // props.isMatchWinner가 실제로 boolean 값이 아닐 수 있기 떄문에 명확히 하기 위해 !! 사용
    const isMatchWinner = !!props.isMatchWinner; // 승자 여부

    return (
        <div>
            <div className={`box${isMatchWinner ? ' match-winner' : ''}`}>
                <h1>{props.title}</h1>
                <img className='item-img' src={props.item && props.item.img}  alt={props.item && props.item.img}/>
                <h2 className={`result ${result || 'idle'}`}>{result}</h2>
                <div className='dots'>
                    {Array.from({ length: totalDots }).map((unused, dotIndex) => (
                        <span
                            key={dotIndex}
                            className={`dot${dotIndex < wins ? ' filled' : ''}`}
                            aria-label={`round-dot-${dotIndex + 1}${dotIndex < wins ? '-filled' : ''}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Box
