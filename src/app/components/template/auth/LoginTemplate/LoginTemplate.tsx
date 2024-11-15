import { IoCarOutline } from 'react-icons/io5'
import './LoginTemplate.scss'
import LoginForm from '@/app/components/organisms/Forms/LoginForm'
import { Icon } from '@iconify/react/dist/iconify.js'

const LoginTemplate = () => {
  return (
    <div className='login_template'>
      <div className='login_form-container'>
        <div className='login-header'>
            <Icon icon="fluent:vehicle-car-32-regular" className='car-logo' />
            <h1 className='login-h1'>Tranport Solutions S.A</h1>
        </div>
        <p>Inicia sesion en tu cuenta y gestiona tu flota de vehiculos</p>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginTemplate