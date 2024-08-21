import React from 'react'
import { useState } from 'react'

const Buttoncolor = () => {
    const [color, setColor] = useState('')
    const [userValue, setuserValue] = useState('')

    return (
       
      
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: color }}>
             
          
            <div className="buttons">
               
                <button className='btn ms-5' style={{ backgroundColor: 'green', color: 'black' }} onClick={() => { setColor('green'); setuserValue('GREEN') }}>Green</button>
                <button className='btn ms-5' style={{ backgroundColor: 'yellow', color: 'black' }} onClick={() => { setColor('yellow'); setuserValue('YELLOW') }}>Yellow</button>
                <button className='btn ms-5' style={{ backgroundColor: 'violet', color: 'white' }} onClick={() => { setColor('violet'); setuserValue('VIOLET') }}>Violet</button>
               
                <h1>You Clicked:{userValue}</h1>
            </div>
        </div>
    )
}

export default Buttoncolor
