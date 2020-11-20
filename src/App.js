import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function OutputProccess(props) {  
  let arr = props.data.split(' ')
  let len = arr.length
  let swap = []
    
  for (let i = len-1; i>=0; i--){
    for(let j = 1; j<=i; j++){        
      if(arr[j-1]>arr[j]) {          
        let temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp                 
        swap.push(`[${arr[j-1]}, ${temp}] -> ${arr}`)        
      }      
    }
  }  
  
  return (
    <div>
      <ol>
        {swap.map((value, index) => 
          <li key={index}>{value}</li>
        )}
      </ol>
      <p>Jumlah Swap: {swap.length}</p>
    </div>    
  )  
}

function AddNumbersForm(props) {
  const [inputNumber, setInputNumber] = useState('')  

  function handleChange(e) {
    setInputNumber(e.target.value)
  } 

  function handleSubmit(e) {        
    if(inputNumber !== '') {
      props.handleSubmit(inputNumber)
      setInputNumber('')    
    }

    e.preventDefault()
  }

  return (
    <div>
      <h1>Sorting</h1>
      <form onSubmit={handleSubmit}>
        <label>Input(n): </label>
        <input 
          type="text" 
          placeholder="Contoh input: 4 9 7 5 8 9 3"
          onChange={handleChange} 
        />
        <button type="submit">Submit</button>       
      </form>      
    </div>
  )

}

function App() {
  const [numbers, setNumbers] = useState('')

  function addNumber(num) {
    setNumbers(num)
  }

  return (
    <div>
      <AddNumbersForm handleSubmit={addNumber} />      
      <OutputProccess data={numbers} />   
    </div>
  )

}


export default App;
