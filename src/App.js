import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Link from "next/link";

function App() {
  return (
      <Link href="/">
        <a>About</a> 
      </Link>
  )
}

export default App;
