import { useState } from "react"
import "./index.scss"
import TogleeButton from "./TogleeButton";
import SavedButton from "./SavedButton";

const CheckOutSettings = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side ">
     <p className="right-side-title">Verificar</p>
      <div>
      <p className="toglee-title">Historial de Pago</p>
      <div className="appearnce-container">
          <p>Algún historial de pagos</p>
        <TogleeButton active={false}/> 
        </div>
        <p className="CheckOut-ca">Limpiar Historial</p>
        <p className="toglee-title">Metodos De Pago</p>
        <div className="appearnce-container">
          <p>Alguna Tarjeta</p>
        <TogleeButton active={true}/> 
        </div>
        <div className="appearnce-container">
          <p>Dinero</p>
        <TogleeButton active={true}/> 
        </div>
      </div>
      <SavedButton setCurrentSettings={setCurrentSettings}/>
    </section>
)}

export default CheckOutSettings;