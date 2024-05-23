import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import FormHooks from './components/Hooks/FormHooks'
import ShowUserName from './components/ShowUserName/ShowUserName'


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Form></Form>
    <Footer></Footer>
    <FormHooks></FormHooks>
    <ShowUserName name='Filipe Fonseca'></ShowUserName>
    </>
  )
}

export default App
