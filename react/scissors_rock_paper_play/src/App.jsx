/**
 * 가위 바위 보 게임 만들기
 * 1. 박스 두개 you, computer(타이틀), 사진, 결과
 * 2. 가위 바위 보 버튼
 * 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
 * 4. 컴퓨터는 랜덤으로 가위 바위 보를 선택
 * 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패를 결정
 * 6. 승패에 결과에 따라 테두리 색이 바뀜(이기면 - 초록, 지면 - 빨강, 비기면 - 검은색)
 */
import { useState } from 'react'
import './App.css'
import Box from './component/Box'
import paper from './assets/paper.png'
import rock from './assets/rock.png'
import scissors from './assets/scissors.png'


/* 숙제
* 1. uesr computer 각각 맞는 win, lose, tie
* 2. win/lose/tie -> 테두리 색 변화
*/

const choice = {
  scissors: { name: 'Scissors', img: scissors },
  rock: { name: 'Rock', img: rock },
  paper: { name: 'Paper', img: paper },
}

function App() {
  const [userSelect, setUserSelect] = useState(null); // user 선택 값
  const [computerSelect, setComputerSelect] = useState(null); // computer 선택 값
  const [result, setResult] = useState({ user: '', computer: '' }); // 결과 값
  const [open, setOpen] = useState(false); // 모달 여부
  const [format, setFormat] = useState('bo3'); // 3판 2승 | 5판 3승 선택
  const roundsTotal = format === 'bo3' ? 3 : 5; // 총 라운드
  const roundsToWin = format === 'bo3' ? 2 : 3; // 승리 필요 라운드
  const [userWins, setUserWins] = useState(0); // user 승리 횟수
  const [computerWins, setComputerWins] = useState(0); // computer 승리 횟수
  const [matchWinner, setMatchWinner] = useState(null); // 승자

  /*
  * user & computer 가위, 바위, 보 시작
  * - 선택한 값 user에 반환
  * - computer 는 랜덤으로 노출 조건 함수 생성
  */
  const play = (userChoice) => {
    // 경기 종료 후 입력 막기
      if (matchWinner) {
        return;
      } 

      // user 선택 값
      const userChoiceObj = choice[userChoice];
      setUserSelect(userChoiceObj);

      // 랜덤으로 computer 값 가져오기
      const computerChoice = randomChoice();
      setComputerSelect(computerChoice);

      // 결과 계산 1회만 수행
      const resultCount = jugement(userChoiceObj, computerChoice);
      setResult(resultCount);

      // user 승리
      if (resultCount.user === 'win') {

        // user 승리 횟수 +1
        setUserWins((prev) => {
          const next = prev + 1;

          // user 승리 횟수 >= 승리 필요 라운드
          if (next >= roundsToWin) {
            setMatchWinner('user');
          }

          return next;
        });
      } else if (resultCount.user === 'lose') { // computer 승리

        // computer 승리 횟수 +1
        setComputerWins((prev) => {
          const next = prev + 1;

          // computer 승리 횟수 >= 승리 필요 라운드
          if (next >= roundsToWin) {
            setMatchWinner('computer');
          }

          return next;
        });
      }
  };

  /*
  * 승패 결과
  * - 강의 내용에는 삼항연산 강조 하셔서 일단 삼항연산으로 처리할 방법만 생각함
  * - 인자 값으로 객체를 반환 (무조건 객체로 넘기기 떄문에 성능면에서 좋을지는 모름;;)
  * - { user: '??', computer: '??' }
  */
  const jugement = (user, computer) => {
      console.log('user: ', user, 'computer: ', computer);
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
      const computerResult =
          userResult === 'win' ? 'lose' : userResult === 'lose' ? 'win' : 'tie';
      
      // Object로 결과 반환
      return {
          user: userResult,
          computer: computerResult
      };

  }

  /*
  * 랜덤 함수
  *  - itemArray = ['Scissors', 'Rock', 'Paper']
  *  - Math.random 함수로 랜덤 인덱스값 가져오기
  *  - * itemArray.length 로 랜덤 숫자 정해주고 Math.floor 함수로 소수점 버리기
  *  return choise 객체의 name 값 반환
  */
  const randomChoice = () => {
      // choice 객체의 키값을 배열로 반환
      let itemArray = Object.keys(choice);

      // 랜덤 인덱스값 가져오기
      let randomItem = Math.floor(Math.random() * itemArray.length);

      // 랜덤 인덱스값을 choice 객체의 키값으로 변환
      let final = itemArray[randomItem];

      return choice[final];
  }

  /**
   * 게임 초기화
   */
  const resetGame = () => {
    setUserSelect(null); // user 선택 초기화
    setComputerSelect(null); // computer 선택 초기화
    setResult({ user: '', computer: '' }); // 결과 초기화
    setUserWins(0); // user 승리 횟수 초기화
    setComputerWins(0); // computer 승리 횟수 초기화
    setMatchWinner(null); // 승자 초기화
  }

  return (
    <div>
      {/* 페이지 헤더 및 오픈 버튼 미니프로젝트 추가 예정 */}
      {!open && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
          <button className="open-game-btn" onClick={() => setOpen(true)}>가위바위보 게임</button>
        </div>
      )}

      {/* 모달 오버레이 */}
      {open && (
        <div className="overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="modal-close" aria-label="닫기" onClick={() => setOpen(false)}> × </button>
            <div className="modal-inner">
              <h1 className="app-title">react-study</h1>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <span className="badge">가위바위보 게임</span>
              </div>

              {/* 경기 형식 선택 및 스코어 초기화 */}
              <div className="controls-row">
                <label>
                  게임 형식:
                  <select value={format} onChange={(e) => { setFormat(e.target.value); resetGame(); }}>
                    <option value="bo3">3판 2승</option>
                    <option value="bo5">5판 3승</option>
                  </select>
                </label>
                <div className="score-caption">
                  나: {userWins}  컴퓨터: {computerWins}
                </div>
              </div>

              <div className='cards'>
                <Box title='You' item={userSelect} result={result} wins={userWins} 
                     totalDots={roundsTotal} isMatchWinner={matchWinner === 'user'} />

                <Box title='Computer' item={computerSelect} result={result} wins={computerWins}
                     totalDots={roundsTotal} isMatchWinner={matchWinner === 'computer'} />
              </div>
              <div className='button-row' style={{ marginTop: 12 }}>
                <button disabled={!!matchWinner} onClick={() => {play('scissors')}}>가위</button>
                <button disabled={!!matchWinner} onClick={() => {play('rock')}}>바위</button>
                <button disabled={!!matchWinner} onClick={() => {play('paper')}}>보</button>
                <button onClick={resetGame}>초기화</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
