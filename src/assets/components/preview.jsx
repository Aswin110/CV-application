import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

function Preview({firstName, secondName, phoneNumber, email, location, education, experience}) {
    return (
        <>
            <div className="cv-preview">
                <div className="personalInfo">
                    <h2>{firstName} {secondName}</h2>
                    <span><FaPhone/> {phoneNumber}</span><span><IoMailSharp/> {email} </span><span><IoLocation/> {location}</span>
                </div>
                <div className="education heading">
                    <h3>Education</h3>
                    {education.map((edu) => {
                        return (
                        <div key={edu.id}>
                            <h4>{edu.course}</h4>
                            <div>
                                <span>{edu.start}-{edu.end} </span><span>{edu.university} </span>
                            </div>
                            <div>{edu.description}</div>
                        </div>
                        )
                    })} 
                </div>
                <div className="Experience heading">
                    <h3>Experience</h3>
                    { experience.map((exp) => {
                        return(
                            <div key={exp.id}>
                                <h4>{exp.position}</h4>
                                <div>
                                    <span>{exp.start} - {exp.end} </span><span>{exp.company} </span>
                                </div>
                                <div>{exp.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Preview