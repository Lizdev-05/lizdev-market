import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import styles from "./Header.module.scss";

export const cart = (
    <span className={styles.cart}>
    <Link to='/carts'>
      Carts 
    <FaShoppingCart size={20}/>
     <p>0</p>
     </Link>
    </span>
)