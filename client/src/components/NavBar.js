import React, { useState } from "react";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";

function NavBar(props){
    const [isShown, setIsShown] = useState(true)
    const handleClick = event => {
      setIsShown(isShown => !isShown);
      console.log(isShown)
    };

    function updatePage(pageName) {
        return props.setPage(pageName)
    }
    return(
    <div >
        <span className="navleft">

        {/* <h3>
        <a onClick={updatePage("home")} href="/">HOME</a>
        </h3>

        <h3>
        <a onClick={updatePage("account")} href="/account">MY ACCOUNT</a>
        </h3> */}

        </span>
        <span className="navright">
        <h3>
            "Hello your-name! Not your-name? <a href="/logout">Logout</a>
        </h3>
        </span>
    </div>
    )
}

export default NavBar;
