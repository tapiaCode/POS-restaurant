import { useState } from 'react';
import './style.css'
import useAuth from '../../hooks/useAuth';
import { USER_DATA, createNewUser } from '../../const/userConst';
import { useNavigate } from "react-router-dom"

function Sign() {
  const { loging, auth, hasAccount, setHasAccount } = useAuth();
  const [infoAuth, setInfoAuth] = useState({});
  const navigate = useNavigate()
  function validarCorreoElectronico(correo) {
    // Expresión regular para validar una dirección de correo electrónico
    const expresionRegular = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;


    if (expresionRegular.test(correo.toLowerCase())) {
      if (correo.toLowerCase().endsWith('.com')) {
        return true;
      }
    }

    return false;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfoAuth((prevProps) => ({
      ...prevProps,
      [name]: value
    }));

  };
  const verificateUser = (logigUser) => {
    if (logigUser.password === logigUser.passwordConfirm) {
      USER_DATA.map(user => {
        if (logigUser.username.toLowerCase() != user.username.toLowerCase()) {

          if (validarCorreoElectronico(logigUser.email)) {
            createNewUser(logigUser);
            loging(logigUser);
            navigate('/dashboard');
          } else {
            console.log('el correo no es valido');

          }
        } else {
          console.log('ese nombre ya esta siendo utilizado');
        }
      })


    } else {
      console.log('las claves no coiciden');

    }

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    verificateUser(infoAuth)
    //setHasAccount(true)
  };



  return (
    <div>

      <form className='inputForm-container' onSubmit={handleSubmit}>
        <div>
          <input
            className='inputForm'
            type="text"
            name="username"
            placeholder='Usuario'
            // required
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className='inputForm'
            type="text"
            name="email"
            placeholder=' E-mail'
            // required
            onChange={handleInputChange}
          />
        </div>
        <div>

          <input
            className='inputForm'
            type="password"
            name="password"
            placeholder='Contraseña'
            // required
            onChange={handleInputChange}
          />
        </div>
        <div>

          <input
            className='inputForm'
            type="password"
            name="passwordConfirm"
            placeholder='Confirmar Contraseña'
            // required
            onChange={handleInputChange}
          />
        </div>
        <button className='inputButton'> <p className='mainHome-title'>Guardar Cambios</p></button>
        <div onClick={() => setHasAccount(true)} className='inputButton '> <p className='mainHome-title'>Atrás</p></div>

      </form>
    </div>
  );
}


export default Sign;
