import React, { useState } from 'react'
import List from '../list/List';



export default function Container() {
    const [list, setList] = useState('');
    const [lists, setLists] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setLists((prev)=> [list,...prev]);
        setList('')
        console.log(event)
    };
    const handleInputChange = ({target})=>{
        const {value} = target
        setList(value)


    }
    return (
        <div>
            <div className='container'>
                <div className='input-list'>
                    <form onSubmit={handleSubmit}>
                        <label>New task:</label>
                        <input type="text" placeholder='Enter a task' value={list} onChange={handleInputChange} />
                        <button type='submit'>+</button>

                    </form>
                </div>

            </div>
            <List allLists={lists} />
        </div>

    );
}
