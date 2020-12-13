import React, { useEffect, useState } from 'react'
import SkeletonLoader from './SkeletonLoader';
function RealLifeSkeleton() {
    const [post,setPost] = useState('')
    const [loading,setLoading] = useState(false) //you can set useState null,same result.
    useEffect(()=>{
        setLoading(true) //after first render its true for slow internet
        const timeOut = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/photos/1')
            const data=  await res.json() //turns it into object
            setPost(data)
            setLoading(false) //after data render its false
        }
        timeOut()
    },[post])
    return (
        <div>
            {  
             !loading ?
               
               <SkeletonLoader/>
                
                :
                <div>
                  <div style={{display:"flex",paddingLeft:'10px'}}>
                    <img src={post.url} alt='' style={{width:'100px',height:'100px',borderRadius:'50%'}}/>
                   <div style={{paddingLeft:'20px'}}>
                        <h3>jsonplaceholder</h3>
                        <h3>fake api</h3>
                   </div>
                  </div>
                    <div style={{paddingLeft:'10px'}}>
                        <h4>{post.title}</h4>
                        <h4>{post.title}</h4>
                        <h4>here is a little sentence</h4>
                    </div>
               </div>
             }
        </div>
    )
}

export default RealLifeSkeleton
