import { useContext } from 'react'
import { Context } from '../../context/Context'
import { AddModalStyle } from './style'
import { IoMdClose } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IContactCreate } from '../../interfaces'

const schema = yup.object().shape({
  name: yup.string().max(50).required('Não pode ser vazio'),
  email: yup.string().nullable(true).email('Deve ser um e-mail').max(30),
  phone: yup.string().max(11, 'No máximo 11 dígitos').required('Não pode ser vazio'),
})

const AddContactModal = () => {
  const { setShowAddContactModal, createContact } = useContext(Context)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactCreate>({
    resolver: yupResolver(schema),
  })

  return (
    <AddModalStyle
      err={errors.name || errors.email || errors.phone ? 'red' : 'white'}
    >
      <div className='container-add-contact-modal'>
        <div className='title-button-close'>
          <h4>Adicionar contato</h4>
          <button onClick={() => setShowAddContactModal(false)}>
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(createContact)}>
          <label htmlFor='name'>Nome</label>
          <input {...register('name')} id='name' type='text' />
          <span>{errors.name?.message}</span>

          <label htmlFor='email'>E-mail</label>
          <input {...register('email')} id='email' type='text' />
          <span>{errors.email?.message}</span>

          <label htmlFor='phone'>Telefone</label>
          <input {...register('phone')} id='phone' placeholder='Ex: DDD 9 1234 5678' type='text' />
          <span>{errors.phone?.message}</span>

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </AddModalStyle>
  )
}

export default AddContactModal