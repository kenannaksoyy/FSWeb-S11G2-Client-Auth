import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

export default function AddFriend() {
    const history = useHistory();
    const [yeniDost, setYeniDost] = useState({
        name:"",
        email:""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setYeniDost({
            ...yeniDost,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axiosWithAuth()
          .post("http://localhost:9000/api/friends", yeniDost)
          .then((res) => {
            console.log(res.status);
            if(res.status===200) history.push("/friendlist");
            
          })
          .catch((error) => console.log(error.res.data.error));
      };

    return (
        <div className="add-friend-cont">
            <h1>Add Friend</h1><br/>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        isim:
                        <input
                            name="name"
                            type="text"
                            value={yeniDost.name}
                            onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        mail:
                        <input
                            name="email"
                            type="email"
                            value={yeniDost.email}
                            onChange={handleChange}
                        />
                    </label>
                </p>
                <p>
                    <input type="submit" value="Yeni Dost Ekle" />
                </p>
            </form>
            
        </div>
    )
}