import { useState } from "react"
import "./index.scss"
import TogleeButton from "./TogleeButton";
import SavedButton from "./SavedButton";

const LenguajeSettings = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side ">
     <p className="right-side-title">Lenguaje</p>
     <div>
      <p>Lenguaje</p>
      <select name="" id="">
        <option value="1"> 🇪🇸   Spanish</option>
        <option value="1"> 🇺🇸   English</option>
      </select>
     </div>
     <div>
      <p>Teclado</p>
      <select name="" id="">
        <option value="1"> 🇪🇸   Spanish</option>
        <option value="1"> 🇺🇸   English</option>
      </select>
     </div>
     <p className="toglee-title">Detectado segun Preferencias</p>
        <div className="appearnce-container">
          <p>teclado estandar</p>
        <TogleeButton active={true}/> 
        </div>
        <SavedButton setCurrentSettings={setCurrentSettings}/>
   
    </section>
)}

export default LenguajeSettings;