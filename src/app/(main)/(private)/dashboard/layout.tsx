import './privateLayout.scss'
import AuthGuard from './guard/AuthGuard'
import AsideContainer from '@/app/components/organisms/AsideContainer/AsideContainer'

export default function PrivateLayout(
    { children }: { children: React.ReactNode}
) {
  return (
      <div className='private-layout'>
        <div className='aside_container-layout'>
          <AsideContainer/>
        </div>
        <div className='private-container'>
            {children}
        </div>
      </div>
  )
}