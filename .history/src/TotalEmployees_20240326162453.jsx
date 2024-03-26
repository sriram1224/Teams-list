import React from "react";

const TotalEmployees = ({ team, dispatch }) => {
    return (
        <div>
            <h1>Total Team Members</h1>
            {team&& team.map(emp => (
                <div key={emp.id}>
                    <span >
                        <p>{emp.first_name} {emp.last_name} - { emp.age}years</p>
                    </span>
                    {!emp.added && (
                        <button onClick={() => dispatch({ type: 'DELETE', payload: emp })}>Remove</button>
                    ) }
                </div>
            ))}
        </div>
    );
}
      
export default TotalEmployees;