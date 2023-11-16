import { useState } from "react"

function Experience ({addExperience, experience, saveExperience, deleteExperience}) {
    const [show, setShow] = useState(true)
    const [view, setView] = useState(true)
    return (
        <div>
            <button onClick={()=>setShow(!show)}>
                <h2>Experience</h2>
            </button>
            {show?(<form onSubmit={addExperience}>
                <input type="text" placeholder="position"/>
                <input type="text" placeholder="Company"/>
                <input type="number" placeholder="Start Date"/>
                <input type="number" placeholder="End Date"/>
                <textarea type="text" placeholder="Description"/>
                <div><button type="submit" >Add</button></div>
            </form>):''}
            {experience.map((exp)=>{
                return(
                    <div key={exp.id}>
                        <button onClick={()=>setView(!view)}>
                            {exp.position}
                        </button>
                        {view ? (<form  onSubmit={(e) => saveExperience(exp.id, e)}>
                            <input type="text" placeholder="Position" defaultValue={exp.position}/>
                            <input type="text" placeholder="Company" defaultValue={exp.company}/>
                            <input type="number" placeholder="Start Date" defaultValue={exp.start}/>
                            <input type="number" placeholder="End Date" defaultValue={exp.end}/>
                            <textarea type="text" placeholder="Description" defaultValue={exp.description}/>
                            <div>
                                <button type="submit" >Save</button>
                                <button onClick={(e)=>deleteExperience(exp.id, e)}>Delete</button>
                            </div>
                        </form>) : '' }
                    </div>
                )
            })}
        </div>
    )
}

export default Experience