import {v4} from "uuid"
import {useRef} from "react"
export function TodoInput({setArray}){
    let input = useRef()
    const handleClick = () => {
        let TodosObject = {
            id: v4(),
            title: input.current.value,
            userId: v4()
        }
        setArray((array) => [...array, TodosObject ])
        input.current.value = null
    }
    return(
        <div className="w-25 mx-auto m-2 d-flex align-items-center">
            <input type="text" ref={input} className="bg-light form-control m-2"  />
            <button className="btn btn-success m-2" onClick={handleClick}>Yaratish</button>
        </div>
        
    )
}