import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const PetFormNew = (props) => {

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
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    // Change Handler
    const changeHandler = (e) =>{
        console.log("changing the form")
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        
        axios.post("http://localhost:8000/api/pets/make", formInfo)
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
            <h3> Know a pet needing a home? </h3>
            
            <form onSubmit= {submitHandler}>
                    <p>
                        <label>Pet Name:</label>
                        <input onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                        <p>{formErrors.name?.message}</p>
                    </p>
                    <p>
                        <label>Pet Type:</label>
                        <input onChange={changeHandler} type="text" name="type" value={formInfo.type}/>
                        <p>{formErrors.type?.message}</p>
                    </p>
                    <p>
                        <label>Pet Description:</label>
                        <input onChange={changeHandler} type="text" name="description" value={formInfo.description}/>
                        <p>{formErrors.description?.message}</p>
                    </p>
                    <h3> Skills (optional): </h3>
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

                <input onChange={changeHandler} type="submit" value="Add Pet" />

            </form>
        </div>
    );
};

export default PetFormNew;