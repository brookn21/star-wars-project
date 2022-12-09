import React from "react";

function AccountPage(props){
    return (
    <div className="clear white">
        <h3>Your Info:</h3>
        <form>
            <input type="radio" id="darkside" name="fav_language" value="DARK SIDE"/>
            <label for="html">DARK SIDE</label><br/>
            <input type="radio" id="lightside" name="fav_language" value="LIGHT SIDE"/>
            <label for="css">LIGHT SIDE</label><br/>
            <input type="text" name="authenticity_token" value="First Name"/>
            <input type="text"  value="Last Name"/>
            <input type="text"  value="Email"/>
            <input type="text" value="Password"/>
        </form>
    </div>
    )
}
export default AccountPage;
