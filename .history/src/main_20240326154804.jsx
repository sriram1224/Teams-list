import React from 'react'
import { useReducer } from 'react';
import EmployeesList from './EmloyeesList';

const employees=[{"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
{"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29},
{"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69},
{"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31},
{"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32},
{"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26},
{"id":7,"first_name":"Minnaminnie","last_name":"Fransseni","email":"mfransseni6@aboutads.info","gender":"Agender","age":52},
{"id":8,"first_name":"Fernando","last_name":"Pagon","email":"fpagon7@blogs.com","gender":"Male","age":40},
{"id":9,"first_name":"Tiphanie","last_name":"Fenny","email":"tfenny8@sakura.ne.jp","gender":"Female","age":52},
{"id":10,"first_name":"Nerti","last_name":"Try","email":"ntry9@shareasale.com","gender":"Female","age":43},
{"id":11,"first_name":"Abagael","last_name":"Beadell","email":"abeadella@unc.edu","gender":"Female","age":76},
{"id":12,"first_name":"Morten","last_name":"McNamee","email":"mmcnameeb@sun.com","gender":"Male","age":38},
{"id":13,"first_name":"Domenico","last_name":"Shearman","email":"dshearmanc@seesaa.net","gender":"Male","age":66},
{"id":14,"first_name":"Rodolphe","last_name":"Bittlestone","email":"rbittlestoned@51.la","gender":"Male","age":33},
{"id":15,"first_name":"Merv","last_name":"Watterson","email":"mwattersone@storify.com","gender":"Male","age":37},
{"id":16,"first_name":"Betty","last_name":"Simm","email":"bsimmf@engadget.com","gender":"Female","age":26},
{"id":17,"first_name":"Rafaellle","last_name":"Brighouse","email":"rbrighouseg@vinaora.com","gender":"Male","age":43},
{"id":18,"first_name":"Sibby","last_name":"Meanwell","email":"smeanwellh@independent.co.uk","gender":"Female","age":66},
{"id":19,"first_name":"Ricky","last_name":"Sissland","email":"rsisslandi@google.it","gender":"Male","age":76},
{"id":20,"first_name":"Sauveur","last_name":"Hessenthaler","email":"shessenthalerj@ocn.ne.jp","gender":"Male","age":48},
{"id":21,"first_name":"Carmela","last_name":"Bucksey","email":"cbuckseyk@acquirethisname.com","gender":"Female","age":22},
{"id":22,"first_name":"Nydia","last_name":"Folke","email":"nfolkel@disqus.com","gender":"Female","age":68},
{"id":23,"first_name":"Asia","last_name":"Boake","email":"aboakem@1und1.de","gender":"Female","age":39}]
function Main() {
   
  const [state, dispatch] = useReducer(reducer, employees);
  function reducer(state, action){
    switch(action.type){
      case 'ADD':
        return {
          ...state,
          employees: state.employees.map(emp => emp.id === action.payload.id ? { ...emp, added: true } : emp),

          team: [...state.team, action.payload]
          
        };
      case 'DELETE':
        
        return state.filter(emp => emp.id !== action.payload ? { ...emp, added: false } : emp);
      case 'Calculate_Avarege':
        return state.reduce((acc, emp) => acc + emp.age, 0) / state.length;
      case 'sort':
        return {
          ...state,
          employees:
        }
      default:  
        return state;
    }
  }
  return (
    <div>
        
          
      <EmployeesList />
      
    </div>
  )
}
export default Main;