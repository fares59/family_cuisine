import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseScreen from "./screen/BaseScreen";
import Acceuil from "./screen/Acceuil";
import AdminScreen from "./screen/AdminScreen";
import UserScreen from "./screen/UserScreen";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import AccountScreen from "./screen/AccountScreen";
import RegisterValidationScreen from "./screen/RegisterValidationScreen";
import RenewPasswordScreen from "./screen/RenewPasswordScreen";
import { useContext } from "react";
import { UserContext } from "./context/user_context";
import LogoutScreen from "./screen/LogoutScreen";


function App() {

 

  const {user} = useContext(UserContext);
  console.log(user.id);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<BaseScreen />}>
          <Route index element={<Acceuil />} />
          {!user.id && 

          <>
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/Register" element={<RegisterScreen />} />
            <Route path="/RegisterValidation" element={<RegisterValidationScreen />} />

           
          </>
          }
          
          {user.id &&
          <>
          //*si user id
            <Route path="/RenewPassword" element={<RenewPasswordScreen />} />
            <Route path="/Account" element={<AccountScreen />} />
            <Route path="/User" element={<UserScreen />} />
            <Route path="/Logout" element={<LogoutScreen />} />
          </>
          }
          {user.id && user.role >0 && user.role < 2 &&
          <>
          //*user id et role
          <Route path="/Admin" element={<AdminScreen />} />
          </>
          }


      </Route>
    </Routes>
    </BrowserRouter >
    
  );
  
}

export default App;