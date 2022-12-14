import React,{useState} from "react";
import styles from "./authStyle.module.scss";
import loginImg from "../../assets/login.png";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { FaGoogle } from "react-icons/fa";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) =>{
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Đăng nhập thành công");
        navigate("/");
    
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  }

  return (
    <>
    <ToastContainer />
    {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Đăng nhập</h2>
            <form onSubmit={loginUser}>
              <input type="text" placeholder="Nhập Email" required value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder="Nhập mật khẩu" required  value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit" className="--btn --btn-primary --btn-block">
                Đăng nhập
              </button>
              <div className={styles.links}>
                <Link to="/reset">Quên mật khẩu</Link>
              </div>
              <p>-------</p>
            </form>
            <button className="--btn --btn-danger --btn-block">
              <FaGoogle color="#fff" /> Đăng nhập với Google
            </button>
            <span className={styles.register}>
              <p>Bạn chưa có tài khoản?</p>
              <Link to="/register" style={{color:'var(--color-danger)'}}>Đăng kí</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
