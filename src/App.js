import "./App.css";

const ironhackLogo = "/images/ironhack-logo.svg";
const menuTop = "/images/menu-top.svg";

// Header with Ironhack logo and menu icon

function Header() {
  return (
    <div className="Header">
      <img src={ironhackLogo} className="Ironhack-logo" alt="logo" />
      <img src={menuTop} className="Menu-top" alt="menu" />
    </div>
  );
}

// Main card with text and button

function MainCard() {
  return (
    <div className="Main-card">
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and become
        a super Ninja developer.
      </p>
      <button>Awesome!</button>
    </div>
  );
}

function ImagesContainer() {
  return (
    <div className="Images-container">
      <div className="Single-image-container">
        <img src={"/images/icon1.png"} alt="icon1" />
        <h2>Declarative</h2>
        <p>React makes it painless to create iteractive UIs.</p>
      </div>

      <div className="Single-image-container">
        <img src={"/images/icon2.png"} alt="icon2" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div className="Single-image-container">
        <img src={"/images/icon3.png"} alt="icon3" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>

      <div className="Single-image-container">
        <img src={"/images/icon4.png"} alt="icon4" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <MainCard />
      </header>
      <ImagesContainer />
    </div>
  );
}

export default App;
