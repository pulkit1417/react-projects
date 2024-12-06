import { useState } from 'react';
function App(){
  let [count, setCount] = useState(0);
  let [error, setError] = useState('');

  const increment = () =>{
    if(count<20){
      setCount(count+1);
    } else{
      setError("You can't go above 20");
    }
  }

  const decrement = () =>{
    if(count>0){
      setCount(count-1);
    } else{
      setError("You can't go below 0");
    }
  }

  return(
    
      <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl text-center text-red-500 underline font-bold'>Counter: <span className='text-3xl text-center no-underline font-bold text-black'>{count}</span></h1>
      {error && <p className='error'>{error}</p> }
      <div className='flex gap-4 mt-4'>
      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={increment}>Increment</button>
      <button className='bg-red-500 text-white p-2 rounded-md' onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}
export default App;