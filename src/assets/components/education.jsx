function Education () {
    return (
        <>
            <h2>Education</h2>
            <form action="#">
                <input type="text" placeholder="Course"/>
                <input type="text" placeholder="University/School"/>
                <input type="number" placeholder="Start Year"  />
                <input type="number" placeholder="End Year"  />
                <textarea type="text" placeholder="Description"/>
                <button>Add</button>
            </form>
        </>
    )
}

export default Education