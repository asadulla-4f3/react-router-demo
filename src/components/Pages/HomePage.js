import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Home Page</div>
      <button onClick={() => navigate("/details")}>Go to Details Form</button>
    </div>
  );
}

export default HomePage;
