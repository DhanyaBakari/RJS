import React, { useState } from "react";
import DataTable from "react-data-table-component";

function Car(){
const columns = [
    {
      name: 'Own Car',
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
      Mode: 'Mercedes-Benz',
      Choose: '>25',
      Status: 'Available',
      ServiceType: 'High Speed'
    },
    { id :2,
      Mode: 'Ford',
      Choose: '5 - 10 km',
      Status: 'Available',
      ServiceType: 'Ordinary'

    },
    { id :3,
        Mode: 'Ford',
        Choose: '20-25km',
        Status: 'Available',
        ServiceType: 'Good'
    },
    { id :4,
        Mode: 'Suzuki',
        Choose: '>25',
        Status: 'Available',
        ServiceType: 'Good'
    },
    { id :5,
        Mode: 'Maruti',
        Choose: '10-20',
        Status: 'Available',
        ServiceType: 'Ordinary'
    },
    { id :6,
        Mode: 'Royal',
        Choose: '>25',
        Status: 'Available',
        ServiceType: 'Good Mailage'
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
export default Car;
