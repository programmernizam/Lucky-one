import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Shop/>

      <h3>How react work?</h3>
      <p><strong>Answer:</strong>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory where it does all the necessary manipulating, before making the changes in the browser DOM. then changes only what needs to be changed</p>
      <br />
      <h3>Difference between State and Props?</h3>
      <p>1.	Props are read-only or State changes can be asynchronous.
      2. Props are immutable or	State is mutable.
      3.	Props allow you to pass data from one component to other components as an argument or	State holds information about the components.
      4.	Props can be accessed by the child component or	State cannot be accessed by child components.
      5. Stateless component can have Props or	Stateless components cannot have State.
      </p>
    </div>
  );
}

export default App;
