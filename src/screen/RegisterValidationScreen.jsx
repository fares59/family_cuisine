import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../helpers/string.helper";

const RegistertValidationScreen = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("t");

  const [message, setMessage] = useState(null);

  const navigate = useNavigate();




  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/auth/validate", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const text = await response.text();
      const data = await text.toJson();
      setMessage({
        color: data.completed ? "alert-success" : "alert-danger",
        text: data.message,
      });
      if (data.completed) {
        setTimeout(() => navigate("/Login"), 4000);
        document
          .querySelector(".alert")
          .addEventListener("closed.bs.alert", function () {
            navigate("/Login");
          });
      }
    };
    fetchData().catch(console.error);
  },[]);

  return (
    <>
      <h1>RegisterValidationScreen</h1>
      {message && (
        <div>
          <p>
            TEST
          </p>
          {message.text}
          {/* <form onSubmit={handleSubmit}>
          <button type="submit" className="btn btn-dark float-end" >
          Login
        </button>
          
          </form> */}
        </div> 
        
      )}
    </>
  );
};

export default RegistertValidationScreen;