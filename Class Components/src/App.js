import './App.css';
import FunctionalComponent from './Component/Functional/FunctionalComponent.js';
import ClassComponent from './Component/Class/ClassComponent';
import Counter from './Component/Counter/Counter';
import Fetch from './Component/Fetch/Fetch';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <Counter />
      <Fetch />
    </div>
  );
}

export default App;
