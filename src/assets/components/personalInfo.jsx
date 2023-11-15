function PersonalInfo ({
        putFirstName, putSecondName, putPhoneNumber, putLocation, putEmail
    }) {
    return (
        <>
            <h2>Personal Information</h2>
            <form action="#">
                <input type="text" placeholder="First Name" onChange={putFirstName}></input>
                <input type="text" placeholder="Second Name" onChange={putSecondName}></input>
                <input type="number" placeholder="Phone Number" onChange={putPhoneNumber}></input>
                <input type="text" placeholder="Location" onChange={putLocation}></input>
                <input type="email" placeholder="Email" onChange={putEmail}></input>
            </form>
        </>
    )
}

export default PersonalInfo