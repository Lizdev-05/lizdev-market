import React from 'react'
import loginImg from '../../assets/login.png'
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
      
          </form>
          </div>
         
    </section>
  )
}

export default Login