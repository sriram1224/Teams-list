import React from "react";

const TotalEmployees = ({ team, dispatch }) => {
    return (
        <div>
            <h1>Total Team Members</h1>
            {team && team.map(emp => (
                <div key={emp.id}>
                    <span >
                        <p>{emp.first_name} {emp.last_name} - { emp.age}years</p>
                    </span>
                    {!emp.added && (
                        <button onClick={() => dispatch({ type: 'DELETE', payload: emp })}>Remove</button>
                    ) }
                </div>
            ))}
             <p>Average Age: {team.length > 0 ? state.averageAge : 0}</p>
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
