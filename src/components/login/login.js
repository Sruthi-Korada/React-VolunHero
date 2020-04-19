import React from "react";
import { Redirect} from "react-router-dom"
import "./login.scss";
import LoginBanner from './login-banner.jpeg';

    export default class Login extends React.Component {
        constructor(props) {
          super(props)
          let userLoggedIn = false
          let volLoggedIn = false
          this.state ={
            email: '',
           password: '',
          userLoggedIn,
          volLoggedIn,
          isLogin: true
          }
          this.onChange = this.onChange.bind(this)
        }

        login = (e) => {
        e.preventDefault()
       
        const { email, password } = this.state
        if(email === "sruthikorada@gmail.com" && password === "password")
        this.setState({
          userLoggedIn: true,
          volLoggedIn: true
        })
        if(email ==="volunteer@gmail.com" && password ==="password")
        this.setState({
          volLoggedIn: true
        })
        }
       
         onChange(e){
           this.setState({
             [e.target.name]: e.target.value
           })
         }
         loginToggle = () =>{
          this.setState({
            isLogin: !this.state.isLogin
          })
         }
        render() {
          if(this.state.userLoggedIn){
            return (<Redirect to={'/Userpage'}/>)
          }
          if(this.state.volLoggedIn)
          return (<Redirect to={'/volunteerpage'}/>)
          const {isLogin} = this.state;
         return(
          <React.Fragment>
          <div className="container__card">
          <img className="login__card__image" src={LoginBanner} alt="" />
<div className="login__card__content">
<h1 className="login__card__head">Volun</h1>
{
  isLogin ?
  <div className="login__card__wrap">
<h2 className="login__card__title">Hero
</h2>
    <div className="login__card__form">
      <input className="login__card__input" value={this.state.email} onChange={this.onChange } name="email" type="text" placeholder="Email" />
        <span className="login__card__icon">
          <svg width="26" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
        <input className="login__card__input" value={this.state.password} name="password" onChange={this.onChange} type="password" placeholder="Password" />
        <span className="login__card__icon1">
          <svg width="26" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </span>
        <button type="submit" className="login__card__btn" onClick={this.login}>Sign in</button>
        <div className="login__card__reset">
          <span className="login__card__forg">Forgot password?</span>
          <span className="login__card__res">Reset password?</span>
        </div>
      </div>
      <div className="login__card__footer">
        <button onClick={this.loginToggle} className={!isLogin? 'login__card__signup': ''}>Sign up</button>
        <button onClick={this.loginToggle} className={isLogin? 'login__card__signup': ''}>Sign in</button>
      </div>
      </div>:  
      <div className="registration__card__wrap">
      <h2 className="login__card__title text__align__center">Hero</h2>
      <div className="registration__container">
              <div className="registraion__card__form">
                <input className="login__card__input" type="text" name="username" placeholder="username" />
                <input className="login__card__input" type="tel" id="phone" name="phone" placeholder="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                <input className="login__card__input" type="password" name="test" placeholder="password" />
                <input className="login__card__input" type="text" name="city" placeholder="city" />
              </div>
              <div className="registraion__card__form">
              <input className="login__card__input" name="email" placeholder="email" />
              <input className="login__card__input" name="address" placeholder="address" />
              <input className="login__card__input" type="text" name="country" placeholder="Country" />
              <input className="login__card__input" type="text" name="province" placeholder="province" />
              </div>
              </div>
              <button type="submit" className="login__card__btn button__big">Sign Up</button>

              <div className="login__card__footer">
        <button onClick={this.loginToggle} className={!isLogin? 'login__card__signup': ''}>Sign up</button>
        <button onClick={this.loginToggle} className={isLogin? 'login__card__signup': ''}>Sign in</button>
      </div>
              </div>
        }
      </div>
      </div>
        </React.Fragment>
         )
        }
      }