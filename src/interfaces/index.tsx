export interface IProvider {
  children: React.ReactNode
}

export interface IContext {
  profile: IProfile
  setProfile: React.Dispatch<React.SetStateAction<IProfile>>
  contacts: IContact[]
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>
  login: (data: IFormLogin) => void
  loadProfile: () => void
  registration: (data: IFormRegister) => void
  updateClient: (data: IClientUpdate) => void
  deleteClient: () => void
  showEditClientModal: boolean
  setShowEditClientModal: React.Dispatch<React.SetStateAction<boolean>>
  showAddContactModal: boolean 
  setShowAddContactModal: React.Dispatch<React.SetStateAction<boolean>>
  showEditContactModal: boolean
  setShowEditContactModal: React.Dispatch<React.SetStateAction<boolean>>
  createContact: (data: IContactCreate) => void
  loadContacts: () => void
  updateContact: (data: IFormUpdateContact, id: string) => void
  deleteContact: (id: string) => void
  handleDelete: (contact: IContact) => void
  contactId: string
  setContactId: React.Dispatch<React.SetStateAction<string>>
}

export interface IProfile {
  id: string
  name: string
  email: string
  phone: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface IContact {
  id: string
  name: string
  email: string
  phone: string
  createdAt: Date
  updatedAt: Date
}

export interface IFormLogin {
  email: string
  password: string
}

export interface IFormRegister {
  name: string
  email: string
  password: string
  confirmPassword: string
  phone: string
}

export interface IFormUpdateClient {
  name?: string
  password?: string
  phone?: string
}

export interface IFormUpdateContact {
  name?: string
  password?: string
  phone?: string
}

export interface ILoginStyleProps {
  err: string
}

export interface IRegisterStyleProps {
  err: string
}

export interface IAddContactModalStyleProps {
  err: string
}

export interface IEditClientModalStyleProps {
  err: string
}

export interface IEditContactModalStyleProps {
  err: string
}

export interface IHomeStyleProps {
  isActive: string
  width: string
}

export interface IClientUpdate {
  name?: string
  password?: string
  phone?: string
}

export interface IContactCreate {
  name?: string
  email?: string
  phone?: string
}

export interface IContactUpdate {
  name?: string
  email?: string
  phone?: string
}