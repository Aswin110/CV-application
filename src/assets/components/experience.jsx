import { useState } from "react"

function Experience () {
    const [show, setShow] = useState(true)
    return (
        <>
            <button onClick={()=>setShow(!show)}>
                <h2>Experience</h2>
            </button>
            {show?(<form action="#">
                <input type="text" placeholder="position"/>
                <input type="text" placeholder="Company"/>
                <input type="date" placeholder="Start Date"/>
                <input type="date" placeholder="End Date"/>
                <textarea type="text" placeholder="Description"/>
                <button>Add</button>
            </form>):''}
        </>
    )
}

export default Experience