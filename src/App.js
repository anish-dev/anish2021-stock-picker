import "./App.css";
import "antd/dist/antd.css";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title">Stock Picker</div>
      </header>
      <Homepage />
    </div>
  );
}

export default App;
