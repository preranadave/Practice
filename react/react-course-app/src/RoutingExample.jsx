import React from "react";
import { Link, Routes, Router, Route, Links } from "react-router-dom";

const pageStyle = {
  padding: "2rem",
  textAlign: "center",
  color: "#1e293b",
};

function HomePage() {
  return <h1 style={pageStyle}>HomePage</h1>;
}
function AboutUs() {
  return <h1 style={pageStyle}>About Us</h1>;
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  backgroundColor: "#3b82f6",
  fontWeight: "500",
};

const RoutingExample = () => {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f8fafc",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "2rem",
          paddingBottom: "1rem",
          borderBottom: "2px solid #e2e8f0",
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="aboutus" style={linkStyle}>
          About Us
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route
          path="*"
          element={
            <h1 style={{ ...pageStyle, color: "#dc2626" }}>Not FOUND</h1>
          }
        ></Route>
      </Routes>
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
};

export default RoutingExample;
