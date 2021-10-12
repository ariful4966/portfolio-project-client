import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Form.css" 

const Form = () => {
    
    const [sent, setSent] = useState(false);

    const data = {
        firstName: "",
        lastName:"",
        email:"",
        message:""
    }

    const handleChange=(e)=>{
        data[e.target.name] = e.target.value
    }
    const resetForm=()=>{
        
        
        setTimeout(()=>{
            setSent(false)
        },10000)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://portfolio-project-contact-form.herokuapp.com/api/forma',data)
        .then(res=>{
            setSent(true)
        },resetForm()).catch(()=>{
            console.log("Message not sent")
        })
    }


    return (
        <div className='container'>
            <form onSubmit={handleSubmit} > 
                {/*singleItem*/} 
                <div className="singleItem">
                    <label  htmlFor="firstName">First Name</label>
                    <input type="text" name='firstName' onChange={handleChange} placeholder='Your First name'
                     className="firstName"/>
                </div>
                {/*singleItem*/} 
                <div className="singleItem">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name='lastName' onChange={handleChange} placeholder='Your Last Name'
                     className="lastName"/>
                </div>
                {/*singleItem*/} 
                <div className="singleItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' onChange={handleChange} placeholder='Your email'
                     className="email"/>
                </div>
                {/*singleItem*/} 
                <div className="textArea singleItem">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name='message' onChange={handleChange} placeholder='Your Message'
                     className="message"/>
                </div>
                { sent &&
                    <div className="successMsg" >
                    Message has been Sent
                    </div>
                }
                
                <div className="btn">
                    <button className='btn btnSubmit ' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;