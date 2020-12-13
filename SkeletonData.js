import React, { useEffect, useState } from 'react'
import SkeletonLoader from './SkeletonLoader';
function SkeletonData() {
    const [post,setPost] = useState('')
    useEffect(()=>{
        const timeOut = setTimeout(async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/photos/1')
            const data=  await res.json() //turns it into object
            setPost(data)
        },1000)
        return ()=>clearTimeout(timeOut)
    },[post])
    return (
        <div>
            {   post ?
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
                
                :
                <SkeletonLoader/>
             }
        </div>
    )
}

export default SkeletonData
