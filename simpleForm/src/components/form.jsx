const Form = () => {
    return(
        <div>
            <form>
                <fieldset>
                    <legend>Personal Info</legend>
                    <div>
                    FullName: <input/>
                    </div>
                    <div>
                    Date of Birth: <input />
                    </div>
                    <div>
                    country: <select><option>...</option></select>
                    </div>
                    <div>
                    city: <input/>
                    </div>
                    <div>
                    Street Address: <input/>
                    </div>
                    <div>
                    Mobile Number: <input/>
                    </div>
                    <div>
                    Email: <input type="email" />
                    </div>
                    <div>
                    gender: <br /> <input type="radio"/> <label >male</label>
                    <input type="radio" /> <label>female</label>
                    <input type="radio" /> <label>other</label>
                    </div>
                    <button>Submit</button>
                    
                </fieldset>
            </form>
        </div>

    )
}

export default Form