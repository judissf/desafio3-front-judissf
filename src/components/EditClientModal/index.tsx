import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import { EditClientStyle } from './style'
import { IoMdClose } from 'react-icons/io'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IFormUpdateClient } from '../../interfaces'

const schema = yup.object().shape({
  name: yup.string().max(50).required('Não pode ser vazio'),
  password: yup
    .string()
    .nullable(true)
    .max(20, 'No máximo 20 dígitos'),
  phone: yup.string().nullable(true).max(11, 'No máximo 11 dígitos'),
})

const EditClientModal = () => {
  const { setShowEditClientModal, updateClient, profile } = useContext(Context)

  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUpdateClient>({
    resolver: yupResolver(schema),
  })

  return (
    <EditClientStyle
      err={errors.name || errors.password || errors.phone ? 'red' : 'white'}
    >
      <div className='container-edit-client'>
        <div className='title-close-button'>
          <h4>Editar perfil</h4>

          <button onClick={() => setShowEditClientModal(false)}>
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(updateClient)}>
          <label htmlFor='name'>Nome</label>
          <input {...register('name')} id='name' type='text' defaultValue={`${profile?.name}`} />
          <span>{errors.name?.message}</span>

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

          <label htmlFor='phone'>Telefone</label>
          <input {...register('phone')} id='phone' type='text' defaultValue={`${profile?.phone}`} />
          <span>{errors.phone?.message}</span>

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </EditClientStyle>
  )
}

export default EditClientModal
