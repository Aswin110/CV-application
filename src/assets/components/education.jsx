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
            {show?(<form action="#">
                <input type="text" placeholder="Course"/>
                <input type="text" placeholder="University/School"/>
                <input type="number" placeholder="Start Year"  />
                <input type="number" placeholder="End Year"  />
                <textarea type="text" placeholder="Description"/>
                <button>Add</button>
            </form>):''}
        </>
    )
}

export default Education