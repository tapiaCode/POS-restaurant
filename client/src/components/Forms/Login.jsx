import { useState } from 'react';

import './style.css'
import useAuth from '../../hooks/useAuth';
import { USER_DATA } from '../../const/userConst';
import { useNavigate } from "react-router-dom"

function Loging() {
  const navigate = useNavigate()
  const [infoAuth, setInfoAuth] = useState({});
  const { loging } = useAuth()

  const verificateUser = (loginUser) => {
    const user = USER_DATA.find((user) => user.username.toLowerCase() === loginUser.username.toLowerCase());

    if (!user) {
      console.log('Nombre de usuario no encontrado');
      return;
    }

    if (user.password === loginUser.password) {
      loging(user);
      navigate('/dashboard');
    } else {
      console.log('Contraseña incorrecta');
    }

  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfoAuth((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    verificateUser(infoAuth)
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
            onChange={handleInputChange}
            required
          />
        </div>
        <div>

          <input
            className='inputForm'
            type="password"
            name="password"
            placeholder='Contraseña'
            onChange={handleInputChange}
            required
          />
        </div>
        <button

          className='inputButton'

        >
          <p className='mainHome-title'>Ingresar</p></button>
      </form>
    </div>
  );
}


export default Loging;
