import React, { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/action/action";

const Add = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const add = () => {
        dispatch(addTask({ id: Math.random(), task: title, check: false }))
        setTitle("");
    }
    return (
        <div style={{ marginTop: "20px", marginBottom: "20px" ,}}>
            <InputGroup>
                <FormControl id="ajoue"
                    placeholder="Ajouter une language"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <input className="btn btn-primary"  type="submit" value="Add" onClick={add} />
                <input className="btn btn-primary" type="reset" value="Cancel" onClick={() => {
                    setTitle("")
                }} />
            </InputGroup>
        </div>
    )
}

export default Add
