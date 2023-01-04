import React,{useState,useEffect} from "react";
import { axiosWithAuth } from "./axiosWithAuth";

export default function FriendList() {
    const [dostlar, setDostlar] = useState({});
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        axiosWithAuth()
          .get("http://localhost:9000/api/friends")
          .then((res) => {
            if (res.status === 200) {
                setDostlar(res.data);
            }
          })
          .catch((err) => 
          console.log(err.message)
        );
      }, [refresh]);

      console.log(dostlar);

    return (
        <div className="friend-list-cont">
            <h1>List Friend</h1><br/>
            <button onClick={()=>{setRefresh(!refresh)}}>Dostlari Refresle</button>
            {
                dostlar.length>0 ?
                (
                    dostlar.map((dost) => (
                        <>
                            <p key={dost["id"]}>Dost İsim: {dost["name"]} Dost Yas: {dost["age"]}</p>
                            <span>Dost Mail: {dost["email"]}</span><br/>
                            <span>****************************************************************</span>
                        </>

                    ))
                )
                :
                (
                    <p>Masadan Eksildi Dostlar</p>
                )
            }
            
        </div>
    )
}