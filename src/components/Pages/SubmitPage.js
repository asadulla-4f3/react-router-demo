import React from "react";
import { useNavigate } from "react-router-dom";

function SubmitPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Submit Page</div>
      <button onClick={() => navigate("/", { replace: true })}>Submit</button>
    </div>
  );
}

export default SubmitPage;
