import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkAuth } from "./validations/authSlice";
import AdminPage from "./adminpage/AdminPage";
import AddProduct from "./adminpage/AddProduct";
import DeleteProduct from "./adminpage/DeleteProduct";
import Allmember from "./adminpage/Allmember";
import UpdataProduct from "./adminpage/UpdataProduct";
import UpdatePage from "./adminpage/UpdatePage";
import ProductDetails from "./pages/ProductDetails ";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./components/ContactPage";


function App() {

  const { isAuthenticated, user, loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
      {/* <span className="loading loading-dots loading-lg"></span> */}
    </div>
  }
  return (
    <>

      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/sign-up"></Navigate>} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/sign-up" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
        <Route path="/admin-panal" element={<AdminPage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdataProduct />} />
        <Route path="/delete-product" element={<DeleteProduct />} />
        <Route path="/view-member" element={<Allmember />} />
        <Route path="/update-page" element={<UpdatePage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;