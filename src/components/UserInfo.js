import React from 'react';
import {useSelector} from "react-redux";

const UserInfo = () => {
const user = useSelector((state) => state.user)
    return (
        <div>
            <h1>Name:{user.name}</h1>
            <h1>LastName:{user.lastName}</h1>
            <h1>Age:{user.age}</h1>

        </div>
    );
};

export default UserInfo;