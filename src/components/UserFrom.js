import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const UserFrom = () => {
    const dispatch = useDispatch()
    const [formData, setFromData] =useState({name: '', lastName:'', age:''})
    const handleChangeInput =(e) => {
        const{name, value} = e.target
        setFromData((prevData) => ({
            ...prevData,
                [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type:'ADD_USER',
            payload:formData
        });
        setFromData({name: '', lastName:'', age:''})

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' value={formData.name} placeholder='name' onChange={handleChangeInput} />
            <input type="text" name='lastName' value={formData.lastName} placeholder='lastName' onChange={handleChangeInput}/>
            <input type="text" name='age' value={formData.age} placeholder='age' onChange={handleChangeInput}/>
            <button type={"submit"}>add</button>
        </form>
    );
};

export default UserFrom;