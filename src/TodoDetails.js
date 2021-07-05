import { useParams } from "react-router-dom";

const TodoDetails = () => {
    const {id}= useParams()
    return ( 
        <div>
            <h1>Todo Details - {id} </h1>
        </div>
     );
}
 
export default TodoDetails;