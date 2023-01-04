import React from "react";
import { Link } from "react-router-dom";
//Browser kayıtlı olan token sebebiyle üye girişi yap ve çıkış sürekli sayfada kalmak zorunda

export default function Header() {
    return (
        <div className="header-cont">
            <h1>Dostluk Sitesi</h1><br/>
            <Link to="/login">Üye Girişi</Link><br/>
            <Link to="/addfriend">Arkadas Ekle</Link><br/>
            <Link to="/friendlist">Arkadaslari Listele</Link><br/>
            <Link to="/logout">Cikis Yap</Link><br/>
        </div>
    )
}