import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./authStyle.module.scss";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import registerImg from "../../assets/register.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = (e) =>{
      e.preventDefault();
      if(password !== cPassword){
        toast.error("Passwords không trùng khớp !!!!");
      }
      setIsLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Đăng kí thành công !!!!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  }

  return (
    <>
    <ToastContainer />
    {isLoading ? <Loader /> : 
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Đăng kí</h2>
            <form onSubmit={registerUser}>
              <input type="text" placeholder="Nhập Email" required  value={email}
                onChange={(e) => setEmail(e.target.value) } />
              <input type="password" placeholder="Nhập mật khẩu" required value={password}
              onChange={(e) => setPassword(e.target.value) }/>
              <input type="password" placeholder="Xác nhận lại mật khẩu" required value={cPassword}
                onChange={(e) => setCPassword(e.target.value)} />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Đăng kí
              </button>
            </form>

            <span className={styles.register}>
              <p>Bạn đã có tài khoản?</p>
              <Link to="/login" style={{color:'var(--color-danger)'}}> Đăng nhập</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="Register" width="400" />
        </div>
      </section>
    }
    </>
  );
};

export default Register;
