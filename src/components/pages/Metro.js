import React, { useState } from "react";
import DataTable from "react-data-table-component";

function Metro(){
const columns = [
    {
      name: 'Train/Metro',
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
      Mode: 'Ranichennama',
      Choose: '>25',
      Status: 'Available',
      ServiceType: '3s'
    },
    { id :2,
      Mode: 'Janshatabdi',
      Choose: '>25 km',
      Status: 'Available',
      ServiceType: '2s,Ac'

    },
    { id :3,
        Mode: 'Siddaganga express',
        Choose: '20-25km',
        Status: 'Available',
        ServiceType: '2s, cc'
    },
    { id :4,
        Mode: 'Golgumbaz',
        Choose: '>25',
        Status: 'not Available',
        ServiceType: 'Sleeper'
    },
    { id :5,
        Mode: 'Vishwamanav Express',
        Choose: '>25',
        Status: 'Available',
        ServiceType: '2s'
    },
    
  ];
  const [records , setRecords]= useState(data);

  function handleFilter(event){
    const newData = data.filter(row => {
        return row.name.tolowerCase().includes(event.target.value.tolowerCase())
    })
    setRecords(newData)
  }
  return (
    <div className="container mt-5">
      <div className='text-end'><input type="text"  onChange={handleFilter}/></div>
      <DataTable columns={columns} data={records} selectableRows fixedHeaders pagination></DataTable>
    </div>
  );
}
export default Metro;
