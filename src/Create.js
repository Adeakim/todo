import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [item,setItem]= useState("")
    const [completed,setComtpleted]= useState(false)
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const items= {item,completed}      
        fetch("http://localhost:8000/todos",{
            method:"POST",headers:{"content-type":"application/json"},body: JSON.stringify(items)
        }).then(()=>{
            setComtpleted(false)
            setItem("")

        }).then(()=>{
            history.push("/")
        })
    }

    
    return ( 
        <div className="list">
            <form onSubmit={handleSubmit} >
                <input type="text" value={item} required
                    onChange={(e)=>setItem(e.target.value)} />
                <button>Add todo</button>
            </form>
        
        </div>
     );
}
 
export default Create;