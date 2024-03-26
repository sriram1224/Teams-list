import React, { useReducer } from 'react';
import EmployeesList from './EmloyeesList';
import TotalEmployees from './TotalEmployees';

const employees = [
  {"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
  // Your employee data goes here
  {"id":23,"first_name":"Asia","last_name":"Boake","email":"aboakem@1und1.de","gender":"Female","age":39}
];

function Main() {
  const [state, dispatch] = useReducer(reducer, { employees: employees, team: [] });

  function reducer(state, action) {
    switch(action.type) {
      case 'ADD':
        return {
          ...state,
          employees: state.employees.map(emp => emp.id === action.payload.id ? { ...emp, added: true } : emp),
          team: [...state.team, action.payload]
        };
      case 'DELETE':
        return {
          ...state,
          employees: state.employees.map(emp => emp.id === action.payload.id ? { ...emp, added: false } : emp),
          team: state.team.filter(emp => emp.id !== action.payload.id)
        };
      case 'Calculate_Average':
        const totalAge = state.team.reduce((acc, emp) => acc + emp.age, 0);
        const averageAge = totalAge / state.team.length || 0;
        return {
          ...state,
          averageAge: averageAge
        };
      case 'sort':
        return {
          ...state,
          team: state.team.sort((a, b) => a.age - b.age),
        };
      default:  
        return state;
    }
  }

  return (
    <div>
      <EmployeesList employees={state.employees} dispatch={dispatch} />
      <TotalEmployees employees={state.team} dispatch={dispatch} />
    </div>
  );
}

export default Main;
