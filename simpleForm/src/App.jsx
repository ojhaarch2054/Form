import Form from "./components/form"
import InFo from "./components/info"
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
  const [isSubmitted, setIsSubmitted] = useState(false)
  //state for fetching data from api
  const [country, setCountry] = useState([])
  //for adding data into the other page
  const [info, setInfo] = useState([])
  //for user experience define new state to show the api's fetching state
  const[loading, setLoading] = useState(false);
  
  //useEffect to fetch data when the page render
  useEffect(() => {
    const loadCountry = async() =>{
      //till the data fetch loading page will show
      setLoading(true)
      //use await to wait until it fetches data
      const response = await axios.get('https://restcountries.com/v3.1/all')
      //data will store in country state after fetching
      setCountry(response.data);
      // Closed the loading page 
      setLoading(false); 
      }
      //call the loadCountry function
      loadCountry()
    
  }, [])

  //function for the onchange method 
  const nameChange = (event) => {
    setfullName(event.target.value)
  }
  //when user selectt date from the datePicker the dobChange function is called with the selected date as the argument
  const dobChange = (date) => setDate(date);


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
    setEmail(event.target.value);
  };

  //for form submit
  const submitForm = (event) => {
      event.preventDefault()
      switch(true){
        case fullName == "":
        alert('Enter the full name')
        break;
        case date == "":
        alert('Enter the date of bith')
        break;
        case city == "":
        alert('Enter the city')
        break;
        case country == "":
        alert('Please choose the country')
        break;
        case number == "":
        alert('Enter the valid phone number')
        break;
        case email == "":
        alert('Enter your email id')
        break;
        case isSubmitted:
        alert('form submitted')
        break;
      }

      const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!reg.test(email)) {
          alert('Invalid Email')
  }
    setIsSubmitted(true);

    const formObj = {
      FullName : fullName,
      "Date Of Birth" : date,
      Country: country,
      City: city,
      "Street Address" : streetAd,
      "Mobile Number" : number,
      Email : email
    }
    setInfo(info.concat(formObj))
    setfullName('')
    setDate('')
    setCountry('')
    setCity('')
    setStreetAd('')
    setNumber('')
    setEmail('')
    

  }
 


  return (
    <>
      <Form fullName={fullName} date={date} city={city} streetAd={streetAd}
      number={number} email={email} nameChange={nameChange} dobChange={dobChange} submitForm={submitForm}
      cityChange={cityChange} streetChange={streetChange} numberChange={numberChange} loading={loading} emailChange={emailChange} isSubmitted={isSubmitted} country={country} />
      <InFo fullName={fullName} date={date} city={city} streetAd={streetAd} number={number} email={email} />
    </>
  )
}

export default App
