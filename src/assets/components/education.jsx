import { useState } from "react"
// import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

function Education ({addEducation, education, deleteEducation, saveEducation}) {
    const [show, setShow] = useState(true)
    const [view, setView] = useState(true)
    return (
        <>
            <button onClick={()=>setShow(!show)}>
                <h2>Education </h2>
            </button>
            {show?(
            <form onSubmit={addEducation}>
                <input type="text" placeholder="Course"></input>
                <input type="text" placeholder="University/School"></input>
                <input type="number" placeholder="Start Year"></input>
                <input type="number" placeholder="End Year"></input>
                <textarea type="text" placeholder="Description"></textarea>
                <button type="submit">Add</button>
            </form>
            ):''}
            {education.map((edu) => {
                return(
                <>
                <button onClick={()=>setView(!view)}>
                    {edu.course}
                </button>
                {view?(
                <form key={edu.id} onSubmit={(e) => saveEducation(edu.id, e)}>
                    <input type="text" placeholder="Course" defaultValue={edu.course}></input>
                    <input type="text" placeholder="University/School" defaultValue={edu.university}></input>
                    <input type="number" placeholder="Start Year" defaultValue={edu.start} ></input>
                    <input type="number" placeholder="End Year" defaultValue={edu.end} ></input>
                    <textarea type="text" placeholder="Description" defaultValue={edu.description}></textarea>
                    <button type="submit">save</button>
                    <button onClick={(e)=>deleteEducation(edu.id, e)}>Delete</button>
                </form>
                ):''}
                </>)
            })}
        </>
    )
}

export default Education