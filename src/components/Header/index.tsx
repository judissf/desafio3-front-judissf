import { HeaderStyle } from './style'
import { GrContactInfo } from 'react-icons/gr'

const Header = () => {
  return (
    <HeaderStyle>
      <div className='container-header'>
        <div className='logo'>
          <h1>AGENDA DE CONTATOS</h1>
          <span>
            <GrContactInfo />
          </span>
        </div>

        
      </div>
    </HeaderStyle>
  )
}

export default Header
