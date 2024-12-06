import React, { useState } from 'react'

const App = () => {
    const [color, setColor] = useState('white');
    const handleColorChange = (event) => {
        const newColor = event.target.innerHTML.toLowerCase();
            setColor(newColor);
    }
    return (
        <>
            <div className='container bg-white flex justify-center items-center relative h-[100vh] w-[100vw]' style={{backgroundColor: color}}>
                <div className='buttons p-5 rounded-xl h-auto w-auto shadow-xl bg-white text-white flex justify-center align-middle gap-3 absolute bottom-10'>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-red-500 rounded'>Red</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-blue-500 rounded'>Blue</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-green-500 rounded'>Green</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-yellow-500 rounded'>Yellow</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-black rounded'>Black</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-gray-500 rounded'>Gray</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-purple-500 rounded'>Purple</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-pink-500 rounded'>Pink</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-orange-500 rounded'>Orange</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-teal-500 rounded'>Teal</button>
                    <button onClick={handleColorChange} className='btn h-auto w-auto p-3 bg-[#fde8e8] shadow-2xl  rounded text-black'>White</button>
                </div>
            </div>
        </>
      )
    
}

export default App