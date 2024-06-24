
import { useEffect, useState } from 'react'
import './index.css'
import Loging from '../Forms/Login'
import Sign from '../Forms/Sign'
import { GoogleLogo, FacebookLogo, shoppingIcon } from "../../assets/icons"
import useAuth from '../../hooks/useAuth'
const Home = () => {
  let [showImage, setShowImage] = useState(0)

  const { auth, hasAccount, setHasAccount } = useAuth()
  const imagesLink = [
    'https://mecaluxes.cdnwm.com/blog/img/inventario-fantasma-stock.1.0.jpg?imwidth=2048',
    'https://www.campustraining.es/wp-content/uploads/2022/08/CAMPUSBLOG-ventas-0822-715x495.jpg.webp',
    'https://www.sydle.com/blog/assets/post/que-es-gestion-de-ventas-612fc9d18d4ef23c9511be77/what-is-sales-management.jpg?w=960',
    'https://www.espacios.media/wp-content/uploads/2022/01/que-es-una-estrategia-de-ventas.jpg'
  ]


  useEffect(() => {

    setInterval(() => {
      if (showImage < imagesLink.length - 1) {
        setShowImage(showImage += 1)
        return
      } else {
        setShowImage(showImage = 0)
      }
    }, 4000)


  }, [])

  return (
    <section className='mainHome'>
      <article className='mainHome-asideLeft'>
        <header className='mainHome-baner'>
          <img className="mainHome-logo" src={shoppingIcon} alt="l" />
          <p className='mainHome-title'>
            Smart<span className="mainHome-title mainHome-title--red">POS</span>
          </p>
        </header>
        <aside className='mainHome-leftCoontent'>
          <img className='mainHome-images' src={imagesLink[showImage]} alt="" />
          <p className='mainHome-title'>Manage sales, inventary <br /> and other transactions</p>
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

            {hasAccount && <div onClick={() => setHasAccount(false)} className='inputButton inputButton-sign'> <p className='mainHome-title'>Sign in</p></div>}

          </section>
          <section className='mainHome-footerRigth'>
            <div className='otherLinksContainer'>
              <div className='otherLinksContainer otherLinks'>
                <img src={GoogleLogo} alt="" />

                <p className='mainHome-title mainHome-title--SM'>loging with Google</p>
              </div>
              <div className='otherLinksContainer otherLinks'>
                <img src={FacebookLogo} alt="" />
                <p className='mainHome-title mainHome-title--SM'>loging with facebook </p>
              </div>
            </div>
            <p className='footerRigth-title footerRigth-title--blue'>Forgeret password</p>
            <p className='footerRigth-title '>© 2020 SmartPOS App</p>
          </section>

        </div>

      </article>

    </section>
  )
}

export default Home