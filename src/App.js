//import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This website is for a partice purposes and open-sourced on{" "}
          <a
            href="https://github.com/prakadw-dev/react-final-app"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
