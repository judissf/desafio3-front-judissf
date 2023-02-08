import { createContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  IClientUpdate,
  IContact,
  IContactCreate,
  IContext,
  IFormLogin,
  IFormRegister,
  IFormUpdateContact,
  IProfile,
  IProvider,
} from '../interfaces'
import api from '../service/axios'

export const Context = createContext({} as IContext)

const Provider = ({ children }: IProvider) => {
  const [profile, setProfile] = useState<IProfile>({} as IProfile)
  const [contacts, setContacts] = useState<IContact[]>([])
  const [showEditClientModal, setShowEditClientModal] = useState<boolean>(false)
  const [showAddContactModal, setShowAddContactModal] = useState<boolean>(false)
  const [showEditContactModal, setShowEditContactModal] =
    useState<boolean>(false)
  const [contactId, setContactId] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    loadContacts()
    loadProfile()
  }, [])

  const login = (data: IFormLogin) => {
    api
      .post('/login', data)
      .then((res) => {
        localStorage.setItem('@TOKEN', res.data.token)
        toast.success('Login efetuado com sucesso')
        setTimeout(() => navigate('/home', { replace: true }), 3000)
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`)
        console.error(error)
      })
  }

  const registration = (data: IFormRegister) => {
    const { confirmPassword, ...rest } = data

    api
      .post('/clients', rest)
      .then((res) => {
        toast.success('Usuário cadastrado com suceso', {
          theme: 'light',
          pauseOnHover: false,
        })
        setTimeout(() => navigate('/', { replace: true }), 3000)
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`)
        console.log(error)
      })
  }

  const loadProfile = () => {
    const token = localStorage.getItem('@TOKEN')
    if (!token) {
      ;<Navigate to='/' />
    } else {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      api
        .get('/clients')
        .then((res) => {
          setProfile(res.data)
          navigate('/home')
        })
        .catch((error) => {
          toast.error(`${error.response.data.message}`)
          console.error(error)
        })
    }
  }

  const updateClient = (data: IClientUpdate) => {
    const token = localStorage.getItem('@TOKEN')

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    api
      .patch('/clients', data)
      .then((res) => {
        toast.success('Dados do perfil atualizados')
        setProfile(res.data)
      })
      .catch((error) => toast.error(`${error.response.data.message}`))
  }

  const deleteClient = () => {
    const token = localStorage.getItem('@TOKEN')

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    api
      .patch('/clients')
      .then((res) => {
        toast.warn('Esta conta foi desativada')
        setProfile(res.data)
      })
      .catch((error) => toast.error(`${error.response.data.message}`))
  }

  const createContact = (data: IContactCreate) => {
    const token = localStorage.getItem('@TOKEN')

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const newData = {
      ...data,
      user: profile,
    }

    api.post('/contacts', newData).then((res) => {
      toast.success('Contato criado')
      setContacts((old) => [...old, res.data])
    })
  }

  const loadContacts = () => {
    const token = localStorage.getItem('@TOKEN')

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    api
      .get('/contacts')
      .then((res) => setContacts(res.data))
      .catch((error) => {
        toast.error(`${error.response.data.message}`)
        console.log(error)
      })
  }

  const updateContact = (data: IFormUpdateContact, id: string) => {
    const token = localStorage.getItem('@TOKEN')

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    api
      .patch(`/contacts/${id}`, data)
      .then((res) => {
        loadContacts()
        toast.success('Contato atualizado')
      })
      .catch((error) => toast.error(`${error.response.data.message}`))
  }

  const deleteContact = (id: string) => {
    const token = localStorage.getItem('@TOKEN')

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    api
      .delete(`/contacts/${id}`)
      .then((res) => {
        toast.success('Contato excluído')
      })
      .catch((error) => toast.error(`${error.response.data.message}`))
  }

  const handleDelete = (contact: IContact) => {
    const array = contacts.filter((result) => result !== contact)
    setContacts([...array])
  }

  return (
    <Context.Provider
      value={{
        profile,
        setProfile,
        contacts,
        setContacts,
        login,
        loadProfile,
        registration,
        updateClient,
        deleteClient,
        showEditClientModal,
        setShowEditClientModal,
        showAddContactModal,
        setShowAddContactModal,
        showEditContactModal,
        setShowEditContactModal,
        createContact,
        loadContacts,
        updateContact,
        deleteContact,
        handleDelete,
        contactId,
        setContactId,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
