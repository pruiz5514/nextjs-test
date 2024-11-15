'use client'
import './AsideLeft.scss';
import { IoClose } from 'react-icons/io5'
import { signOut } from "next-auth/react"
import { MdLogout } from 'react-icons/md';
import { Icon } from '@iconify/react';
import { useSession } from "next-auth/react";

interface IAsideLeftProps{
    functionProps?: ()=> void
}

const AsideLeft: React.FC<IAsideLeftProps> = ({functionProps}) => {
  const { data: session } = useSession();
  return (
    <aside className='aside-left'>
        <button className='close-aside_left' onClick={functionProps}><IoClose /></button>
        <div className='left_aside_titel-container'>
          <Icon className='car_icon-aside' icon="fluent:vehicle-car-parking-16-filled" /> 
          <h1 className='left_aside-h1'>Transport Solutions</h1>
        </div>
        <hr/>

        <div className='aside_left_account-container'>
          <Icon className='profile-icon' icon="ic:baseline-account-circle" />
          <span className='email-account'>{session?.user?.email}</span>
        </div>
      
        <ul className='list-aside_left'>
            <li className='li-aside_left'><a href="/dashboard/services"> <span className='icon_car_aside-container'><Icon icon="fluent:vehicle-car-24-filled" /></span> Vehiculos </a></li>
            <li className='li-aside_left' onClick={()=> signOut()}> <span className='icon_logout_aside-container'><Icon icon="uil:signout" /></span> Cerrar sesión</li>
        </ul>
    </aside>
  )
}

export default AsideLeft