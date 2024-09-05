import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PasswordInput from "./commonComponents/PasswordInput";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    if (userName === "") {
      setError("Please enter your username");
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      setError("Please enter a valid email");
      return;
    }
    if(password === ''){
        setError("Please enter a password");
        return
    }

    navigate("/");
  };
  return (
    <div className="sign-up">
      <div className="child-sign">
        <h1>SignUp</h1>
        <form action="" onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
                setError('')
              setUserName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
                setError('')
              setEmail(e.target.value);
            }}
          />
          <PasswordInput password={password} setPassword={setPassword} setError={setError}/>
          {error !== "" && <p className='error'style={{ color: "red", textAlign: 'left' }}>{error}</p>}
          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
