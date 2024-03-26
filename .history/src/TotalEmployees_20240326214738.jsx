import React from "react";


const TotalEmployees = ({ team, dispatch }) => {
    const averageAge = team.reduce((total, emp) => total + emp.age, 0) / team.length;

    return (
        <div className="total-employees">
            <h1 className="header">Total Team Members</h1>
            {team && team.map(emp => (
                <div key={emp.id} className="employee-list">
                    <span className="employee-info">
                        <p>{emp.first_name} {emp.last_name} - {emp.age} years</p>
                    </span>
                    {!emp.added && (
                        <button className="remove-button" onClick={() => dispatch({ type: 'DELETE', payload: emp })}>Remove</button>
                    )}
                </div>
            ))}
            <p className="average-age">Average Age: {team.length > 0 ? averageAge : 0}</p>
            <button className="average-button" onClick={() => dispatch({ type: "Calculate_Average" })}>
                Calculate Average Age
            </button>
            <button className="sort-button" onClick={() => dispatch({ type: "sort" })}>
                SORT BY AGE
            </button>
        </div>
    );
}

export default TotalEmployees;