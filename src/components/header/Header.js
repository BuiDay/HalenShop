import React, { useState, useEffect } from "react";
import styles from "./HeaderStyle.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const logo = (
    <div className={styles.logo}>
        <Link to="/">
            <h2>
                Halen<span>Shop</span>.
            </h2>
        </Link>
    </div>
);

const cart = (
    <span className={styles.cart}>
        <Link to='/cart'><FaShoppingCart size={20} /><p>0</p></Link>
    </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Header = () => {

    const [showMenu, setShowMenu] = useState(true);
    const [displayName, setdisplayName] = useState("");
    const navigate = useNavigate();

    const logoutUser = () => {
        signOut(auth)
          .then(() => {
            toast.success("Logout successfully.");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      };


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const hideMenu = () => {
        setShowMenu(false);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log(user);
            if (user.displayName == null) {
              const u1 = user.email.slice(0, -10);
              const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
              setdisplayName(uName);
            } else {
              setdisplayName(user.displayName);
            }
    
            // dispatch(
            //   SET_ACTIVE_USER({
            //     email: user.email,
            //     userName: user.displayName ? user.displayName : displayName,
            //     userID: user.uid,
            //   })
            // );
          } else {
            setdisplayName("");
            // dispatch(REMOVE_ACTIVE_USER());
          }
        });
    });
    return (
        <> <ToastContainer />
            <header >
                <div className={styles.header}>
                    {logo}

                    <nav
                        className={
                            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
                        }
                    >
                        <div
                            className={
                                showMenu
                                    ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                                    : `${styles["nav-wrapper"]}`
                            }
                            onClick={hideMenu}
                        ></div>

                        <ul onClick={hideMenu}>
                            <li className={styles["logo-mobile"]}>
                                {logo}
                                <FaTimes size={22} color="#fff" onClick={hideMenu} />
                            </li>
                            {/* <li>

                                <Link to="/admin/home">
                                    <button className="--btn --btn-primary">Admin</button>
                                </Link>

                            </li> */}
                            <li>
                                <NavLink to="/" className={activeLink}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={activeLink}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <div className={styles["header-right"]} onClick={hideMenu}>
                            <span className={styles.links}>

                                <NavLink to="/login" className={activeLink}>
                                    Login
                                </NavLink>


                                <a href="#home" style={{ color: "#ff7722" }}>
                                    <FaUserCircle size={16} />
                                    Hi,{displayName}
                                </a>


                                <NavLink to="/order-history" className={activeLink}>
                                    My Orders
                                </NavLink>


                                <NavLink to="/" className={activeLink} onClick={logoutUser}>
                                    Logout
                                </NavLink>

                            </span>
                            {cart}
                        </div>
                    </nav>

                    <div className={styles["menu-icon"]}>
                        {cart}
                        <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;