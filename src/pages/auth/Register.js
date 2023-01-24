import React from 'react'
import regImg from '../../assets/register.png'
import { Link } from 'react-router-dom';
import styles from "./auth.module.scss";
import Card from '../../components/card/Card';

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
         
          <Card>
          <div className={styles.form}>
            <h2>Register</h2>
          <form action="" >
             <input type="email"  placeholder='Email'/>
             <input type="password" placeholder='Password' />
             <input type="password" placeholder='Confirm Password' />
             <button className='--btn --btn-primary --btn-block'>
             Register
             </button>
             <span className={styles.register}><p>Already have an account? <Link to='/login'>Login</Link></p></span>
          </form>
          </div> 
          </Card>
          <div className={styles.img}>
            <img src={regImg} alt="Login" width={400}/>
          </div>
    </section>
  )
}

export default Register