
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import ContactHeader from "./components/contactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm />
      </main>
      
    </>
  )
}

export default App
