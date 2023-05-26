import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=':
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'C':
        setInput('');
        setResult('');
        break;
      default:
        setInput(input + value);
        break;
    }
  };




  return (

      <div className='bg-black flex grid justify-start'>
       
      
    <div className="flex   grid justify-items-center  bg-white border-2 border-black rounded-md">

      <title>Calculator</title>
              <h2 className=" bg-sky-500  grid justify-items-center box-content w-80 font-mono">Calculator</h2>
      <div className="flex flex-row ">
      <input  value={input} onChange={() => { }} />
      <h3 className='bg-white'>{result}</h3>
      </div>

      <div className="flex">
        <button className="flex-none w-14 h-14  bg-sky-500 hover:bg-sky-700 " value='1' onClick={handleClick}>
          1
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='2' onClick={handleClick}>
          2
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='3' onClick={handleClick}>
          3
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='+' onClick={handleClick}>
          +
        </button>
      </div>

      <div className="flex">
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='4' onClick={handleClick}>
          4
        </button>
        <button class=" flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='5' onClick={handleClick}>
          5
        </button>
        <button class=" flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='6' onClick={handleClick}>
          6
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='-' onClick={handleClick}>
          -
        </button>
      </div>

      <div className="flex">
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='7' onClick={handleClick}>
          7
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='8' onClick={handleClick}>
          8
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='9' onClick={handleClick}>
          9
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='*' onClick={handleClick}>
          x
        </button>
      </div>

      <div className="flex">
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='C' onClick={handleClick}>
          C
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='0' onClick={handleClick}>
          0
        </button>
        <button class="flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='=' onClick={handleClick}>
          =
        </button>
        <button class=" flex-none w-14 h-14 bg-sky-500 hover:bg-sky-700 ..." value='/' onClick={handleClick}>
          ÷
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default Calculator;