import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  cn
} from '@/feature/core'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useLoginForm } from './use-login-form'
import { Spinner } from '@/feature/core'

export const LoginForm = ({ className }: { className?: string }) => {
  const { form, isLoading, toggleVisibility, onSuccess, passwordsVisible } =
    useLoginForm()
    

  const { control, handleSubmit, getFieldState } = form
  const userNameError = getFieldState('username').error

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSuccess)}
        className={cn(
          'flex flex-col gap-6',
          `${userNameError && 'gap-10'}`,
          className
        )}
      >
        <FormField
          control={control}
          name='username'
          render={({ field }) => (
            <FormItem className=' h-14 2xl:h-16'>
              <label className='text-sm font-medium text-black'>Usuario</label>
              <FormControl className='h-10 2xl:h-12'>
                <Input {...field} className='' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <label className='text-sm font-medium text-black'>
                Contraseña
              </label>
              <FormControl className='h-10 2xl:h-12'>
                <Input
                  type={passwordsVisible.oldPassword ? 'text' : 'password'}
                  anotherIcon={
                    passwordsVisible.oldPassword ? (
                      <FaEyeSlash aria-label='ver' />
                    ) : (
                      <FaEye aria-label='ocultar' />
                    )
                  }
                  anotherIconButtonProps={{
                    type: 'button',
                    onClick: () => {
                      toggleVisibility('oldPassword')
                    },
                    iconPosition: 'right'
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='text-md flex w-full gap-3 bg-secondary-200 font-semibold hover:border-2 hover:border-secondary-400 hover:bg-transparent hover:text-secondary-200'
          type='submit'
          disabled={isLoading}
        >
          {isLoading && <Spinner size='sm' className='text-inherit' />}
          Iniciar sesión
        </Button>
      </form>
    </Form>
  )
}
