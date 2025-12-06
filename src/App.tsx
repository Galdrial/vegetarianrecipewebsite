import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {


  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Main />
        <Footer />
      </Provider>
    </>
  )
}

export default App
