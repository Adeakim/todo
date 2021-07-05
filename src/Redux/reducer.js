import * as actions from "./actionTypes"

let lastid=0
const reducer = (state=[],action) => {

    if (action.type===actions.BLOG_ADDED){
        return(
            [
                ...state,
                {
                    id:++lastid,
                    description:action.payload.description,
                    published:false

                  
                }
            ]
        )
    }else if (action.type===actions.BLOG_REMOVED){
        return(
            
            state.filter(blog=>(blog.id !==action.payload.id))
            
        )
    }else if (action.type===actions.BLOG_PUBLISHED){

        return state.map(blog=>blog.id !== action.payload.id ? blog : {...blog, published: true})
    }
}
 
export default reducer;