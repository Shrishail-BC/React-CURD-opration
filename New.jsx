import react, { useState,useEffect } from "react";
import { Container } from "react-bootstrap";


function New() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    const handalsubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);

    }

   
    return (
        <Container className="mt-5 pt-5 bg-blue">
            <form onSubmit={handalsubmit}>
                <div className="form-group row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit"   className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </Container>
    )
}
export default New; 