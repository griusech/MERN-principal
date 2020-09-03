import React, { useState } from 'react'
import mern from '../mern.jpg'
import axios from 'axios'


const CreateUser = () => {
    
    const [titleTask, setTitleTask] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const urlApi = 'http://localhost:4000/api/tasks';
    //console.log(props.match.params)
    
    const register = async e =>{
        const newTask = {
            title: titleTask,
            description: taskDescription,
        }
        await axios.post(urlApi, newTask)
        e.preventDefault();
    }
    
    
    return (
        <>
        <div className="row">
            <div className="col-md-5 text-center">
                <div className="card card-body bg-info mt-3">
                    <h3>Create new Task</h3>
                    <form onSubmit={register}>
                        <div className="form-group">
                            <input 
                            type="text"
                            placeholder="Task"
                            className="form-control m-2"
                            onChange={e => setTitleTask(e.target.value)}
                            value={titleTask}
                            />

                            <input 
                            type="text"
                            placeholder="Description"
                            className="form-control m-2"
                            onChange={e => setTaskDescription(e.target.value)}
                            value={taskDescription}
                            />
                        </div>
                        <button 
                        type="submit"    
                        className="btn btn-secondary"
                        >Add</button>
                    </form>
                </div>
            </div>
            <div className="col-md-7 mt-2 text-center">
                <img src={mern} width="500" height="250" />
            </div>
        </div>
        </>
    )
}

export default CreateUser
