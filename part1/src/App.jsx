import { useState } from 'react'

const Button =({handleFeedBack, label})=>{
  return (
    <button onClick={handleFeedBack}>{label}</button>
  )
}
const StatisticLine=({value,text})=>{
  return (
    <table>
      <tbody>
        <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
    </tbody>
  </table>
  
    
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total=good+bad+neutral;
  const average=(good-bad)/total 
const handleFeedBackGood=()=>{
  setGood(good+1)
}

const handleFeedBackNeutral=()=>{
  setNeutral(neutral+1)
}
const handleFeedBackBad=()=>{
  setBad(bad+1)
}



  return (
    <div>
      Give  FeedBack

      <div style={{display:'flex', gap:8 , marginTop:20, marginBottom:20}}>
      <Button label='good' handleFeedBack={handleFeedBackGood}/>
      <Button label='neutral' handleFeedBack={handleFeedBackNeutral}/>
      <Button label='bad' handleFeedBack={handleFeedBackBad}/>
      </div>
      <h2>Statistics</h2>
    {total===0? <div>No feedBack given</div>:<>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='all' value={good+bad+neutral}/>
      <StatisticLine text='average' value={average}/>
    </>}


    </div>
  )
}

export default App