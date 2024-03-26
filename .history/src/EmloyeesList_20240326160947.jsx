import React from 'react'

const EmployeesList = ({ employees, dispatch }) => {
    return (
        <div>
            <h1>Employees List</h1>
            {employees && employees.map(emp => (
                <div key={emp.id}>
                    {employee.added && }
                </div>
            ))}
        </div>
    );
}
export default EmployeesList;