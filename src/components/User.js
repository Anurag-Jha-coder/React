import { useState } from "react";

const User = ({name})=>{

    const [count] = useState(0);
    return(
        <div className="user-cart">
            <p><b>Count: {count}</b></p>
            <p>Name : {name}</p>
            <p>Location : Gurugram</p>
            <p>Email : akumarjha431@gmail.com</p> 
            
        </div>
    );
}

export default User;