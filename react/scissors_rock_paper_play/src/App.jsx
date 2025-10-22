import {useState} from 'react'
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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
   setUserSelect(choice[userChoice]); 

   let computerChoice = randomChoice();
   setComputerSelect(computerChoice);
   setResult(jugement(choice[userChoice], computerChoice))
  }

  const randomChoice = () => {
      let itemArray = Object.keys(choice);
      let randomItem = Math.floor(Math.random() * itemArray.length);
      let final = itemArray[randomItem];
      return choice[final];
  }

    const jugement = (user, computer) => {
        // user :: '가위' 일때 computer :: '보' win
        // user :: '가위' 일때 computer :: '가위' tie
        // user :: '가위' 일때 computer :: '바위' lose
        let userResult = '';

        // user와 computer가 같은 경우
        if (user.name === computer.name) {
            userResult = 'tie';
        } else if (user.name === 'Scissors') { // user가 가위일때
            userResult = computer.name === 'Paper' ? 'win' : 'lose';
        } else if (user.name === 'Rock') { // user가 바위일때
            userResult = computer.name === 'Scissors' ? 'win' : 'lose';
        } else if (user.name === 'Paper') { // user가 보일때
            userResult = computer.name === 'Rock' ? 'win' : 'lose';
        }

        // user의 결과를 기준으로 computer 결과 반전
        return userResult === 'win' ? 'lose' : userResult === 'lose' ? 'win' : 'tie'
    }

  return (
    <div>
      <div className='main cards'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className='main'>
        <button className='round' onClick={() => {play('scissors')}}>가위</button>
        <button className='round' onClick={() => {play('rock')}}>바위</button>
        <button className='round' onClick={() => {play('paper')}}>보</button>
      </div>
    </div>
  )
}

export default App
