import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { RegisterStyle } from './style'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { IFormRegister } from '../../interfaces'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import { ImEyeBlocked, ImEye } from 'react-icons/im'

const schema = yup.object().shape({
  name: yup.string().max(50).required('Este campo é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um email')
    .required('Este campo é obrigatório'),
  password: yup
    .string()
    .min(6, 'No mínimo 6 dígitos')
    .max(20, 'No máximo 20 dígitos')
    .required('Este campo é obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirme sua senha')
    .oneOf([yup.ref('password')], 'A senha não coincide'),
  phone: yup
    .string()
    .max(11, 'Máximo de dígitos alcançado')
    .required('Este campo é obrigatório'),
})

const Register = () => {
  const { registration } = useContext(Context)

  const [showPasswordOne, setShowPasswordOne] = useState(false)
  const [showPasswordTwo, setShowPasswordTwo] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(schema),
  })

  return (
    <>
      <Header />
      <RegisterStyle
      err={errors.email || errors.password ? 'red' : 'black'}
      >
        <div className='container-register'>

          <div className='content-register'>

            <h2>Registro</h2>

            <form onSubmit={handleSubmit(registration)}>

              <label htmlFor='name'>Nome</label>
              <input {...register('name')} id='name' type='text' />
              <span>{errors.name?.message}</span>

              <label htmlFor='email'>E-mail</label>
              <input {...register('email')} id='email' type='text' />
              <span>{errors.email?.message}</span>

              <label htmlFor='password'>Senha</label>
              <div className='input-password'>
                <input
                  {...register('password')}
                  id='password'
                  type={showPasswordOne == true ? 'text' : 'password'}
                />
                <button
                  onClick={(event) => {
                    event.preventDefault()
                    setShowPasswordOne(!showPasswordOne)
                  }}
                >
                  {showPasswordOne == true ? <ImEye /> : <ImEyeBlocked />}
                </button>
              </div>
              <span>{errors.password?.message}</span>

              <label htmlFor='confirmPassword'>Confirmar senha</label>
              <div className='input-confirmPassword'>
                <input
                  {...register('confirmPassword')}
                  id='confirmPassword'
                  type={showPasswordTwo == true ? 'text' : 'password'}
                />
                <button
                  onClick={(event) => {
                    event.preventDefault()
                    setShowPasswordTwo(!showPasswordTwo)
                  }}
                >
                  {showPasswordTwo == true ? <ImEye /> : <ImEyeBlocked />}
                </button>
              </div>
              <span>{errors.confirmPassword?.message}</span>

              <label htmlFor='phone'>Telefone</label>
              <input {...register('phone')} id='phone' type='text' />
              <span>{errors.phone?.message}</span>

              <button id='register-button' type='submit'>
                Cadastrar
              </button>
            </form>

            <Link to={'/'}>
              <button id='link-to-login'>Voltar para Login</button>
            </Link>

          </div>

        </div>

      </RegisterStyle>
    </>
  )
}

export default Register
