import React, { useEffect } from "react";
import InfoBox from "../../infoBox/InfoBox";
import styles from "./HomeStyle.module.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  STORE_PRODUCTS,
} from "../../../redux/slice/productSlice";

import useFetchCollection from "../../../hooks/useFetchCollection";


const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
const productIcon = <BsCart4 size={30} color="#1f93ff" />;
const ordersIcon = <FaCartArrowDown size={30} color="orangered" />;

const Home = () => {
  const products = useSelector(selectProducts);

  const fbProducts = useFetchCollection("products");


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: fbProducts.data,
      })
    );


  }, [dispatch,fbProducts]);

  return (
    <div className={styles.home}>
      <h2>Trang chủ Admin</h2>
      <div className={styles["info-box"]}>
        <InfoBox
          cardClass={`${styles.card} ${styles.card1}`}
          title={"Tổng doanh thu"}
          count={0}
          icon={earningIcon}
        />
        <InfoBox
          cardClass={`${styles.card} ${styles.card2}`}
          title={"Số sản phẩm"}
          count={products.length}
          icon={productIcon}
        />
        <InfoBox
          cardClass={`${styles.card} ${styles.card3}`}
          title={"Số đơn hàng"}
          count={0}
          icon={ordersIcon}
        />
      </div>
      <div style={{fontSize:"20px", marginTop:"100px"}}>
        Biểu Đồ Doanh Thu (Updating....)
      </div>
    </div>
  );
};

export default Home;
