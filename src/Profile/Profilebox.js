import { useState } from "react";

     
const Profilebox = () => {
    return (
         <div className="angaben">
            <ul>
                <h3>personal details</h3>
                    <li>name</li>
                    <li>age</li>
                    <li>bio</li>
                    <li>icon-url</li>
                    <li>birth date</li>
                    <li>e-mail</li>
            </ul>
            <ul>
                <h3>hobbies and interests</h3>
                    <li>My hobbies</li>
                    <li>favourite food</li>
                    <li>favourite book</li>  
                    <li>favourite singer</li>
                    <li>favourite city</li>
                    <button>Save</button>
            </ul> 
    </div>)}
    ;
     export default Profilebox;