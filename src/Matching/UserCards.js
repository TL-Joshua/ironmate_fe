import React,{ useEffect, useState } from "react";


function UserCards (){
    const [users, setUser] = useState([
    {
        name: 'uncle phil',
        url: 'https://i3-img.prosiebenmaxx.de/pis/ezone/0b5bqgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXaheiyCf8r-rALiVAVI4STTmYcV1EDE726_Iuq2TDuTVRg38ABS6mO3Db7mLje5l28D3lekXSwN-s68cuSHODouqwtjAXvjSzKgx8Ru3NUL9FFTTVZku1i8H45OteRpmkT2lrg4z-ooHD0yE6_P4lfgNLcxUbwxgvXRV2JwPJEMeIelvy8SXurYlx-XUSA/profile:mag-996x562'
    },
    {
        name: 'kimo drizzy',
        url: 'https://i.pinimg.com/originals/f7/12/8b/f7128b8b867bda661ff5c65609ca88d2.png'
    }
    ]);

    // const [first]= useState([
    //     users[0]
    // ]);

    useEffect(() => {
        fetch('http://localhost:8000/profiles')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setUser(data);
        })
    })

}
 
export default UserCards;