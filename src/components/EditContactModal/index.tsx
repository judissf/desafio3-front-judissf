import { useContext } from "react"
import { Context } from "../../context/Context"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { EditContactStyle } from './style'
import { IoMdClose } from 'react-icons/io'
import { IContactUpdate } from '../../interfaces'

const schema = yup.object().shape({
  name: yup.string().max(50).required('Não pode ser vazio'),
  email: yup.string().email('Deve ser um e-mail').max(30).nullable(true),
  phone: yup.string().max(11).nullable(true),
})

const EditContactModal = ()   => {

  const { setShowEditContactModal, updateContact, contactId, contacts } = useContext(Context)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactUpdate>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IContactUpdate) => {
    updateContact(data, contactId)}

  const filteredContact = contacts.find((result) => result.id == contactId)

  return (
    <EditContactStyle
      err={errors.name || errors.email || errors.phone ? 'red' : 'white'}
    >
      <div className='container-edit-contact-modal'>
        <div className='title-button-close'>
          <h4>Editar contato</h4>
          <button onClick={() => setShowEditContactModal(false)}>
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='name'>Nome</label>
          <input {...register('name')} id='name' type='text' defaultValue={`${filteredContact?.name}`} />
          <span>{errors.name?.message}</span>

          <label htmlFor='email'>E-mail</label>
          <input {...register('email')} id='email' type='text' defaultValue={`${filteredContact?.email}`} />
          <span>{errors.email?.message}</span>

          <label htmlFor='phone'>Telefone</label>
          <input {...register('phone')} id='phone' placeholder='Ex: DDD 9 1234 5678' type='text' defaultValue={`${filteredContact?.phone}`} />
          <span>{errors.phone?.message}</span>

          <button type='submit'>Enviar</button>
        </form>
      </div>
    </EditContactStyle>
  )
    
}

export default EditContactModal