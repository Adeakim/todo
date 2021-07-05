import './App.css';
import Create from './Create';
import Home from './Home';
import TodoDetails from './TodoDetails';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"





function App(){

  return(
  <Router>
      <div>
        <Switch>
              <Route exact path="/"><Home/></Route>   
              <Route path="/add" ><Create/></Route> 
              <Route path="/todos/:id" ><TodoDetails/></Route> 
             
          </Switch> 
          
      
       
       
      </div>
  </Router>
    
    
   
  )
}


export default App