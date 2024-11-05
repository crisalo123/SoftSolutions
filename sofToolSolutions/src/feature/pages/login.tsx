

import { Wrapper } from '../core/ui/wrapper';
import { LoginForm } from '../auth/login';


import  logo  from '@/feature/auth/assets/logo.png'
import  ecommers  from '@/feature/auth/assets/ecomers.jpg'
import  banner  from '@/feature/auth/assets/Banner.png'


export function Login() {
  return (
    <div className=' h-screen bg-primary-50 '>
      <Wrapper className='md:flex h-full items-center justify-center pt-14 md:pt-0 pr-2 md:pr-0 pl-2 md:pl-0'>
        <div className='flex md:h-[550px] h-[520px]  md:max-w-[1180px] items-center justify-center rounded-[32px] border-2 bg-quaternary p-2 2xl:h-[800px]'>
          <div className='flex h-full md:max-w-[642px]  flex-col items-center justify-center gap-7 rounded-[32px] md:px-7 2xl:px-32'>
            <h1 className='md:w-[394px] text-center text-4xl font-black text-secondary-200 2xl:text-5xl'>
              Inicio de sesión
            </h1>
            <h3 className='md:w-[394px] text-center font-normal text-quaternary-600 2xl:text-xl'>
              Bienvenido, digita tus credenciales <br />
              para acceder a la plataforma.
            </h3>
            <LoginForm className='mx-auto w-72 justify-center 2xl:w-[394px] ' />
            <img
              src={banner}
              alt='Logo de promotec'
              className='-mt-2 h-10 2xl:mt-12 2xl:h-16'
            />
          </div>
          <div className='hidden relative 2xl:w-[450px] md:w-[350px] md:flex h-full flex-col items-center justify-center gap-16 rounded-[32px] bg-secondary-200 p-10'>
            <img
              src={logo}
              alt='Logo de genesis'
              className='absolute right-0 2xl:top-0 mr-10  2xl:mt-10 h-10 top-6 '
            />
             <span className='absolute 2xl:top-14 top-8 font-bold text-white tracking-wider text-2xl'>TrueQue.COM</span>
            <img
              src={ecommers}
              alt='ilustracion de login'
              className='!mt-16 h-80 2xl:h-auto 2xl:min-w-96 absolute '
            />
            <div className='-mt-10 flex flex-col 2xl:-mt-0 '>
              <h1 className='text-center text-2xl font-bold text-quaternary 2xl:text-4xl'>
                Gestor de Soluciones 
              </h1>
              <h3 className='mt-4 text-center text-sm font-normal text-[#8BB1DE]'>
                © 2024 Copyright SoftSolutions<br />
                Todos los derechos reservados
              </h3>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
