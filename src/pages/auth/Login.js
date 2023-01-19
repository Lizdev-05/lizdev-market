import React from 'react'
import loginImg from '../../assets/login.png'
import { Link } from 'react-router-dom';
import {FaGoogle} from 'react-icons/fa'
import styles from "./auth.module.scss";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
          <div className={styles.img}>
            <img src={loginImg} alt="Login" width={400}/>
          </div>
          <div className={styles.form}>
            <h2>Login</h2>
          <form action="" >
             <input type="email"  placeholder='Email'/>
             <input type="password" placeholder='Password' />
             <button className='--btn --btn-primary --btn-block'>
              Login
             </button>
             <div className={styles.links}>
           <Link to="/reset" >Forgot Password</Link>
          </div>
          <p>-- or --</p>
          </form>
          <button className='--btn --btn-danger --btn-block'> 
          <FaGoogle color='#fff'/> Login With Google </button>
          <span className={styles.register}><p>Don't have an account? <Link to='/register'>Register</Link></p></span>
          </div> 
         
    </section>
  )
}

export default Login