const InFo = ({ fullName, date, city, streetAd, number, email }) => {
    return(
        <div>
            <p>Full Name: {fullName}</p>
            <p>Date: {date.toString()}</p>
            <p>City: {city}</p>
            <p>Street Address: {streetAd}</p>
            <p>Number: {number}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default InFo