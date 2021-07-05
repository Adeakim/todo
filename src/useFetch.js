import {useState, useEffect} from "react"

const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [isPending,setIspending]=useState(true)
    const [error,setError]=useState(null)

    
    
    
    useEffect(()=>{
     
        console.log('use effect')
        fetch (url)
        .then(res=>{
            if (!res.ok){
                throw Error ("Data for resources could not be fetch")
            }
          return res.json()
        }).then (data=>{
          setData(data)
          setIspending(false)
      
        }).catch(err=>{
            setError(err.message)
            setIspending(false)
        })
      },[url])

      const handleChange=(id)=>{
        
        const Todo= data.map(item=>{
          if(item.id===id){
            item.completed= !item.completed
          }
          return item
        } )
      setData(Todo)
      
      }

      // const handleDelete=(id)=>{
      //   const updatedTodo = data.filter(todo=>todo.id !==id)
      //    setData(updatedTodo)
        
      //   }

      const handleDelete=(id)=>{
        fetch(url + id,{
            method:"DELETE"
        }).then (()=>{
          
          setIspending(false)
        })
       }

        
    return {data,isPending,error,handleChange,handleDelete}
}
 
export default useFetch;