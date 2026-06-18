import React, { useState } from "react";
import "./emailSubscribe.css";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // handle API call here
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <form className="email-subscribe" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailSubscribe;
