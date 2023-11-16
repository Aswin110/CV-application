import { useState } from "react"
// import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

function Education ({addEducation, education, deleteEducation, saveEducation}) {
    const [show, setShow] = useState(true)

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
                console.log('edu',edu);
                return(
                <form key={edu.id} onSubmit={(e) => saveEducation(edu.id, e)}>
                    <input type="text" defaultValue={edu.course}></input>
                    <input type="text" defaultValue={edu.university}></input>
                    <input type="number" defaultValue={edu.start} ></input>
                    <input type="number" defaultValue={edu.end} ></input>
                    <textarea type="text" defaultValue={edu.description}></textarea>
                    <button type="submit">save</button>
                    <button onClick={(e)=>deleteEducation(edu.id, e)}>Delete</button>
                </form>)
            })}
        </>
    )
}

export default Education