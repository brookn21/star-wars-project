import React, { useState } from "react";
import './App.css';
import HomePage from './HomePage';
import NavBar from './NavBar';
import AccountPage from './AccountPage';

function App() {
  const [isShown, setIsShown] = useState(true)
    const handleClick = event => {
      setIsShown(isShown => !isShown);
      console.log(isShown)
    };

  const [page, setPage] = useState("home")

  function CurrentPage(currentPage) {
    if (currentPage == "home") {
      return <HomePage />;
    }
    else if (currentPage == "account"){
      return <AccountPage />;
    }
  }

  return (
<>

  <div className="App">
    <div className="main-container float-left">
      <NavBar setPage={setPage}/>
      {isShown ? (<>
          <button onClick={handleClick} className="primary">MY ACCOUNT</button>
          <HomePage/>
        </>) : (
        <>
          <button onClick={handleClick}>HOME</button>,
          <AccountPage/>
        </>
      )}
      {/* {CurrentPage(page)} */}
    </div>
  </div>
</>
  );
}

export default App;
