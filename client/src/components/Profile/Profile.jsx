import useAuth from "../../hooks/useAuth"
import "./index.scss"
import { pen , door,  user,  lock ,trash} from '../../assets/icons'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProfileDectail from "./ProfileDectail"
import Cabecera from "../Cabecera"

const Profile = () =>{
  const [changePicture , setChangePicture] = useState(false)
  const [section , setSection] = useState('')
  const { auth ,logOut}= useAuth()
  const navigate = useNavigate()
  const showSection = (area)=>{
    setSection(area)
  }
  const callLogOut = ()=>{
    console.log('esto cerrara la seccion');
    
      logOut();
      navigate('/');
  }

  return (
    <div className="flex flex-col h-[95%]">
       <Cabecera area={'Setting'} subArea={"Profile"}/>
   
    <section className="profileContainer flex-1">
      <div  className="profileCard h-full justify-between">
        <div className="flex flex-col">
          <div className="profileImgContainer ">
            <img className="profileImg" src={auth.image} alt="" />
            
            <div onClick={()=>setChangePicture(!changePicture)} className="profileImgEdit" >
              <img src={pen} alt="" />
            </div>
          </div>
          <div className='profile-info'>
            <p className='profile-title '>{auth.customname}</p>
            <p className='profile-subtitle '>{auth.role}</p>
          </div>
          <main className='profile-rank'>
            <div className='profile-info'>
            <p className='profile-title '>BS.1,600</p>
            <p className='profile-subtitle '>Ventas del Mes</p>
            </div>
            <div className='profile-info'>
            <p className='profile-title '>18</p>
            <p className='profile-subtitle '>Edad</p>
            </div>
            
          </main>
          <div>
            <div className='profile-settings ' onClick={()=>showSection('Personal')}>
              <img className="profileImg sm" src={user} alt="ssf" />
            <p className={section =='Personal'?"profile-title":"profile-title-lg"} >Información Personal</p>
            {section =='Personal' && <div className='profile-bar ' ></div>}
            </div>
            <div className='profile-settings ' onClick={()=>showSection('Login')} >
              <img className="profileImg sm" src={lock} alt="ssf" />
            <p className={section =='Login'?"profile-title":"profile-title-lg"} >Sesión & Contraseña</p>
          {  section =='Login' &&   <div className='profile-bar ' ></div>}
            </div>
            <div className='profile-settings ' onClick={()=>callLogOut()}>
              <img className="profileImg sm" src={door} alt="ssf" />
            <p className={`profile-title-lg `} >Cerrar Sesión</p>
            {/* <div className='profile-bar ' ></div> */}
            </div>

          </div>
        </div>
        <div className='profile-settings botton mt-0'>
            <img className="profileImg sm" src={trash} alt="ssf" />
          <p className={`profile-title-lg red`} >Borrar Cuenta</p>
          
          </div>
      </div>

      <div>
        {section =='Login' && <ProfileDectail changePicture={changePicture}  setChangePicture={setChangePicture}/>}
      </div>
    </section>
    </div>
)}

export default Profile