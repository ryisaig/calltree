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
                    <IonIcon icon={eyeOutline}/>
                </IonCol>
              </IonRow>
              <IonRow slot="content" style={{backgroundColor: realNum % 2 === 0 ? "#f5f6f9": "none", padding: "20px"}}>
                <IonCol>
                  <IonGrid>
                    {
                      dataPropChunks.map(chunk => {
                        return (
                        <IonRow>
                          {
                            chunk.map((prop:any)=> {
                              return <IonCol><b>{props.labelMapping[prop[0]]} : </b> {prop[1]}</IonCol>
                            })
                          }
                        </IonRow>
                      )
                      })
                    }
                  </IonGrid>
                  <IonGrid>
                  <IonRow>
                    <IonCol>
                      {/* <IonToolbar> */}
                      <IonButtons style={{margin: "auto", width: "fit-content"}}>
                        <IonButton color="primary">
                          <IonIcon slot="start" icon={openOutline}/>
                           View complete profile
                        </IonButton>
                        <IonButton>
                          <IonIcon slot="start" icon={createOutline}/>
                           Quick profile update
                        </IonButton>
                        <IonButton>
                          <IonIcon slot="start" icon={cloudUploadOutline}/>
                           Upload updated CV
                        </IonButton>
                        <IonButton>
                          <IonIcon slot="start" icon={documentAttachOutline}/>
                           Endorse to a job
                        </IonButton>
                        </IonButtons>
                      {/* </IonToolbar> */}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {/* <IonToolbar> */}
                      <IonButtons style={{margin: "auto", width: "fit-content"}}>
                        <IonButton>
                          <IonIcon slot="start" icon={chatbubblesOutline}/>
                           Log an interview note
                        </IonButton>
                        <IonButton>
                          <IonIcon slot="start" icon={cutOutline}/>
                           Move to inactive file
                        </IonButton>
                        <IonButton>
                          <IonIcon slot="start" icon={lockClosedOutline}/>
                           Move to protected file
                        </IonButton>
                        <IonButton color="danger">
                          <IonIcon slot="start" icon={trashBinOutline}/>
                           Request for deletion
                        </IonButton>
                        </IonButtons>
                      {/* </IonToolbar> */}
                    </IonCol>
                  </IonRow>
                  </IonGrid>
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