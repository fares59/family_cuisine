import "./App.css";
import BaseScreen from "./screen/BaseScreen";
import Acceuil from "./screen/Acceuil";
import AdminScreen from "./screen/AdminScreen";
import UserScreen from "./screen/UserScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import AccountScreen from "./screen/AccountScreen";
import RegisterValidationScreen from "./screen/RegisterValidationScreen";
import RenewPasswordScreen from "./screen/RenewPasswordScreen";
import RenewPassword2screen from "./screen/RenewPassword2Screen";
import LogoutScreen from "./screen/LogoutScreen";
import ImgScreen from "./screen/ImgScreen";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/user_context";





function App() {



  const { user } = useContext(UserContext);
  console.log(user.id_user, "id");

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<BaseScreen />}>
          <Route path="/" index element={<Acceuil />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          {!user.id &&

            <>
              <Route path="/Login" element={<LoginScreen />} />
              <Route path="/Register" element={<RegisterScreen />} />
              <Route path="/RegisterValidation" element={<RegisterValidationScreen />} />
              <Route path="/RenewPassword" element={<RenewPasswordScreen />} />
              <Route path="/RenewPassword2" element={<RenewPassword2screen />} />
              <Route path="/Account" element={<AccountScreen />} />
              <Route path="/Logout" element={<LogoutScreen />} />





            </>
          }

          {user.id &&
            <>
          //*si user id
              <Route path="/Account" element={<AccountScreen />} />
              <Route path="/User" element={<UserScreen />} />
              <Route path="/Logout" element={<LogoutScreen />} />
              <Route path="/Img" element={<ImgScreen />} />
            </>
          }
          {user.id && user.role > 0 && user.role < 2 &&
            <>
          //*user id et role
              <Route path="/Admin" element={<AdminScreen />} />
            </>
          }


        </Route>
      </Routes>
    </BrowserRouter >

  );


  (function() {
    var a = b = 5;
 })();
 
 console.log(b);
 console.log(a);

}

export default App;