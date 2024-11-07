import { useNavigate } from "react-router-dom"
import {
    billIcon,
    dashboardIcon,
    hamburgerIcon,
    settingsIcon,
    notificationIcon,
    shoppingIcon,
    messagesIcon,
    supportIcon
} from "../assets/icons/"
import useAuth from './../hooks/useAuth.jsx'
import pollos from '../assets/img/rio/pollos.png';
import rio from '../assets/img/rio/rio.png';
import arriba from '../assets/img/rio/arriba.png';
import elPollito from '../assets/img/rio/elPollito.png';

const Sidebar = () => {
    const { loging, auth, hasAccount, setHasAccount } = useAuth()
    const navigate = useNavigate()
    const imgEmpy = 'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-286x300.jpg'
    const optionsAside = [
        {
            name: "Panel de Control",
            icon: dashboardIcon,
            link: "/dashboard/stats"
        },
        {
            name: "Platos y Bebidas",
            icon: hamburgerIcon,
            link: "/dashboard/food-drinks"
        },
        {
            name: "Centro de Mensajes",
            icon: messagesIcon,
            link: "/dashboard/messages"
        },
        {
            name: "Ventas",
            icon: billIcon,
            link: "/dashboard/bills"
        },
        {
            name: "Configuraciones",
            icon: settingsIcon,
            link: "/dashboard/settings"
        },
        {
            name: "Notificaciones",
            icon: notificationIcon,
            link: "/dashboard/notifications"
        },
        {
            name: "Soporte",
            icon: supportIcon,
            link: "/dashboard/support"
        }
    ]

    const handleClickNavigate = (link) => {
        navigate(link)
    }
    return (
        <aside className="aside">
            <header className='mainHome-baner'>
                <img className='pet-Img-side' src={elPollito} alt="Pollos" />
                <div>
                    <img className='llopo-Img-side' src={pollos} alt="Pollos" />
                    <div className='llopo-Img-container'>
                        <img className='llopo-Img-side' src={rio} alt="Rio" />
                        <img className='llopo-Img-side' src={arriba} alt="Arriba" />
                    </div>
                </div>
            </header>
            <div className="nav-container">
                <nav className="navbar">
                    {
                        optionsAside.map((option, index) => {
                            return (
                                <a className="navbar-item"
                                    key={index}
                                    onClick={() => handleClickNavigate(option.link)}
                                >
                                    <img src={option.icon} alt="icono" />
                                    <p>{option.name}</p>
                                </a>
                            )
                        })
                    }
                </nav>
                <div className="aside-profile" >
                    <div>
                        <picture className="aside-profile-img">
                            <img src={auth.image ? auth.image : imgEmpy} alt="foto de perfil" />
                        </picture>
                        <div className="aside-profile-details">
                            <p>Id# {auth.id}</p>
                            <h3 className="text-center">{auth.customname}</h3>
                            <p> Rol : {auth.role}</p>
                        </div>

                    </div>
                    <p onClick={() => navigate('/dashboard/profile')} className="btn">Abrir Perfíl</p>
                </div>
            </div>
            <p className="copy">&copy; 2024 RioBurger App</p>
        </aside>
    )
}

export default Sidebar