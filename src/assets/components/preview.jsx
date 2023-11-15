import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

function Preview({firstName, secondName, phoneNumber, email, location}) {
    return (
        <>
            <div className="cv-preview">
                <div className="personalInfo">
                    <h2>{firstName} {secondName}</h2>
                    <span><FaPhone/> {phoneNumber}</span><span><IoMailSharp/> {email} </span><span><IoLocation/> {location}</span>
                </div>
                <div className="education heading">
                    <h3>Education</h3>
                    <h4>Course</h4>
                    <div>
                        <span>start-end </span><span>University </span>
                    </div>
                    <div>Description</div>
                </div>
                <div className="Experience heading">
                    <h3>Experience</h3>
                    <h4>Position</h4>
                    <div>
                        <span>start-end </span><span>Company </span>
                    </div>
                    <div>Description</div>
                </div>
            </div>

        </>
    )
}

export default Preview