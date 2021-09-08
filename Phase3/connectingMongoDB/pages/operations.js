const userInput = ()=>{
    const input = {}
    document.querySelectorAll('input').forEach(info=>{
        input[info.name]=info.value
    })
    return input
}

const addCourse = async()=>{
    await fetch('/api/course/storeCourse',{
        method: 'POST',
        body: JSON.stringify(userInput()),
        headers: {'Content-Type':'application/json'}
    })
    alert("saved successfully!!!")
}

const listAll = async () => {
    const courses = await fetch("/api/course/getAllcourses")
    return courses.json()
}

const fetchAll = async () => {
    const courses = await listAll();
    const temp = document.querySelector("#list")
    courses.forEach(course => {
        temp.innerHTML += `
        <tr>
            <td>${course._id}</td>
            <td>${course.cname}</td>
            <td>${course.desc}</td>
            <td>$${course.amount}</td>
        </tr>`
    })
}

const userInputDel = ()=>{
    const input = {}
    document.querySelectorAll('input').forEach(info=>{
        input[info.name]=info.value
    })
    return input
}

const deleteCourse = async()=>{
    await fetch('/api/course/deleteCourse',{
        method: 'DELETE',
        body: JSON.stringify(userInputDel()),
        headers: {'Content-Type':'application/json'}
    })
    alert("deleted successfully!!!")
}

const userInputUpdate = ()=>{
    const input = {}
    document.querySelectorAll('input').forEach(info=>{
        input[info.name]=info.value
    })
    return input
}

const updateCourse = async()=>{
    await fetch('/api/course/updateCourse',{
        method: 'PUT',
        body: JSON.stringify(userInputUpdate()),
        headers: {'Content-Type':'application/json'}
    })
    alert("Updated successfully!!!")
}