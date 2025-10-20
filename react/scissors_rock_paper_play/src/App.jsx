import { useState } from 'react'
import './App.css'
import Box from './component/Box'
import paper from './assets/paper.png'
import rock from './assets/rock.png'
import scissors from './assets/scissors.png'

/**
   * 가위 바위 보 게임 만들기
   * 1. 박스 두개 you, computer(타이틀), 사진, 결과
   * 2. 가위 바위 보 버튼
   * 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
   * 4. 컴퓨터는 랜덤으로 가위 바위 보를 선택
   * 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패를 결정
   * 6. 승패에 결과에 따라 테두리 색이 바뀜(이기면 - 초록, 지면 - 빨강, 비기면 - 검은색)
   */

const choice = {
  scissors: { name: 'Scissors', img: scissors },
  rock: { name: 'Rock', img: rock },
  paper: { name: 'Paper', img: paper },
}

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
   setUserSelect(choice[userChoice]); 
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} />
        <Box title='Computer' />
      </div>
      <div className='main'>
        <button onClick={() => {play('scissors')}}>가위</button>
        <button onClick={() => {play('rock')}}>바위</button>
        <button onClick={() => {play('paper')}}>보</button>
      </div>
    </div>
  )
}

export default App
