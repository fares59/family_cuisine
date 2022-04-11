
import { useSearchParams} from "react-router-dom";


const RenewPassword2 = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("t");
  const handleSubmit = (event) => {
    event.preventDefault();
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password1 == password2) {
      
      const form = event.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
      
      fetch("http://localhost:5000/auth/renewpass", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body : JSON.stringify({ token, password1}),  // met le token dans le body  (selection)
        
       
      });
      
           if(jsonData){
               
           
            
            // navigate('/Account');
         }
    }
  };
    return (
      <div className="d-flex justify-content-center h-100">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="login-form bg-light mt-4 p-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <h4>Changer votre mot de passe</h4>

                <div className="col-12">
                  <label>Nouveau mot de passe</label>
                  <input
                    type="password"
                    id="password1"
                    className="form-control"
                    placeholder="Votre mot de passe"
                  />
                </div>

                <div className="col-12">
                  <label>retaper votre mot de passe</label>
                  <input
                    type="password"
                    id="password2"
                    className="form-control"
                    placeholder="Votre mot de passe"
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
export default RenewPassword2;
