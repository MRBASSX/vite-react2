import React from 'react'
import {MyDatabase} from '../component/listed'
import Button from '../component/Button'


 
function Home({name,age,birth,database}) {


//    const  message = [
//         {
//             "id":12,
//             'price':123
//         }
//     ]

const Mariam = (e)=>{
     e.preventDefault();
     alert("Mariam")
   
  }

  const Salamatu = (e)=>{
    e.preventDefault();
    alert("Salamatu")
  
 }
 const ABASS = (e)=>{
    e.preventDefault();
    alert("ABASS")
  
 }

 var namee = 'ABASS4444'

    return (

        <>
       {/* <form  action="" method="post" > */}
        {/* <input type="text"  name="done"/> */}
        <Button onClick={ABASS} name={namee} />
        <Button onClick={Salamatu} name={"Salamatu"}/>
        <Button onClick={Mariam} name={"Mariam"}/>
       {/* </form> */}
        {/* <MyDatabase database={message}/> */}
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{birth}</h1>
        <div className="">
           
        </div>
        
        </>
    )
    
}

export default Home