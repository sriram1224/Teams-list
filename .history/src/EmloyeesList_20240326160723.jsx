import React from 'react'

const EmployeesList = ({ employees, dispatch }) => {
    return (
        <div>
            <h1>Employees List</h1>
            {employees && employees.map(emp => (
                <div key={emp.id}>
                    <h3>{emp.first_name} {emp.last_name}</h3>
                    <p>{emp.email}</p>
                </div>
            ))}
        </div>
    );
}
export default EmployeesList;