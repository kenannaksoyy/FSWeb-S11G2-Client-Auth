
import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="Home-cont">
            <h1>Dostluk Ariyorsan En Doğru Yerdesin</h1><br/>
            <Link to="/login"> Hemen Üye Girişini Yap</Link><br/>
        </div>
    )
}