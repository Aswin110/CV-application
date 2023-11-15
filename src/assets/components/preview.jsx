import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

function Preview() {
    return (
        <>
        
            <div className="cv-preview">
                <div className="personalInfo">
                    <h2>Aswin</h2>
                    <span><FaPhone/> +918075447913 </span><span><IoMailSharp/> aswinashok110@gmail.com </span><span><IoLocation/> kochi</span>
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