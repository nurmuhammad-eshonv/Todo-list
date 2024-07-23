import React from "react";
import { FaTrash } from "react-icons/fa";
import "./List.css";

function List(props) {
  return (
    <div>
      {props.list.map((itemObj, index) => (
        <div key={index} className="list-wr">
          <p>{itemObj.item}</p>
          <button onClick={() => props.onDelete(index)} className="del-btn">
            <FaTrash />
          </button>
        </div>
      ))}
     
    </div>
  );
}

export default List;
