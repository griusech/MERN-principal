import React, { useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const NoteList = (props) => {

    const [task, setTask] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/tasks')
        .then(
          res => setTask(res.data)
        
          )
    }, [])

    const getTasks = () => {
        axios.get('http://localhost:4000/api/tasks')
        .then( res => setTask(res.data) )
    }

    const deleteTask = async id => {
        await axios.delete(`http://localhost:4000/api/tasks/${id}`);
        getTasks();
     }


    return (
        <div className="row">
            {
                task.map(item => (
                <div 
                key={item._id}

                className="card text-center bg-dark text-white m-4">
                    <div className="card-body">
                        <h5 className="card-title">
                            {item.title}
                        </h5>
                        <p className="card-text">
                            {item.description}
                        </p>
                        <button 
                        className="btn btn-warning m-2"
                        onClick={() => deleteTask(item._id)}
                        >
                            Delete
                        </button>
                        <Link to={'/edit/' + item._id} 
                        className="btn btn-primary"
                        >

                            Edit
                        </Link>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default NoteList
