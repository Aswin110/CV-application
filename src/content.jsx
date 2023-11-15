import PersonalInfo from "./assets/components/personalInfo.jsx"
import Experience from "./assets/components/experience.jsx"
import Education from "./assets/components/education.jsx"
import Preview from "./assets/components/preview.jsx"
import { useState } from "react"

function Content() {
    const [firstName, setFirstName] = useState(null)
    const [secondName, setSecondName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [location, setLocation] = useState(null)
    const [email, setEmail] = useState(null)

    function putFirstName (e) {
        setFirstName(e.target.value);
    }

    function putSecondName (e) {
        setSecondName(e.target.value);
    }

    function putPhoneNumber (e) {
        setPhoneNumber(e.target.value);
    }

    function putLocation (e) {
        setLocation(e.target.value);
    }

    function putEmail (e) {
        setEmail(e.target.value);
    }
    return (
        <>
            <div className="content">
                <div className="edit-content">
                    <PersonalInfo
                        putFirstName = {putFirstName}
                        putSecondName = {putSecondName}
                        putPhoneNumber = {putPhoneNumber}
                        putLocation = {putLocation}
                        putEmail = {putEmail}
                    />
                    <Education/>
                    <Experience/>
                </div>
                <div className="preview">
                    <Preview
                        firstName = {firstName}
                        secondName = {secondName}
                        phoneNumber = {phoneNumber}
                        email = {email}
                        location = {location}
                    />
                </div>
            </div>
        </>
    )
}

export default Content