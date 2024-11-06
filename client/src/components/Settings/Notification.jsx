import { useState } from "react"
import "./index.scss"
import TogleeButton from "./TogleeButton";
import SavedButton from "./SavedButton";

const NotificationSetting = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side">
    <p className="right-side-title">Notificacion</p>
    <p>Seleccione la notificación que desea recibir.</p>
    <div className="toglee-containers">
      <p>Notificacion</p>
      <p>Push</p>
      <p>Email</p>
    </div>
    <div className="toglee-main">
    <div className="toglee-containers">
      <p className="toglee-title">Nuevos Mensajes</p>
      <TogleeButton active={true}/> 
      <TogleeButton active={true}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">Informe Semanal</p>
      <TogleeButton active={false}/> 
      <TogleeButton active={true}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">Pago exitoso</p>
      <TogleeButton active={true}/> 
      <TogleeButton active={true}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">alerta de facturación</p>
      <TogleeButton active={true}/> 
      <TogleeButton active={false}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">Nuevo invento</p>
      <TogleeButton active={false}/> 
      <TogleeButton active={false}/> 
    </div>
    </div>
    <SavedButton setCurrentSettings={setCurrentSettings}/>
    </section>
)}

export default NotificationSetting;