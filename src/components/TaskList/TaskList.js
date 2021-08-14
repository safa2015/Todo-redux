import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { filterTask } from "../../redux/action/action";
import Add from '../Add/Add';
import Task from "../Task/Task";
const TaskList = () => {
    const taskList = useSelector(state => state.taskReducer.tasks);
    const [etat, setEtat] = useState("")
    const dispatch = useDispatch();

    return (
        <div style={{ width: "30%", margin: "auto" }} >
            <Add />
            <Button variant="primary " onClick={() => {
                console.log(etat)
                setEtat("")
                 dispatch(filterTask(""))
            }}>All</Button>{' '}
            <Button variant="success" onClick={() => {
                console.log(etat)
                setEtat(true)
                dispatch(filterTask(true))
            }} >Done</Button>{' '}
            <Button variant="warning" onClick={() => {
                setEtat(false)

            }}>Not Done</Button>{' '}


            {
                taskList.map((tache, index) => (tache.check === etat || etat === "") ? < Task key={index} tache={tache} /> : "")
            }
        </div>
    )
}

export default TaskList
