import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result'
import {useState} from "react";

type ResultsState = {
  country: string,
  cityName: string,
  temperature: string,
  conditionText: string,
  icon: string
}


const App = () => {
  const [city,setCity] = useState<string>("")
  const [results,setResults] = useState<ResultsState>({
    country: "",
    cityName:"",
    temperature: "",
    conditionText:"",
    icon:""
  })

  const getWeather = (e:any) =>{
      e.preventDefault()
      fetch("https://api.weatherapi.com/v1/current.json?key=c2093c77c4cf40ce9cd52251242810&q=London&aqi=no")
      .then(res => res.json())
      .then(data => {setResults({
        country: data.location.country,
        cityName: data.location.cityName,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      })
    })
  }

  return(
    <div>
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Result results={results}/>
    </div>
  )
}

export default App