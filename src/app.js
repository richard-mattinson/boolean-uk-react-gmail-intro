import './styles/app.css'
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import EmailBody from './components/EmailBody';

function App() {
  return (
    <div className="app">
        <Header />
        <LeftMenu />
        <EmailBody />
    </div>
  )
}

export default App
