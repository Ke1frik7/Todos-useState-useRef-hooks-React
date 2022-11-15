import { TodosItem } from "../TodosItem"
export const TodoList = ({defaultArray, setArray}) => {
    return(
        <ul className="w-50 mx-auto border bg-light">
            {defaultArray.map((todo)=>(
                <TodosItem defaultArray={defaultArray} setArray={setArray}  key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
}