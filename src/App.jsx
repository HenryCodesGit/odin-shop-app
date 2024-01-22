import "./App.css";

function App() {

  return (<>
    <header>
      <div className="nav-logo">
        <a href="/" className="nav-logo-links" aria-label="DefinitelyNotFake.com">
          <div className="nav-logo-icon"></div>
          <span className="nav-logo-text">DefinitelyNotFake</span>
        </a>
      </div>
      <div className="nav-right">
        <button type="button" className="user-account" aria-label="user account">
          <div className="icon"></div>
          <div className="text">UserName</div>
        </button>
        <button type="button" className="cart" aria-label="cart">
          <div className="icon"></div>
          <div className="text">Cart</div>
        </button>
      </div>
      <form className="search-form" id="search">
          <input className = "search-text" type="text" id="search-text" name="search-text" aria-label="search text"/>
          <button type="submit" aria-label="Go"></button>
      </form>
    </header>
    <nav>Shop links here</nav>
    <main>Items for shop go in here</main>
    <footer>© 2024 The Odin Project. All rights reserved.</footer>
  </>);
}

export default App;



/*
Attributions for putting in later


<a href="https://www.flaticon.com/free-icons/vegetables" title="vegetables icons">Vegetables icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>




*/