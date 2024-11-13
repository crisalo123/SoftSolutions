


import { IoPerson } from 'react-icons/io5'

import LogoSoft  from '@/feature/auth/assets/LogoSoft.png'
import banner  from '@/feature/auth/assets/Banner.png'
import { CustomItem } from './custom-item'
import { CustomRouteObject } from '../../types/routes'
import { Button } from '../button'
import { useAuth } from '@/feature/contex/AuthContext'


export const Navbar: React.FC = () => {

  const { logout, user } = useAuth()

  const storedRoutes = localStorage.getItem('roleRoutes')
  const accessibleRoutes = storedRoutes ? JSON.parse(storedRoutes) : []

 console.log(user)

  return (
    <nav className='h-screen w-60 min-w-60 '>
      <div className='fixed flex h-screen w-60 flex-col items-center justify-between bg-secondary-400'>
        <div>
           <div> 
            <img
              className='h-16 mx-5'
              src={LogoSoft}
              alt='LOGO SoftSolutios'
            />
            <h1 className='text-black mt-10 font-semibold text-xl tracking-wider '>TrueQue.COM</h1>
            </div>
           
           <div className='mt-5'>
              <ul className='text-lg text-white space-y-3'>
                <li className=' border-2 pl-5 pr-5'>Nuevos Modulos</li>
                <li className=' border-2 pl-5 pr-5'>Productos en Stash</li>
                <li className=' border-2 pl-5 pr-5'>Contactanos</li>
                <li className=' border-2 pl-5 pr-5'>Nuevos Productos</li>
              </ul>
           </div>
          <div className='mt-4'>
            <div className='flex flex-1 flex-col gap-1'>
              {accessibleRoutes.map((route: CustomRouteObject) => (
                <>
                  {!route.name && (
                    <CustomItem
                      item={route}
                      key={route.path}
                      variant='primary'
                      IconTypeText={true}
                    />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='md:mt-4 md:self-start'>
            <IoPerson className='text-3xl text-[#A0AEC0]' />

            <h2 className='max-w-48 text-xl font-bold capitalize text-white'>
              {user.firstName}
            </h2>
            <h3 className='pb-2 font-medium capitalize text-white'>
              rolename
            </h3>
            <Button
              className='h-[40px] w-[152px] bg-[#f1eee9] text-lg  text-black font-normal hover:bg-secondary-400'
              onClick={() => {
                logout()
              }}
            >
              Cerrar sesión
            </Button>
            <div className=''>
              <img
                className='relative mb-2 mt-2 h-[50px] w-[151px]  justify-center'
                src={banner}
                alt='LOGO PROMOTEC'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
