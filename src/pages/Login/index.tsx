import { useState, useContext } from 'react'
import { LoginStyle } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { ImEyeBlocked, ImEye } from 'react-icons/im'
import { Context } from '../../context/Context'
import { IFormLogin } from '../../interfaces'
import Header from '../../components/Header'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Deve ser um e-mail')
    .required('Este campo é obrigatório'),
  password: yup.string().required('Este campo é obrigatório'),
})

const Login = () => {
  const { login } = useContext(Context)

  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
  })

  return (
    <>
      <Header />
      <LoginStyle err={errors.email || errors.password ? 'red' : 'black'}>
        <div className='container-login'>
          <div className='content-login'>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(login)}>
              <label htmlFor='email'>E-mail</label>
              <input {...register('email')} id='email' type='text' />
              <span>
                {errors.email === undefined ? '' : `${errors.email?.message}`}
              </span>

              <label htmlFor='password'>Senha</label>
              <div className='content-input-password'>
                <input
                  {...register('password')}
                  id='password'
                  type={showPassword == true ? 'text' : 'password'}
                />

                <button
                  id='toggle-password'
                  onClick={(event) => {
                    event.preventDefault()
                    setShowPassword(!showPassword)
                  }}
                >
                  {showPassword == true ? <ImEye /> : <ImEyeBlocked />}
                </button>
              </div>
              <span>{errors.password?.message}</span>

              <button id='submit-button' type='submit'>
                Entrar
              </button>
            </form>

            <Link to={'/register'}>
              <button id='link-to-register'>Novo por aqui? Cadastre-se</button>
            </Link>
          </div>
        </div>
      </LoginStyle>
      
    </>
  )
}

export default Login
