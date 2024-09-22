import React, { useState, useContext, useRef, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import authService from "../../services/auth";
import axios from "axios";
import "./login.scss";
import axiosInstance from "../../services/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState<String | " ">();
  const [success, setSuccess] = useState(false);
  const focusUser = () => {
    userRef.current!.focus();
  };
  useEffect(() => {
    focusUser();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await authService.login(user, pwd);
      localStorage.setItem("token", res.data?.data?.accessToken);
      navigate("/");
      setSuccess(true);
    } catch (err) {
      toast.error("Login faild");
      console.log(err);
    }
  };
  return (
    <section className='login container'>
      <h1>Account Login</h1>
      <div className='loginCard'>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <Person2OutlinedIcon />
            <input
              type='email'
              id='Email'
              name='Email'
              ref={userRef}
              autoComplete='off'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUser(e.target.value)
              }
              value={user}
              required
              placeholder='Email'
            />
          </div>
          <div className='input'>
            <LockOutlinedIcon />
            <input
              type='password'
              id='password'
              name='password'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPwd(e.target.value)
              }
              required
              placeholder='Password'
            />
          </div>
          <div className='button'>
            <button type='submit'>login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
