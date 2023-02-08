import Provider from './context/Context.jsx'
import RoutesMain from './routes/index.js'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <Provider>
    <ToastContainer 
      autoClose={2000}
      pauseOnHover={false}
    />
    <RoutesMain />
  </Provider>
)

export default App
