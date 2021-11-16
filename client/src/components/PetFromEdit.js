import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useParams, useHistory } from "react-router-dom";

const PetFormNew = (props) => {

    const { id } = useParams();
    const history = useHistory() 
    
    //keep track of what is being typed via useState hook
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""

    })

    // Validation 
    const [formErrors, setFormErrors] = useState({
        name: "",
        type: "",
        description: ""
    })

    // Change Handler
    const changeHandler = (e) =>{
        console.log("changing the form")
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    // Get the information 
   useEffect (() => {
    axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => { 
            console.log("response from get one: ", res);
            setFormInfo(res.data)
            })
            .catch(err => console.log(err))
        },[]);

    const submitHandler = (e)=>{
        e.preventDefault()
        
        axios.put(`http://localhost:8000/api/pets/${id}`, formInfo)
            .then(res=>{
                
                console.log(res)
                
                if(res.data.errors){ //if the form is not filled out properly
                    setFormErrors(res.data.errors)
                }else{

                    history.push("/")
            }
            })
            .catch(err=>console.log(err))

    }

    return (
        
        <div>
            <h1> Pet Shelter </h1>
            <h3> Edit {formInfo.name} </h3>
            {
                formInfo != null ? 
                        <form onSubmit= {submitHandler}>
                                <p>
                                    <label>Name:</label>
                                    <input onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                                    <p>{formErrors.name?.message}</p>
                                </p>
                                <p>
                                    <label>Type:</label>
                                    <input onChange={changeHandler} type="text" name="type" value={formInfo.type}/>
                                    <p>{formErrors.type?.message}</p>
                                </p>
                                <p>
                                    <label>Description:</label>
                                    <input onChange={changeHandler} type="text" name="description" value={formInfo.description}/>
                                    <p>{formErrors.description?.message}</p>
                                </p>
                                <p>
                                    <label>Skill1:</label>
                                    <input onChange={changeHandler} type="text" name="skill1" value={formInfo.skill1}/>
                                    <p>{formErrors.skill1?.message}</p>
                                </p>
                                <p>
                                    <label>Skill2:</label>
                                    <input onChange={changeHandler} type="text" name="skill2" value={formInfo.skill2}/>
                                    <p>{formErrors.skill2?.message}</p>
                                </p>
                                <p>
                                    <label>Skill3:</label>
                                    <input onChange={changeHandler} type="text" name="skill3" value={formInfo.skill3}/>
                                    <p>{formErrors.skill3?.message}</p>
                                </p>

                            <input onChange={changeHandler} type="submit" value="Edit" />

                        </form>
            :
                    <div>
                        <h1>There is no pets</h1>
                    </div>
            }

        </div>
    );
};

export default PetFormNew;