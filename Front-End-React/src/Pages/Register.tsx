
import React, { SyntheticEvent, useState } from "react";
import { Link, Redirect } from "react-router-dom";
const Register = () => {
    const [FirstName, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const data = {
        Email,
        Password,
        FirstName,
        LastName
        
    }

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
         await fetch('https://localhost:44385/api/auth/register', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
    
        });
        
       
      setRedirect(true);

    }
    
    if (redirect) {
        return <Redirect to="/Home" />
    }

    return (
        <form onSubmit={submit}>

            <h1 className="h3 mb-3 fw-normal">Register</h1>

            <input className="form-control" placeholder="FirstName" required
                onChange={e => setName(e.target.value)} />

            <input className="form-control" placeholder="Last Name" required
                onChange={e => setLastName(e.target.value)} />

            <input type="email" className="form-control" placeholder="name@example.com" required
                onChange={e => setEmail(e.target.value)} />

            <input type="password" className="form-control" placeholder="******" required
                onChange={e => setPassword(e.target.value)} />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            <h1></h1>
            <Link to ="/" className="w-100 btn btn-lg btn-primary" >Direct to Login Page</Link>
        </form>
    );
};

export default Register;