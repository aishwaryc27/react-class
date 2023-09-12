import React from "react";
import { useState } from "react";

function Form() {
  const [records, setRecords] = useState([]);
  const [userregistration, setfirst] = useState({
    username: "",
    password: "",
  });

  const newQ = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setfirst({ ...userregistration, [name]: value });
  };
  const handlesubbit = async(e) => {
    e.preventDefault();
   const response= await  fetch('http://localhost:8080/demo',{
      method:'POST',
    body:JSON.stringify(Form),
    headers:{
      'Content-Type':'application/json'
    }
    })
    const data =await response.text();
    console.log(data)
    const newRecord = {
      ...userregistration,
      id: new Date().getTime.toString(),
    };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);
    setfirst({ username: "", password: "" });
  };
  return (
    <div className="container">
      <div className="card w-25">
        <h1>Login</h1>
        <form action="index.js" onSubmit={handlesubbit}>
          <div>
            <label>username</label>
         
          <input
            type="email"
            name="username"
            id="1"
            value={userregistration.username}
            onChange={newQ}
            placeholder="email"
            required
          ></input> </div>
          <div>
            <label>password</label>

            <input
              type="password"
              name="password"
              id="2"
              value={userregistration.password}
              onChange={newQ}
              placeholder="password"
              required
            ></input>
          </div>
          <input type="submit"></input>
        </form>
        <div>
          {records.map((curElem) => {
            return (
              <div className="moo" key="curElem">
                <p>{curElem.username}</p>
                <p>{curElem.password}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Form;
