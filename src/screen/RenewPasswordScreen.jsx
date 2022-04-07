import { Link } from "react-router-dom";


const RenewPasswordScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const body = JSON.stringify(jsonData);
    console.log(body);
    fetch("http://localhost:5000/auth/renewmail", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body,
    });
  };

  return (
    <div className="d-flex justify-content-center h-100">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="login-form bg-light mt-4 p-4">
            <form onSubmit={handleSubmit} className="row g-3">
              <h4>Bienvenue</h4>
              <div className="col-12">
                <label>email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Votre adresse mail"
                />
                <button type="submit" className="btn btn-dark float-end">
                  Envoyé
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewPasswordScreen;
