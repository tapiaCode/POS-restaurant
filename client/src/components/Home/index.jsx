
import React from 'react'
import './index.css'
import Loging from '../Forms/Login'
import Sign from '../Forms/Sign'
import Carousel from './Carousel'
import { GoogleLogo, FacebookLogo, shoppingIcon } from "../../assets/icons"
import useAuth from '../../hooks/useAuth'

const Home = () => {

  const { auth, hasAccount, setHasAccount } = useAuth()

  return (
    <section className='mainHome'>
      <article className='mainHome-asideLeft'>
        <header className='mainHome-baner'>
          <img className="mainHome-logo" src={shoppingIcon} alt="" />
          <p className='mainHome-title'>
            Smart<span className="mainHome-title mainHome-title--red">POS</span>
          </p>
        </header>
        <aside className='mainHome-leftCoontent'>
          <Carousel />
          <p className='mainHome-title'>Administra tus ventas, inventarios y otras transacciones</p>
          <div className='dootImage-container'>
            <div className={`dootImage-active`}></div>
            <div className={`dootImage  `}></div>
            <div className={`dootImage  `}></div>
            <div className={`dootImage  `}></div>
          </div>
        </aside>
      </article>


      <article className='mainHome-asideRigth'>
        <div className='mainHome-containerRigth'>
          <p className='mainHome-title mainHome-title--XL' >Bienvenido de Nuevo!</p>
          <p className='mainHome-subtitle md' > testing [ user: admin ,juan ,ana. pass: 123456 ]</p>
          {auth && <p>estas dentro</p>}
          <section className='containerRigth-formArea' >

            {hasAccount ? <Loging /> : <Sign />}

            {hasAccount && <div onClick={() => setHasAccount(false)} className='inputButton inputButton-sign'> <p className='mainHome-title'>Registrarse</p></div>}

          </section>
          <section className='mainHome-footerRigth'>
            <div className='otherLinksContainer'>
              <div className='otherLinksContainer otherLinks'>
                <img src={GoogleLogo} alt="" />

                <p className='mainHome-title mainHome-title--SM'>Iniciar Sesión con Google</p>
              </div>
              <div className='otherLinksContainer otherLinks'>
                <img src={FacebookLogo} alt="" />
                <p className='mainHome-title mainHome-title--SM'>iniciar sesión con Facebook</p>
              </div>
            </div>
            <p className='footerRigth-title '>© 2024 SmartPOS App</p>
          </section>
        </div>
      </article>
    </section>
  )
}

export default Home