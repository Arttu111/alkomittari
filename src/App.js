import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Options from './components/Options';

function App() {
const [weight, setWeight] = useState(90)
const [bottles, setBottles] = useState(0)
const [time, setTime] = useState(0)
const [gender, setGender] = useState("male")
const [result, setResult] = useState(0)

function handleSubmit(e){
  e.preventDefault();
  let bloodLevel = 0;
  let liters = bottles * 0.33
  let grams = liters * 8 * 4.5
  let burning = weight / 10
  let gramsLeft = grams - (burning * time)
  if (gender ==="male"){
    bloodLevel = (gramsLeft /(weight * 0.7))
  }
  else { bloodLevel = (gramsLeft /(weight * 0.6))
  }
  if (bloodLevel < 0){
    bloodLevel = 0;
  }
  setResult(bloodLevel);
}




  return (
    <>
<div>    
  <form onSubmit={handleSubmit}>
    <h3>Calculating alcohol blood level</h3>
    <div>
      <label>Weight</label>
      <input value={weight} onChange={e => setWeight(e.target.value)} type="number" step="1"/>
    </div>
    <div>
      <label>Bottles</label>
      <select value={bottles} onChange={e => setBottles(e.target.value)}><Options/>
      </select>
      
    </div>
    <div>
      <label>Time</label>
      <select value={time} onChange={e => setTime(e.target.value)}><Options/>
      </select>
    </div>
    <div>
    <label>Gender</label>
          <input type="radio" name="gender" value = "male" defaultCheked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type ="radio" name="gender"
          value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      
    </div>
    <div>
      <label>Blood alcohol level </label>
      <output>{result.toFixed(1)}</output>
    </div>
      <button>Calculate</button>
  </form>  
  </div>  
    </>
  );
}

export default App;
