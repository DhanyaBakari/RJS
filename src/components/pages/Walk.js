import React, { useState } from "react";
import DataTable from "react-data-table-component";

function Walk(){
const columns = [
    {
      name: 'Walk?Bicycle',
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
      Mode: 'Walk',
      Choose: '<5',
      Status: 'Available',
      
    },
    { id :2,
      Mode: 'Bicycle',
      Choose: '5 - 10 km',
      Status: 'Available',
      
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
export default Walk;
