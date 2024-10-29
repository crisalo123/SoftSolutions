

import { cn } from '../lib'
import { BaseLayoutProps } from '../types/base-layout'
import { Navbar } from './navbar'
import { Wrapper } from './wrapper'
import dayjs from 'dayjs';


export function BaseLayout({
  children,
  className = '',
  mainClassName = '',
  header,
  navBar = true,
}: Readonly<BaseLayoutProps>) {

  // const { user } = useAuthStore();
  const date = new Date()
   const dateRep = ( dayjs(date).format('MM/DD/YYYY'))

  return (
    <div className={cn('relative flex min-h-screen bg-primary-50', className)}>
      {navBar && <Navbar />}
      <div className='flex w-full flex-col px-5'>
        {header && (
          <div className='bg-primary-500 h-20 rounded-md justify-between flex'> 
             <h1 className='text-white font-semibold text-3xl p-2'> Bienvenido  </h1> 
              <p className='mt-10 mx-5 text-white'>Fecha Ingreso: {dateRep}</p>
          </div>
          // <Header subHeader={subHeader} specificAgent={specificAgent} valueStatusAgent={valueStatus10Agent} />
        )}
        <Wrapper>
          <main
            className={cn(
              'h-full w-full overflow-y-auto pb-4 pt-5',
              mainClassName
            )}
          >
            {children}
          </main>
        </Wrapper>
      </div>
    </div>
  )
}
