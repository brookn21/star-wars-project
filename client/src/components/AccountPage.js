import React, {useState} from "react";

function AccountPage(props){
    const [data, setData] = useState("")

    return (
    <div className="account-form clear white">
        <h3>Your Info:</h3>
        <form onSubmit={(event) => props.addData (event, data)}>
            <input type="radio" id="darkside" name="fav_language" value="DARK SIDE"/>
            <label for="html">DARK SIDE</label><br/>
            <input type="radio" id="lightside" name="fav_language" value="LIGHT SIDE"/>
            <label for="css">LIGHT SIDE</label><br/>
            Name<br/>
            <input type="text" required="true" label="First Name" class-name="form-control" name="fname" access="false" subtype="text"/><br/>
        Height<br/>
        <input type="text" required="true" label="Height" class-name="form-control" name="height" access="false" subtype="text"/><br/>
        Weight<br/>
        <input type="text" required="false" label="Mass" class-name="form-control" name="text-1670592882831" access="false" subtype="text"/><br/>
        Hair Color<br/>
        <input type="text" required="false" label="Hair Color" class-name="form-control" name="text-1670592919208" access="false" subtype="text"/><br/>
        Gender<br/>
        <input type="text" required="false" label="Gender" class-name="form-control" name="text-1670592935705" access="false" subtype="text"/><br/>
        Homeworld<br/>
        <input type="text" required="false" label="Homeworld" class-name="form-control" name="text-1670592992304" access="false" subtype="text"/><br/>
        <button type="submit">Submit / Update</button>
        </form>
    </div>
    )
}
export default AccountPage;
