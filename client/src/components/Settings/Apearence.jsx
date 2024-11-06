import { useState } from "react"
import "./index.scss"
import SavedButton from "./SavedButton";
import TogleeButton from "./TogleeButton";

const ApearenceSettings = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side ">
     <p className="right-side-title">Apariencia</p>
      <div>
        <div>
        <p className="toglee-title">Temas</p>
        <div className="appearnce-container">
          <p>Claro</p>
        <TogleeButton active={false}/> 
        </div>
        <div className="appearnce-container">
          <p>Oscuro</p>
        <TogleeButton active={false}/> 
        </div>
        </div>
        <div>
        <p className="toglee-title">Size</p>
        <div className="appearnce-container">
          <p>FullScreen</p>
          <div>
            <select name="" id="">
              <option value="yes">si</option>
              <option value="no">no</option>
            </select>
          </div>
        </div>
        <div className="appearnce-container">
          <p>Pantalla</p>
          <div>
            <select name="" id="">
              <option value="yes">1080x720</option>
              <option value="no">1920x1080</option>
            </select>
          </div>
        </div>
        </div>
      </div>
      <SavedButton setCurrentSettings={setCurrentSettings}/>
    </section>
)}

export default ApearenceSettings;