import PersonalInfo from "./assets/components/personalInfo.jsx"
import Experience from "./assets/components/experience.jsx"
import Education from "./assets/components/education.jsx"
import Preview from "./assets/components/preview.jsx"

function Content() {
    return (
        <>
            <div className="content">
                <div className="edit-content">
                    <PersonalInfo/>
                    <Education/>
                    <Experience/>
                </div>
                <div className="preview">
                    <Preview/>
                </div>
            </div>
        </>
    )
}

export default Content