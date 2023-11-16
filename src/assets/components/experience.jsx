import { useState } from "react"

function Experience ({addExperience, experience, saveExperience, deleteExperience}) {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={()=>setShow(!show)}>
                <h2>Experience</h2>
            </button>
            {show?(<form onSubmit={addExperience}>
                <input type="text" placeholder="position"/>
                <input type="text" placeholder="Company"/>
                <input type="date" placeholder="Start Date"/>
                <input type="date" placeholder="End Date"/>
                <textarea type="text" placeholder="Description"/>
                <button type="submit" >Add</button>
            </form>):''}
        </>
    )
}

export default Experience