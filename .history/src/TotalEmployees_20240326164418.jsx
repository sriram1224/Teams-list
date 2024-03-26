import React from "react";
import './list.css';
const TotalEmployees = ({ team, dispatch }) => {
    const averageAge = team.reduce((total, emp) => total + emp.age, 0) / team.length;

    return (
        <div>
            <h1>Total Team Members</h1>
            {team && team.map(emp => (
                <div key={emp.id} className="emoployeeList">
                    <span>
                        <p>{emp.first_name} {emp.last_name} - {emp.age} years</p>
                    </span>
                    {!emp.added && (
                        <button onClick={() => dispatch({ type: 'DELETE', payload: emp })}>Remove</button>
                    )}
                </div>
            ))}
            <p>Average Age: {team.length > 0 ? averageAge : 0}</p>
            <button onClick={() => dispatch({ type: "Calculate_Average" })}>
                Calculate Average Age
            </button>
            <button onClick={() => dispatch({ type: "sort" })}>
                SORT BY AGE
            </button>
        </div>
    );
}

export default TotalEmployees;