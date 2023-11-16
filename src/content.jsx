import PersonalInfo from "./assets/components/personalInfo.jsx"
import Experience from "./assets/components/experience.jsx"
import Education from "./assets/components/education.jsx"
import Preview from "./assets/components/preview.jsx"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Content() {
    const [firstName, setFirstName] = useState(null);
    const [secondName, setSecondName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [location, setLocation] = useState(null);
    const [email, setEmail] = useState(null);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

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

    function addEducation (e) {
        e.preventDefault();
        let id = uuidv4();
        let course = e.target[0].value;
        let university = e.target[1].value;
        let start = e.target[2].value;
        let end = e.target[3].value;
        let description = e.target[4].value;
        let educationObj = { id, course, university, start, end, description}
        setEducation((education) => [...education, educationObj]);
        clear(e);
    }

    function addExperience (e) {
        e.preventDefault();
        let id = uuidv4();
        let position = e.target[0].value;
        let company = e.target[1].value;
        let start = e.target[2].value;
        let end = e.target[3].value;
        let description = e.target[4].value;
        let experienceObj = { id, position, company, start, end, description }
        setExperience((experience) => [...experience, experienceObj]);
        clear(e);
    }

    function clear (e) {
        for (let i = 0; i < 5; i++) {
            e.target[i].value = '' ;
        }
    }

    function deleteEducation (id, e) {
        e.preventDefault();
        let eduId = education.filter((edu)=> edu.id !== id);
        setEducation(eduId);
        
    }

    function deleteExperience (id, e) {
        e.preventDefault();
        let expId = experience.filter((exp) => exp.id !== id)
        setExperience(expId);
    }

    function saveEducation (id, e) {
        e.preventDefault();
        let course = e.target[0].value;
        let university = e.target[1].value;
        let start = e.target[2].value;
        let end = e.target[3].value;
        let description = e.target[4].value;
        let updatedEducation = {id, course, university, start, end, description} 
        setEducation(education.map((edu)=> {
            if (edu.id === id) {
                return {...edu, ...updatedEducation};
            } else {
                return edu;
            }
        }))
    }

    function saveExperience (id, e ){
        e.preventDefault();
        console.log(e,e.target[0].value,e.target[1].value);
        let position = e.target[0].value;
        let company = e.target[1].value;
        let start = e.target[2].value;
        let end = e.target[3].value;
        let description = e.target[4].value;
        let updatedExperience = { id, position, company, start, end, description}
        setExperience(experience.map((exp) => {
            if (exp.id === id) {
                return {...exp, ...updatedExperience};
            } else {
                return exp;
            }
        }))
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
                    <Education
                        addEducation = {addEducation}
                        education = {education}
                        deleteEducation = {deleteEducation}
                        saveEducation = {saveEducation}
                    />
                    <Experience
                        addExperience={ addExperience }
                        experience = {experience}
                        deleteExperience = {deleteExperience}
                        saveExperience = {saveExperience}
                    />
                </div>
                <div className="preview">
                    <Preview
                        firstName = {firstName}
                        secondName = {secondName}
                        phoneNumber = {phoneNumber}
                        email = {email}
                        location = {location}
                        education = {education}
                        experience = {experience}
                    />
                </div>
            </div>
        </>
    )
}

export default Content