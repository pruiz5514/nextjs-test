import { IoCarOutline } from 'react-icons/io5'
import './LoginTemplate.scss'

const LoginTemplate = () => {
  return (
    <div className='login_template'>
      <div className='login_form-container'>
        <div className='login-header'>
            <IoCarOutline className='car-logo'/>
            <h1 className='login-h1'>Tranport Solutions S.A</h1>
        </div>
        <p>Inicia sesion en tu cuenta y gestiona tu flota de vehiculos</p>
      </div>
    </div>
  )
}

export default LoginTemplate