const Form = ({fullName, date, city, number, streetAd, email, nameChange, dobChange, cityChange, streetChange, numberChange, emailChange, submitForm, isSubmitted}) => {
    return(
        <div>
            <form onSubmit={submitForm}>
                <fieldset>
                    <legend>Personal Info</legend>
                    <div>
                    FullName: <input value = {fullName} onChange={nameChange}/>
                    </div>
                    <div>
                    Date of Birth: <input value = {date} onChange={dobChange} />
                    </div>
                    <div>
                    country: <select><option>...</option></select>
                    </div>
                    <div>
                    city: <input value = {city} onChange={cityChange}/>
                    </div>
                    <div>
                    Street Address: <input value = {streetAd} onChange={streetChange}/>
                    </div>
                    <div>
                    Mobile Number: <input value = {number} onChange={numberChange}/>
                    </div>
                    <div>
                    Email: <input type="email" value = {email} onChange={emailChange} />
                    </div>
                    <div>
                    gender: <br /> <input type="radio"/> <label >male</label>
                    <input type="radio" /> <label>female</label>
                    <input type="radio" /> <label>other</label>
                    </div>
                    <button type="submit">Submit</button>
                    {isSubmitted ? <p>Thank you for submitting form</p> : <p>Please submit the form</p>}
                    
                </fieldset>
            </form>
        </div>

    )
}

export default Form