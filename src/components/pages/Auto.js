import React, { useState } from "react";
import DataTable from "react-data-table-component";

function Auto(){
const columns = [
    {
      name: 'Auto',
      selector: row => row.Mode,
      sortable :true
    },
    {
      name: 'Choose distance in km ',
      selector: row => row.Choose,
      sortable : true
    },
  ];
  const data = [
    { id :1,
        Mode: 'Ola',
        Choose: '<5',
        Status: 'Available',
        ServiceType: 'ordinary'
      },
      { id :2,
        Mode: 'Rapido',
        Choose: '5 - 10 km',
        Status: 'unAvailable',
        ServiceType: 'ordinary'
  
      },
      { id :3,
          Mode: 'Ola',
          Choose: '10-15km',
          Status: 'Available',
          ServiceType: 'ordinary'
      },
      { id :4,
          Mode: 'Uber',
          Choose: '15-20',
          Status: 'Available',
          ServiceType: 'ordinary'
      },
      { id :5,
          Mode: 'Rapido',
          Choose: '10-15km',
          Status: 'Available',
          ServiceType: 'ordinary'
      },
      { id :6,
          Mode: 'Ola',
          Choose: '<5',
          Status: 'UnAvailable',
          ServiceType: 'ordinary'
      },
      
    
  ];
  const [records , setRecords]=useState(data);
  function handleFilter(event){
    const newData = data.filter(row => {
        return row.name.tolowerCase().includes(event.target.value.tolowerCase())
    })
    setRecords(newData)
  }
  return (
    <div className="container mt-5">
        <div className='text-end'><input type="text"  onChange={handleFilter}/></div>
      <DataTable columns={columns} data={records} selectableRows></DataTable>
    </div>
  );
}
export default Auto;
