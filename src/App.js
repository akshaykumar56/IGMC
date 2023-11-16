import './App.css';
import Login from './Pages/Login/Login'
import Navbar from './Component/Navbar'
import Main from './Pages/Main/Main'
function App() {
  let a=localStorage.getItem('A');
  return (
    <div className="App">
      <Navbar/>

    {
  (a==='1'?<Main/>:<Login/>)
    }
    </div>
  );
}

export default App;
