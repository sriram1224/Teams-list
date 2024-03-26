import React from 'react'
import './list.css';

const EmployeesList = ({ employees, dispatch }) => {
    return (
        <div className="employees-list">
            <h1 className="header">Employees List</h1>
            {employees && employees.map(emp => (
                <div key={emp.id} className="employee-item">
                    <span className={emp.added ? "gray-text" : "black-text"}>
                        <p className="employee-info">{emp.first_name} {emp.last_name} - { emp.age} years</p>
                    </span>
                    {!emp.added && (
                        <button className="add-button" onClick={() => dispatch({ type: 'ADD', payload: emp })}>Add</button>
                    )}
                </div>
            ))}
        </div>
    );
}
export default EmployeesList;