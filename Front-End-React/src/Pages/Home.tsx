import React, { SyntheticEvent, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Home = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const data = {
        Email,
        Password

    }

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('https://localhost:44385/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },       
            body: JSON.stringify(data)


        });
        
        setRedirect(true);
      

    }
    if (redirect) {
        return <Redirect to ="/Login" />;
    }


    return (
        <div>
            <form onSubmit={submit}>

                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control" placeholder="name@example.com" required
                    onChange={e => setEmail(e.target.value)} />

                <input type="password" className="form-control" placeholder="******" required
                    onChange={e => setPassword(e.target.value)} />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
                <h1></h1>
                <Link to ="/Register" className="w-100 btn btn-lg btn-primary" >Register</Link>
            </form>

        </div>

    );

};
export default Home;







