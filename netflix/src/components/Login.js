import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";
import  { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser,setLoading } from "../redux/userSlice.js";


function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store)=>store.app.isLoading);
 

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };


  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user,{
          headers:{
            'Content-type':'application/json'
          },
            withCredentials:true
      
        });
      
        if(res.data.success){
          toast.success(res.data.message);
        }
         dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }finally{
        dispatch(setLoading(false));
      }
    } else {
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user,{
          headers:{
            'Content-type':'application/json',
            withCredentials:true
          }
        });
        if(res.data.success){
          toast.success(res.data.message);
        }
        setIsLogin(true);
       
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally{
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-[100vh] w-[100vw]"
          src="https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341"
          alt=""
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col w-4/12 p-12 my-52 mx-auto left-0 right-0  items-center justify-center absolute bg-black opacity-80 rounded-3xl"
      >
        <h1 className="text-3xl text-white font-bold mb-5">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 rounded-md bg-gray-800 text-white outline-none"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
            className="outline-none p-3 my-2 rounded-md bg-gray-800 text-white"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="p-3 my-2 rounded-md bg-gray-800 text-white outline-none"
          />
          <button type="submit" className="bg-red-600 mt-5 p-3 rounded-md font-medium text-white">
            {`${isLoading ? "Loading....":(isLogin ? "Login" : "Signup")}`}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?  " : "Already have an account? "}
            <span
              className="cursor-pointer text-blue-700"
              onClick={loginHandler}
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

