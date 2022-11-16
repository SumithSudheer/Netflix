
import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {Orginals,Action,Comedy,Horror,Romance,Documentry} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Banner/>
      <RowPost title='Netflix Orginals' url={Orginals} />
      <RowPost title='Action' isSmall  url={Action}/>
      <RowPost title='Comedy' isSmall  url={Comedy}/>
      <RowPost title='Horror' isSmall  url={Horror}/>
      <RowPost title='Romance' isSmall  url={Romance}/>
      <RowPost title='Documentry' isSmall  url={Documentry}/>

    </div>
  );
}

export default App;
