import React, { useState } from "react";
import DataTable from "react-data-table-component";

function Own(){
const columns = [
    {
      name: 'Own two Wheeler',
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
      Mode: 'Active',
      Choose: '>25',
      Status: 'Available',
      ServiceType: 'Best'
    },
    { id :2,
      Mode: 'Suzuki',
      Choose: '5 - 10 km',
      Status: 'Available',
      ServiceType: 'Better'

    },
    { id :3,
        Mode: 'rapido',
        Choose: '10-15km',
        Status: 'Available',
        ServiceType: 'Good'
    }
    
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
export default Own;
