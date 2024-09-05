import { useState } from "react";
import PasswordInput from "./commonComponents/PasswordInput";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleChange = (event)=>{
      setError('');
      setEmail(event.target.value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
      if(!email.includes('@') || !email.includes('.com')){
        setError('Please enter a valid email address');
        return;
      }
      if(password.length < 8){
        setError('Please enter a password greater than 8 characters');
        return;
      }
      
        navigate('/')
    }

    
  return (
    <div className="login">
      <div className="login-div">
        <h1>Login</h1>
      <form action='' onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Email Address:</label>
          <input type="email" name="username" value={email} onChange={handleChange} placeholder="email" />
         
        </div>
        <div>
            <label htmlFor="Password">Password</label>
            <PasswordInput setError={setError} password={password}  setPassword={setPassword} />
        </div>
        {error !== '' && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}
        <Button variant="primary" type='submit'>Submit</Button>
      </form>
      <p>Not Registered yet? <Link to='/signup'>Create an Account</Link></p>
      </div>
      
    </div>
  );
};

export default Login;
