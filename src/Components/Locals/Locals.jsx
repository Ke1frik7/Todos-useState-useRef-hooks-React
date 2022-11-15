import React from "react"
export function Locals(){
    let [defaultDialog, setDialog] = React.useState(!true)
    let parses;
    let localsDialoc = React.useRef()
    const handleDialog = () => {
        let locals = localsDialoc.current
        setDialog((dialog) => dialog === true? false: true)
        parses  = JSON.parse(window.localStorage.getItem("todos"))
        let h2 = document.createElement("h2")
        h2.textContent = parses.title
        locals.innerHTML = null
        locals.appendChild(h2)       
        console.log(locals)
    }
    return(
        <div>
            <button onClick={handleDialog} className="btn btn-secondary">Saqlangan todos</button>
            <dialog ref={localsDialoc} open={defaultDialog} style={{border: "1px solid transparent"}} className="rounded bg-dark text-light">
            </dialog>
        </div>
    )
}