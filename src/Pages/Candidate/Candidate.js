
import * as React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import {Link} from "react-router-dom";

import "./Candidate.css";


export const Candidate = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userName', headerName: 'User Name', width: 200, renderCell:(params)=>{
      return(
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=''/>
          {params.row.username}
        </div>
      )
    }},
    {field: 'email', headerName: 'Email', width: 200 },
    { field: 'vacancy', headerName: 'Vacancy', width: 180 },
    { field: 'status', 
    headerName: 'Applicant status', width: 180,
  renderCell: (params)=>{
    
    return(
      <>
      <Link to ={"/user/"+params.row.id}>
      <button className="userListView">View</button>
      </Link>
      </>

      
    );
 },
 },
  ];
  
  const rows = [
    { id: 1, userName:"John Smith" ,avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", email: 'john99@gmail.com', vacancy:'Business Analyst'},
    { id: 2, userName:'Cersei Lannister', avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", email: 'Cersei@gmail.com', vacancy:'Business Analyst'},
    { id: 3, userName:'Jaime Lannister', avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",email: 'Jaime@gmail.com', vacancy:' Business Analyst'},
    { id: 4, userName:'Arya Stark',avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", email: 'arya@gmail.com', vacancy:'Business Analyst'},
    { id: 5, userName:'Daenerys Targaryen', avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",email: 'daenerys@gmail.com', vacancy:'Business Analyst'},
    { id: 6, userName:'Harvey Roxie',avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", email: 'harvey@gmail.com', vacancy:'Business Analyst'},
    { id: 7, userName:'Ferrara Clifford',avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", email: 'ferrara@gmail.com', vacancy:'Business Analyst'},
    { id: 8, userName:'Rossini Frances',avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", email: 'rossini@gmail.com', vacancy:'Business Analyst'}

  ];
  
  return(
    <div style={{ height: 400, width: '100%', backgroundColor:'white' }}>
      <DataGrid
        rows={rows} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div>

  )
  
}