import useFetch from './useFetch';
import TodoComponent from './Todos';
import Create from './Create';

const Home = () => {


    const{data:todo, isPending,error,handleChange,handleDelete}=useFetch("http://localhost:8000/todos/")

    return ( 
          <div>
            <Create/>
        <div className="todo-item">
     
      {error && <h1>{error} </h1> }
     {isPending && <p>Loading ...</p>} 
      {todo && <TodoComponent todos={todo} handleChange={handleChange} handleDelete={handleDelete} /> } 

      </div></div>
     );

}
 
export default Home;