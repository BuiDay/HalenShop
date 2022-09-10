import styles from "./Loader.module.scss";
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    
    <div className={styles.wrapper}>
      <div class={styles.hourglass}></div>
    </div>,

    document.getElementById("loader")
  );
};

export default Loader;
