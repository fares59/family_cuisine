// import { useEffect, useState } from "react";

// import { useNavigate } from "react-router-dom";

import "../helpers/string.helper";

const ImgScreen = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("files", event.files);
     const formData = new FormData(); //event.currentTarget
     formData.append("files");
     console.log(formData);
    // const jsonData = Object.fromEntries(formData.entries());
    // const body = JSON.stringify(jsonData);
   
   
      await fetch("http://localhost:5000/img/postImage", {
        method: "post",
        headers: {
          "content-type": "multipart/form-data",
        },
     
      })
        // .then((response) => response.json())
        // .then((jsonData) => {
          // console.log(jsonData);
         
        // });
    
  };

  return (
    <div className="mb-3">
      <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="formFile" className="form-label">
          Default file input example
        </label>
        <input className="form-control" type="file" name="file" id="formFile" />
        <button type="submit" className="btn btn-dark float-end">
                  Envoyé
                </button>
      </form>
    </div>
  );
};

export default ImgScreen;
