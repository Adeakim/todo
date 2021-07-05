import * as actions from "./actionTypes"
let lastid =0

export const blogAdded=(description)=>{
    return {
        type:actions.BLOG_ADDED,
        payload:{
            id: ++lastid,
            description
        }
    }
}

export const blogRemoved= (id)=>{
    return({
        type:actions.BLOG_REMOVED,
        payload:{
            id
        }
    })
   
}

export const blogPublished=(id)=>{
    return ({
        type: actions.BLOG_PUBLISHED,
        payload:{
            id
        }
    })
}