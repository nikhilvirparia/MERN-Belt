import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import axios from 'axios';

const PetInfo = (props) => {

    const [petInfo, setPetInfo] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect (() => {
    axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => { 
            console.log("response from get one: ", res);
            setPetInfo(res.data)
            })
            .catch(err => console.log(err))
        },[id]);

        const deletePet = (id) => {
            axios.delete(`http://localhost:8000/api/pets/${id}`)
                .then(res => {
                    console.log(res) 
                    history.push('/');
                })
                .catch(err => console.error(err));
        }

    return (
        <>
        <h1> Pet Shelter </h1>
        <h2> Details about: {petInfo.name} </h2>
        
        <div> 
            <p> Pet type: {petInfo.type} </p>
            <p>Description: {petInfo.description}</p>
            <p>skills: {petInfo.skill1}<br/>
                        {petInfo.skill2}<br/>
                        {petInfo.skill3}
            </p>
            <button onClick={(e)=>{deletePet(petInfo._id)}}>Adopt {petInfo.name} </button>
        </div>
        </>
    );
};

export default PetInfo;