import { IonList, IonItem, IonLabel, IonDatetime, IonGrid, IonRow, IonCol, IonButton, IonNavLink, IonNav, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { getPendingCallTreeList, getRespondedCallTreeList } from '../actions/CallTreeAction';
import { DataTableConfig } from './CommonTypes';
import CreateCallTree from './CreateCallTree';
import DataTable from './DataTable';
import './DefaultStyle.css';

const AdminResponses: React.FC = () => {
  const table: DataTableConfig = {
    emptyMessage: "No hireables found.",
    columns: [
      {
         id: "date",
         title: "Date",
         position: "center",
         type: "string",
       },
       {
         id: "title",
         title: "Mobile Number",
         position: "center",
         type: "string",
       },
       {
         id: "totalReponses",
         title: "Name",
         position: "center",
         type: "string",
       },
       {
         id: "danger",
         title: "Address",
         position: "center",
         type: "string",
       },
       {
         id: "safe",
         title: "Response",
         position: "center",
         type: "string",
       },
       {
         id: "uncertain",
         title: "Additional info",
         position: "center",
         type: "string",
       }
   ],
    isEnumerated: true,
    isRowExpandable: false,
    actions: [
      
   ],
    data: [{
      date: "03/30/2022 14:30:04",
      title: "09178238400",
      totalReponses: "Juan Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#123 Address'
    },
    {
      date: "03/30/2022 14:30:02",
      title: "09348238000",
      totalReponses: "Jade Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#456 Address'
    },
    {
      date: "03/30/2022 14:29:21",
      title: "09178788000",
      totalReponses: "Jane Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#789 Address'
    },
    {
      date: "03/30/2022 14:29:02",
      title: "091779638000",
      totalReponses: "John Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#012 Address'
    },
    {
      date: "03/30/2022 14:20:01",
      title: "09178548000",
      totalReponses: "Jun Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#345 Address'
    },
    {
      date: "03/30/2022 14:15:08",
      title: "09190238000",
      totalReponses: "Jed Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#678 Address'
    },
    {
      date: "03/30/2022 14:10:34",
      title: "09178898000",
      totalReponses: "Jean Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#901 Address'
    },
    {
      date: "03/30/2022 13:50:04",
      title: "098238090430",
      totalReponses: "Joseph Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#234 Address'
    },
    {
      date: "03/30/2022 13:38:04",
      title: "09178238900",
      totalReponses: "Jake Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'NA',
      danger: '#567 Address'
    },
    {
      date: "03/30/2022 13:35:04",
      title: "091782385400",
      totalReponses: "Jeff Dela Cruz",
      safe: "I urgently need help!",
      uncertain: 'Ambulance needed',
      danger: '#890 Address'
    }],
    currentPage: 1,
    totalPages: 5,
    labelMapping: {}
  };

  return (
    <div className="container">
      <br/>
      <a href="" id="back" style={{marginLeft: "10px"}}><IonIcon icon={arrowBackOutline}/> Back to List</a><br/><br/>
      <CreateCallTree />
      <DataTable {...table}/>
    </div>
  );
};

export default AdminResponses;
