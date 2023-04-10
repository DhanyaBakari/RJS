import React, { useState } from "react";
import DataTable from "react-data-table-component";

function Bus(){
const columns = [
    {
      name: 'Bus-Route Type 1',
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
      Mode: 'Rajhans',
      Choose: '<5',
      Status: 'Available',
      ServiceType: 'Non-AC'
    },
    { id :2,
      Mode: 'KSTRC',
      Choose: '5 - 10 km',
      Status: 'Available',
      ServiceType: 'Non-AC'

    },
    { id :3,
        Mode: 'Rajhans',
        Choose: '20-25km',
        Status: 'Available',
        ServiceType: 'AC'
    },
    { id :4,
        Mode: 'VRL',
        Choose: '>25',
        Status: 'Available',
        ServiceType: 'Sleeper'
    },
    { id :5,
        Mode: 'Airvata',
        Choose: '>25',
        Status: 'Available',
        ServiceType: 'AC'
    },
    { id :6,
        Mode: 'Rajhans',
        Choose: '<5',
        Status: 'Available',
        ServiceType: 'Non-AC'
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
export default Bus;
