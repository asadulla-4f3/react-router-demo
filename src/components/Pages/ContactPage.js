import React from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Contact Page</div>
      <button onClick={() => navigate("/submit", { replace: true })}>
        Go to Submit Page
      </button>
    </div>
  );
}

export default ContactPage;
