

const TodoComponent = (props) => {
   
   const todos= props.todos
   const handleChange=props.handleChange
   const handleDelete=props.handleDelete



   
  


    return ( 
        <div className="todo-list" >
            {todos.map(item=>(
                <div key={item.id} >
                <input type="checkbox" checked={item.completed} onChange={()=>handleChange(item.id)} />
                
                <label >{item.item} </label>
                <button onClick= {()=>handleDelete(item.id)} variant="danger">Delete</button> <hr></hr>

                </div>
            ))}
        </div>
     );
}
 
export default TodoComponent;