import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUporm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`submittes ${email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUporm;
