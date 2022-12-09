import React, { useState } from "react";

function Recommended(props){
    return (
        <div className="recs">
            <h3>We Think You'll Like...</h3>
            <div className="gallery">
                <table>
                    <tr>
                        <td><img src="images/vader.jpg"></img></td>
                        <td><img src="images/trooper.jpg"></img></td>
                    </tr>
                    <tr>
                        <td><img src="images/adamdriver.jpg"></img></td>
                        <td><img src="images/redguy.jpg"></img></td>
                    </tr>
                    <tr>
                        <td><img src="images/wrinkles.jpg"></img></td>
                        <td><img src="images/lego.jpg"></img></td>
                    </tr>
                </table>

            </div>
        </div>
    )
}
export default Recommended;
