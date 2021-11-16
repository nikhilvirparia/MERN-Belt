import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllPets = (props) => {
    
    //keep track of what is being typed via useState hook
    const [ allPets, setAllPets ] = useState([]); 
    const [ deletePets, setdeletePets ] = useState(false)

    //handler when the form is submitted
    useEffect(() => { 
        axios.get('http://localhost:8000/api/pets')
        .then(res=>{
            console.log("Response getting all pets --> ", res.data)
            setAllPets(res.data)
        })
        .catch(err=>console.log(err))

    },[props.formSubmit, deletePets]);

    // Delete Pets
    const deletePet = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res) 
                setdeletePets(!deletePets)
            })
            .catch(err => console.error(err));
    }

    //onChange to update firstName and lastName
    return (
        <div>
            <Link to={`/pets/new`}>Add New</Link>

            <h1> Pet Shelter </h1>
            <h3> These pets are looking for a good home </h3>

            <table>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Types </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    { allPets.map(element => {
                        return(
    
                            <tr key={`${element._id}`}>
                                <td>
                                    <p to={`/api/pets/${element._id}`}>{element.name}</p>
                                </td>
                                <td>
                                    <p to={`/api/pets/${element._id}`}>{element.type}</p>
                                </td>
                                <td>
                                <Link to={`/api/pets/${element._id}`}>Details</Link> | <Link to={`/pets/edit/${element._id}`}>Edit</Link>
                                </td>
                        
                            </tr>  )
                            
                    }

                )}
                    </tbody>
                    </table>
        </div>
    )
}

export default AllPets