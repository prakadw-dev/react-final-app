//import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <a
          href="https://github.com/prakadw-dev/react-final-app"
          target="_blank"
          rel="noreferrer"
        >
          Github Link
        </a>
      </div>
    </div>
  );
}

export default App;
