import logo from "./logo.svg";
import "./App.css";
import { SlapsCounter } from "./Components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="header">The End Of Vraj-o-Tomy</h1>
        <h4>That One Slap that's gonna send echoes through the multiverse </h4>
        <SlapsCounter />
      </div>
    </div>
  );
}

export default App;
