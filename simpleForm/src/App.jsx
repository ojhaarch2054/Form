import Form from "./components/form"
import {useEffect, useState} from "react"
import axios from 'axios'

function App() {
  //state for input field
  const [fullName, setfullName] = useState('')
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [streetAd, setStreetAd] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  //state for fetching data from api
  const [country, setCountry] = useState([])

  //useEffect to fetch data when the page render
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then((response) => {
      setCountry(response.data);
    })
  }, [])

  //function for the onchange method 
  const nameChange = (event) => {
    setfullName(event.target.value)
  }
  const dobChange = (event) => {
    setDate(event.target.value)
  }
  const cityChange = (event) => {
    setCity(event.target.value)
  }
  const streetChange = (event) => {
    setStreetAd(event.target.value)
  }
  const numberChange = (event) => {
    setNumber(event.target.value)
    
  }
  const emailChange = (event) => {
    setEmail(event.target.value)
  }
  //for form submit
  const submitForm = (event) => {
    event.preventDefault()
    setIsSubmitted(true);
  }


  return (
    <>
      <Form fullName={fullName} date={date} city={city} streetAd={streetAd}
      number={number} email={email} nameChange={nameChange} dobChange={dobChange} submitForm={submitForm}
      cityChange={cityChange} streetChange={streetChange} numberChange={numberChange} emailChange={emailChange} isSubmitted={isSubmitted} country={country} />
    </>
  )
}

export default App
