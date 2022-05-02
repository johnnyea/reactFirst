import './App.css';
import QuoteBox from './components/QuoteBox';
import colors from './colors.json';
import { useState } from 'react';

function App() {

  const randomNumber = Math.floor(Math.random()*colors.length)

  const [randomColor, setRandomColor] = useState(randomNumber)

  const aleatoryBg = () =>
   {
    const randomNumber = Math.floor(Math.random()*colors.length)
    setRandomColor(colors[randomNumber].name)
   } 

  return (
    <div className="App" style={{background: randomColor}}>
        <QuoteBox background = {randomColor} randomNumber ={randomNumber}/>
        <div className='button' style={{background : randomColor}}>
            <button onClick={aleatoryBg}>
                <i className='fa-solid fa-rotate' style={{fontSize: '20px', color: randomColor}}></i>
            </button>
        </div>
    </div>
  );
}

export default App;
