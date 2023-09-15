import React, { useState } from "react";

const Contact = () => {
    const[data,setData]=useState({
        name:'',
        email:'',
        mobile:'',
        message:''
    });
    const input_event=(event)=>{
        const{name,value}=event.target;
        setData((oldValues)=>{
        return{
            ...oldValues,[name]:value
        }
        });
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(data.name);
    }
  return (
    <>
      <h1 className="text-center">Contact Us</h1>
      <div className="row">
        <div className="col-md-6 col-md-6 col-10 mx-auto">
         <form onSubmit={formSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control form-control-sm"
              id="exampleFormControlInput1"
              name="name"
              onChange={input_event}
              value={data.name}
              placeholder="Enter Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control form-control-sm"
              id="exampleFormControlInput2"
              name="email"
              onChange={input_event}
              value={data.email}
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">
              Mobile Number
            </label>
            <input 
              class="form-control form-control-sm"
              id="exampleFormControlInput3"
              name="mobile"
              onChange={input_event}
              value={data.mobile}
              placeholder="Enter Mobile No."
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control form-control-sm"
              id="exampleFormControlTextarea1"
              name="message"
              onChange={input_event}
              value={data.message}
              rows="3"
            ></textarea>
          </div>
          <div className="col-md-12">
                <button className="btn btn-outline-primary">Submit form</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
