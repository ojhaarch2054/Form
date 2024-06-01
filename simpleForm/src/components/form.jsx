//to show the date 
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Form = ({fullName, date, city, number, streetAd, loading, email, nameChange, dobChange, cityChange, streetChange, numberChange, emailChange, submitForm, isSubmitted, country}) => {
    return(
        <div>
            <form onSubmit={submitForm}>
                <fieldset>
                    <legend>Personal Info</legend>
                    <div>
                    FullName: <input value = {fullName} onChange={nameChange}/>
                    </div>
                    <div>
                    Date Of Birth : <DatePicker selected={date} onChange={dobChange} />
                    </div>
                    <div>
                    Country: <select>loading ? (<option>loading...</option>) : {country.map((cName, index) => <option value={cName} key={index}> {cName.name.common}</option>)}</select>
                    </div>
                    <div>
                    City: <input value = {city} onChange={cityChange}/>
                    </div>
                    <div>
                    Street Address: <input value = {streetAd} onChange={streetChange}/>
                    </div>
                    <div>
                    Mobile Number: <input type="text" value={number} onChange={numberChange} onKeyPress={event => {
                        if (isNaN(event.key)) {
                        event.preventDefault();
                        alert('Enter only numbers, not string');
                        }
                    }}/>
                    </div>
                    <div>
                    Email: <input type="email" value = {email} onChange={emailChange} />
                    </div>
                    <div>
                    gender: <br /> <input type="radio" /> <label >male</label>
                    <input type="radio" /> <label>female</label>
                    <input type="radio" /> <label>other</label>
                    </div>
                    <button type="submit" value={isSubmitted}>Submit</button>
                    
                    
                </fieldset>
            </form>
        </div>

    )
}

export default Form