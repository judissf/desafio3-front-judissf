import { ContactStyle } from './style'
import { FaUserEdit } from 'react-icons/fa'
import { FaUserTimes } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { RiMailSendLine } from 'react-icons/ri'
import { useContext  } from 'react'
import { Context } from '../../context/Context'
import EditContactModal from '../EditContactModal'

const Contact = ({ key, contact }: any) => {

  const { setContactId } = useContext(Context)

  const {
    deleteContact,
    handleDelete,
    setShowEditContactModal,
  } = useContext(Context)

  return (
    <>
      <ContactStyle key={key}>
        <div className='name-edit-delete'>
          <p>{contact.name}</p>
          <div className='edit-delete-buttons'>
            <button
              id={contact.id}
              onClick={(event) => {
                setContactId(event.currentTarget.id)
                setShowEditContactModal(true)
              }}
            >
              <FaUserEdit />
            </button>
            <button
              onClick={() => {
                handleDelete(contact)
                deleteContact(contact?.id)
              }}
            >
              <FaUserTimes />
            </button>
          </div>
        </div>
        <div className='contact-phone'>
          <span>
            <FiPhoneCall />
          </span>
          <p>{contact.phone}</p>
        </div>
        <div className='contact-email'>
          <span>
            <RiMailSendLine />
          </span>
          <p>{contact.email}</p>
        </div>
      </ContactStyle>
    </>
  )
}

export default Contact
