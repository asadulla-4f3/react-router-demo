import React from "react";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Details Page</div>
      <button onClick={() => navigate("/contact")}>Go to Contacts Form</button>
    </div>
  );
}

export default DetailsPage;
