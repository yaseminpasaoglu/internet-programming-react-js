import React , { useState } from 'react'
import jsonData from "../data.json";
import "./Form.css";

     
     

function Form() {
  
    let [name, setName] = useState('');
    // const [id, setId] = useState('');

    const onChange = (e) => {
        e.preventDefault();
        // jsonData is javascript array when import it
        const data = jsonData.find((d) => d.id == e.target.value);

        if (data) {
            setName(data.name);
          
        }
    };

   
    return (
        
        <div >
           <form className="back">
           <input onChange={onChange} />
           <p className="name">{name}</p>
           </form>
           
        </div>
       
            
        
    )
 
 
            }
   


export default Form