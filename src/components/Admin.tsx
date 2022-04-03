import { IonList, IonItem, IonLabel, IonDatetime, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getPendingCallTreeList, getRespondedCallTreeList } from '../actions/CallTreeAction';
import { DataTableConfig } from './CommonTypes';
import CreateCallTree from './CreateCallTree';
import DataTable from './DataTable';
import './DefaultStyle.css';

const Admin: React.FC = () => {
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
         title: "Title",
         position: "center",
         type: "string",
       },
       {
         id: "totalReponses",
         title: "Total Responses",
         position: "center",
         type: "string",
       },
       {
         id: "safe",
         title: "Total Safe",
         position: "center",
         type: "string",
       },
       {
         id: "uncertain",
         title: "Total Uncertain",
         position: "center",
         type: "string",
       },
       {
         id: "danger",
         title: "Total in danger",
         position: "center",
         type: "string",
       }
   ],
    isEnumerated: true,
    isRowExpandable: false,
    actions: [
      
   ],
    data: [{
      date: "03/30/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 70,
      safe: 56,
      uncertain: 11,
      danger: 3
    },
    {
      date: "03/28/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 4,
      safe: 2,
      uncertain: 1,
      danger: 1
    },
    {
      date: "03/10/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 26,
      safe: 16,
      uncertain: 5,
      danger: 5
    },
    {
      date: "03/02/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 43,
      safe: 42,
      uncertain: 1,
      danger: 0
    },
    {
      date: "02/17/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 43,
      safe: 30,
      uncertain: 3,
      danger: 10
    },
    {
      date: "02/03/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 12,
      safe: 8,
      uncertain: 3,
      danger: 1
    },
    {
      date: "01/25/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 50,
      safe: 56,
      uncertain: 11,
      danger: 3
    },
    {
      date: "01/04/2022",
      title: "Are you safe? Pls respond",
      totalReponses: 32,
      safe: 22,
      uncertain: 8,
      danger: 2
    },
    {
      date: "12/21/2021",
      title: "Are you safe? Pls respond",
      totalReponses: 46,
      safe: 41,
      uncertain: 4,
      danger: 1
    },
    {
      date: "11/30/2021",
      title: "Are you safe? Pls respond",
      totalReponses: 58,
      safe: 56,
      uncertain: 1,
      danger: 1
    }],
    currentPage: 1,
    totalPages: 5,
    labelMapping: {}
  };

  return (
    <div className="container">
      <br/>
      <IonButton id="create-calltree-trigger">Trigger Call-tree</IonButton><br/>
      <CreateCallTree />
      <DataTable {...table}/>
    </div>
  );
};

export default Admin;
