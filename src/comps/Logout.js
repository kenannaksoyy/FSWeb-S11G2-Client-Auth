import React, { useEffect } from "react";

export default function Logout() {
    useEffect(()=>{
        localStorage.removeItem("token");
    })
    return (
        <div >
            <h1>Cikis Yapiliyor</h1>     
        </div>
    )
}