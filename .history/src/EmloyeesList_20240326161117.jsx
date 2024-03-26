import React from 'react'

const EmployeesList = ({ employees, dispatch }) => {
    return (
        <div>
            <h1>Employees List</h1>
            {employees && employees.map(emp => (
                <div key={emp.id}>
                    <span className={emp.added ? "gray-text" : "black-text"} />
                    
                </div>
            ))}
        </div>
    );
}
export default EmployeesList;