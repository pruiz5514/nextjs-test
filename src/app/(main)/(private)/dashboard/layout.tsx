// import './privateLayout.scss'
import AuthGuard from './guard/AuthGuard'

export default function PrivateLayout(
    { children }: { children: React.ReactNode}
) {
  return (
    <AuthGuard>
      <div className='private-layout'>
        <div className='aside_container-layout'>
          {/* <AsideContainer/> */}
        </div>
        <div className='private-container'>
            
            {children}
        </div>
      </div>
    </AuthGuard>
  )
}