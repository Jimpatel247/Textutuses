
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
  <>
   
<Navbar title ="Textuses" aboutus="About us"/>
<div className="container  my-2" >
<Textform heading="Enter the text to analyse"/>

</div>
  </>
  );
}

export default App;
