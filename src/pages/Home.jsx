import React from 'react'
import {MyDatabase} from '../component/listed'
import Button from '../component/Button'
import LoadingIndicator from '../component/LoadingIndicator'
import { useState } from 'react'
import AmazonFathersDayPromo from '../component/AmazonFathersDayPromo'


 
function Home({name,age,birth,database}) {

   const [loading,SetLoading] = useState(1);
 




const Mariam = (e)=>{
     e.preventDefault();
     
     SetLoading(0)

     setTimeout(()=>{

 SetLoading(1)

     },5000)
   
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
        <AmazonFathersDayPromo></AmazonFathersDayPromo>
       {/* <form  action="" method="post" > */}
        {/* <input type="text"  name="done"/> */}

        
        {  loading &&   <LoadingIndicator></LoadingIndicator>}
        <Button onClick={ABASS} name={namee} />
        <Button onClick={Salamatu} name={"Salamatu"}/>
       <div className="div" style={{fontSize:"120px"}}>
        {loading}
       </div>
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