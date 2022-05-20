import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonRow, IonToolbar } from "@ionic/react";
import { addOutline, chatbubblesOutline, cloudUploadOutline, createOutline, cutOutline, documentAttachOutline, expandOutline, eyeOutline, lockClosedOutline, openOutline, playBackOutline, playForwardOutline, trashBinOutline } from "ionicons/icons";
import React from "react";
import { DataTableConfig } from "./CommonTypes";
import "./DataTable.css";

const DataTable: React.FC<DataTableConfig> = (props: DataTableConfig) => {

  const maxPages = 10;
  let startPage:number = props.currentPage;
    if(props.currentPage > 9){
        startPage = props.currentPage - 4;
    }

    const pages = Array.from({length: maxPages}, (_, index) => index + startPage);
   
    return (
      <>
      <IonGrid className="data-table">
        <IonRow className="data-table-row row-header">
         
          {
            props.isEnumerated && (
              <IonCol className="enumerated">
                No.
              </IonCol>
            )
          }
          {
            props.columns.map(col => 
              <IonCol key={col.id} style={{textAlign: col.position}}>
                {col.title}
              </IonCol>
            
          )}
           {/* {
            props.actions?.length > 0 && (
              <IonCol className="actions">
                Actions
              </IonCol>
            )
          } */}
           <IonCol className="data-table-expand">
          </IonCol>
        </IonRow>
        {
          props.data && props.data.map((row, i) => {
            // row['tags'] = Array.isArray(row['tags']) ? row['tags'].join(" + ") : row['tags'];
            const realNum = i + 1;
            const dataProps = Object.entries(row);
            const dataPropChunks = [];
            for(let i = 0; i < dataProps.length; i += 4){
              const chunk = dataProps.slice(i, i + 4);
              dataPropChunks.push(chunk);
            }

            return (
              <IonAccordionGroup>
              <IonAccordion value={"" + realNum}>
              <IonRow slot="header" key={i} className="data-table-row" style={{backgroundColor: realNum % 2 === 0 ? "#f5f6f9": "none"}}>
                 
                {props.isEnumerated && (
                  <IonCol key="num" className="enumerated">
                    {realNum}
                  </IonCol>
                  )}
                  {props.columns.map(col => 
                    <IonCol key={col.id} style={{textAlign: col.position}}>
                      {row[col.id]}
                    </IonCol>
                  )}
                  {/* {props.actions?.length > 0 && (
                      <IonCol className="actions">
                        <IonIcon className="option" icon={ellipsisVerticalOutline} />
                      </IonCol>
                    )
                  } */}
                  <IonCol className="data-table-expand">
                    {/* <IonIcon icon={eyeOutline}/> */}
                </IonCol>
              </IonRow>
             
              </IonAccordion>
              </IonAccordionGroup>
            )
          })
        }
      </IonGrid>
      <IonToolbar style={{ margin: "auto", width: "fit-content"}}>
        <IonButtons slot="start">
        <IonButton disabled={startPage < 1}>
            <IonIcon icon={playBackOutline}/>
          </IonButton>
          <IonButton disabled={startPage < 1}>
            Previous
          </IonButton>
         
        </IonButtons>

        <IonButtons>
          {
           pages.map((page, i) => (
            <IonButton color={page === props.currentPage ? "primary" : ""}>
             {page + ( i === (pages.length - 1) && props.totalPages > page ? "..." : "") }

          </IonButton>
           ))
          }
        
        </IonButtons>
        
        <IonButtons slot="end">
        <IonButton disabled={props.currentPage > props.totalPages}>
            Next
          </IonButton>
         
          <IonButton disabled={props.currentPage > props.totalPages}>
            <IonIcon icon={playForwardOutline}/>
          </IonButton>
        </IonButtons>
      </IonToolbar>
      </>
    );
  };
export default DataTable;