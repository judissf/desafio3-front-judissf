import { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../../components/Header'
import { Context } from '../../context/Context'
import { HomeStyle } from './style'
import { ImExit } from 'react-icons/im'
import { FiEdit } from 'react-icons/fi'
import { FaUserPlus } from 'react-icons/fa'
import { RiErrorWarningFill } from 'react-icons/ri'
import { FaCheckSquare } from 'react-icons/fa'
import { MdOutlineDoNotDisturbOn } from 'react-icons/md'
import Contact from '../../components/Contact'
import { v4 as uuid } from 'uuid'
import AddContactModal from '../../components/AddContactModal'
import EditClientModal from '../../components/EditClientModal'
import EditContactModal from '../../components/EditContactModal'

const Home = () => {
  const {
    loadProfile,
    loadContacts,
    profile,
    contacts,
    setShowEditClientModal,
    setShowAddContactModal,
    showAddContactModal,
    showEditClientModal,
    showEditContactModal
  } = useContext(Context)

  const [hoverButton, setHoverButton] = useState(false)

  const [filterContact, setFilterContact] = useState('')

  const navigate = useNavigate()

  const token = localStorage.getItem('@TOKEN')

  useEffect(() => {
    loadContacts()
    loadProfile()
  }, [])

  return token ? (
    <>
      <Header />
      {showEditContactModal && <EditContactModal />}
      {showEditClientModal && <EditClientModal />}
      {showAddContactModal && <AddContactModal />}
      <HomeStyle
        isActive={profile?.isActive == true ? 'green' : 'red'}
        width={profile?.isActive == true ? '120px' : '155px'}
      >
        <div className='container-home'>
          <div className='logout-description'>
            <button
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              onClick={() => {
                localStorage.clear()
                toast.warn('Até logo!', {
                  autoClose: 2000,
                })
                navigate('/')
              }}
            >
              {hoverButton == true ? 'Sair' : <ImExit />}
            </button>

            <p id='description'>
              Uma lista de contatos bem estruturada possibilita mais
              produtividade no seu dia.
            </p>
          </div>

          <div className='profile-contacts'>
            <div className='content-profile'>
              <h2 id='profile-name'>{profile?.name}</h2>
              <div className='profile-status'>
                <p id='profile-isActive'>
                  Status:{' '}
                  <strong>
                    {profile?.isActive == true ? 'Ativo' : 'Desativado'}
                  </strong>
                </p>
                <span>
                  {profile?.isActive == true ? (
                    <FaCheckSquare />
                  ) : (
                    <MdOutlineDoNotDisturbOn />
                  )}
                </span>
              </div>
              <p id='profile-phone'>Telefone: {profile?.phone}</p>
              <p id='profile-email'>E-mail: {profile?.email}</p>

              <div className='edit-add-buttons'>
                <button onClick={() => setShowEditClientModal(true)}>
                  <FiEdit />
                </button>

                <button onClick={() => setShowAddContactModal(true)}>
                  <FaUserPlus />
                </button>
              </div>
            </div>

            <div className='content-contacts'>
              <div className='title-search-contact'>
                <h3>Contatos</h3>
                <input
                  type='text'
                  placeholder='Pesquisar'
                  onChange={(event) => setFilterContact(event.target.value)}
                />
              </div>
              <ul>
                {contacts?.length == 0 ? (
                  <div className='warn-contacts'>
                    <span>
                      <RiErrorWarningFill />
                    </span>
                    <p>Você ainda não adicionou nenhum contato</p>
                  </div>
                ) : filterContact.length != 0 ? (
                  contacts
                    .filter(
                      (result) =>
                        result.name.includes(
                          filterContact.trim().toLowerCase()
                        ) ||
                        result.email.includes(
                          filterContact.trim().toLowerCase()
                        ) ||
                        result.phone.includes(
                          filterContact.trim().toLowerCase()
                        )
                    )
                    .map((contact) => (
                      <Contact key={uuid()} contact={contact} />
                    ))
                ) : (
                  contacts?.map((contact) => (
                    <Contact key={uuid()} contact={contact} />
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </HomeStyle>
      {showEditClientModal}
    </>
  ) : (
    <Navigate to={'/'} />
  )
}

export default Home
