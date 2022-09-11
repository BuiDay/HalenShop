import React from "react";
import styles from "./FooterStyle.module.scss";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`container ${styles.footerContainer}`}>
        <ul>
          <li>Trung Tâm Trợ Giúp</li>
          <li>Hướng Dẫn Mua Hàng</li>
          <li>Hướng Dẫn Bán Hàng</li>
          <li>Vận Chuyển</li>
        </ul>

        <ul>
          <li>Điều Khoản</li>
          <li>Chính Sách Bảo Mật</li>
          <li>Hướng Dẫn Bán Hàng</li>
          <li>Tuyển Dụng</li>
        </ul>

        <ul>
          <li>
            <FaFacebook /> <span>Facebook</span>{" "}
          </li>
          <li>
            <FaInstagram />
            <span>Instagram</span>
          </li>
          <li>
            <FaLinkedin />
            <span>Linkedin</span>
          </li>
        </ul>
      </div>

      <div className={styles.title}>&copy; {year} All Rights Reserved</div>
    </div>
  );
};

export default Footer;
