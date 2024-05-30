import Form from "./components/form"
import {useState} from "react"

function App() {
  const [fullName, setfullName] = useState('')
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [streetAd, setStreetAd] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

 
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
      cityChange={cityChange} streetChange={streetChange} numberChange={numberChange} emailChange={emailChange} isSubmitted={isSubmitted} />

    </>
  )
}

export default App
