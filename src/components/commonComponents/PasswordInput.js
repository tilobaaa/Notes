import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ password, setPassword, setError }) => {
  const [showText, setShowText] = useState(false);
  return (
    <div className="password">
      <input
        type={showText ? "text" : "password"}
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setError("");
          setPassword(e.target.value);
        }}
      />
      {showText ? (
        <FaRegEyeSlash
          className="eye"
          onClick={() => {
            setShowText((prev) => !prev);
          }}
        />
      ) : (
        <FaRegEye
          onClick={() => {
            setShowText((prev) => !prev);
          }}
          className="eye"
        />
      )}
    </div>
  );
};

export default PasswordInput;
