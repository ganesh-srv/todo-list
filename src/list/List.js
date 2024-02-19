import React from "react";

const List = (props) => {
    const temp = props.allLists;
    return (
        <ul>
            {temp.map((list) => (
                <li key={list}>
                    <div>
                        <h2>{list}</h2>
                    </div>
                </li>
                
            ))}
        </ul>
    );
};

export default List;
