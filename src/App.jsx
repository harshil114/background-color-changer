import { useState } from 'react';
import './App.css';

function App() {

  const [color,setColor] = useState('')

  return (
    <>
      <div className="container" style={{backgroundColor:color}}>
        <div className="container-top">
          <div className="button-container">
            <button className='button shadow red' onClick={()=>setColor('red')}>Red</button>
            <button className='button shadow green' onClick={()=>setColor('green')}>Green</button>
            <button className='button shadow blue' onClick={()=>setColor('blue')}>Blue</button>
            <button className='button shadow olive' onClick={()=>setColor('olive')}>Olive</button>
            <button className='button shadow grey' onClick={()=>setColor('grey')}>Grey</button>
            <button className='button shadow yellow' onClick={()=>setColor('yellow')}>Yellow</button>
            <button className='button shadow pink' onClick={()=>setColor('pink')}>Pink</button>
            <button className='button shadow purple' onClick={()=>setColor('purple')}>Purple</button>
            <button className='button shadow lavender' onClick={()=>setColor('lavender')}>Lavender</button>
            <button className='button shadow white' onClick={()=>setColor('white')}>White</button>
            <button className='button shadow black' onClick={()=>setColor('black')}>Black</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
