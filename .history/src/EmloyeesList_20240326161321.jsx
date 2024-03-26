import React from 'react'

const EmployeesList = ({ employees, dispatch }) => {
    return (
        <div>
            <h1>Employees List</h1>
            {employees && employees.map(emp => (
                <div key={emp.id}>
                    <span className={emp.added ? "gray-text" : "black-text"}>
                        <p>{emp.first_name} {emp.last_name} - { emp.age}years</p>
                    </span>
                    {!emp.added ? (
                        <button onClick={() => dispatch({ type: 'ADD', payload: emp })}>Add</button>
                    ) : (
                        <button onClick={() => dispatch({ type: 'DELETE', payload: emp })}>Delete</button>
                    )}
                </div>
            ))}
        </div>
    );
}
export default EmployeesList;