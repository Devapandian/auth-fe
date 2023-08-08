import React from "react";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Products from "./components/Products";
import { AuthContextProvider } from "./context/AuthContext";
import Pricing from "./components/pricing";
import Blog from "./components/Blog";

function App() {
  return (
  <div>

  <BrowserRouter>
  <AuthContextProvider>
    <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='*' element={<Navigate to = '/signIn'/>}/>
      <Route path="/Products" element={<Products />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Blog" element={<Blog />} />

    </Routes>
    </AuthContextProvider>
  </BrowserRouter>
</div>
  );
}

export default App;
