import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login"
import Footer from "./components/Footer";
import AdminSignup from "./screens/AddDoctors";
import Doctors from "./screens/Doctors";
import UserDetails from "./screens/UserDetails";
import Myappoitment from "./screens/Myappoitment";
import { useSelector } from "react-redux";
import HashLoader from "react-spinners/HashLoader";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import DoctorProfile from "./screens/DoctorProfile";
import Error from "./screens/Error";
import Book from "./screens/Book";
import About from "./screens/About"
import Contact from "./screens/Contact"
import ReviewUs from "./screens/ReviewUs";

export default function App() {
  const { loading } = useSelector(state => state.alert)
  return (
    <>
      <Navbar />
      {loading ? <HashLoader color="#36d7b7" size={100} style={{ margin: "0 auto" }} /> :
        <div className="main_page">
          <Routes>
            <Route exact path="/" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route exact path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route exact path="/signup" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route exact path="/admin" element={<AdminSignup />} />
            <Route exact path="/doctors" element={<Doctors />} />
            <Route exact path="/doctor" element={<DoctorProfile />} />
            <Route exact path="/aboutuser" element={<UserDetails />} />
            <Route exact path="/book" element={<Book />} />
            <Route exact path="/myappoitment" element={<Myappoitment />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contactus" element={<Contact />} />
            <Route exact path="/review" element={<ReviewUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      }
    </>
  );
}

