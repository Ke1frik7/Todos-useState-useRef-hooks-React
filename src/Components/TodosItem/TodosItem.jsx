import React from "react"
import MooduleCss from "./TodosItem.module.css"
export const TodosItem = ({defaultArray, todo, setArray }) => {
    console.log(defaultArray, todo)
    let list = React.useRef()
    let filter;
    function handleDelete(){
        if(defaultArray){
        filter = defaultArray.filter((object) => object.id !== list.current.id )
        console.log(filter)
        setArray(filter)
        }
    }
    const handleEdit = (event) => {
        const input = event.target.closest(".list-item").querySelector("#leo")
        input.readOnly = false
    }
    function handleKey(event){
        if(event.keyCode == 13){
            event.target.readOnly = true
            todo.title = event.target.value
            alert("Uzgartirish kiritildi")
        }
    }
    let parses;
    let deletes;
    function handleChecked(event){
        if(event.target.checked = true){
        window.localStorage.setItem("todos", JSON.stringify(todo))
        parses = JSON.parse(window.localStorage.getItem("todos"))    
        }else if(event.target.checked = false){
            deletes = window.localStorage.removeItem("todos")
        }
        
    }
    
    return(
        <li ref={list} id={todo.id} className="w-100 d-flex justify-content-around align-items-center border-bottom p-2 list-item">
            <input type="checkbox" onChange={handleChecked} />
            <input onKeyUp={handleKey} type="text" readOnly defaultValue={todo.title} className={MooduleCss.input} id="leo" />
            <div >
            <button className="btn btn-success m-2" onClick={handleEdit}>O'zgartirsh</button>
            <button className="btn btn-danger m-2" onClick={handleDelete}>O'chirish</button>
            </div>
        </li>
    )
 }