import { IonList, IonItem, IonLabel, IonDatetime, IonIcon, IonCardContent, IonCard, IonCardHeader, IonRadio, IonRadioGroup, IonButton, IonTextarea, IonTitle, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { arrowBack, chevronBack, thumbsDown, thumbsUp, warning } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { getCallTreeDetails, saveCallTreeResponse } from '../actions/CallTreeAction';
import './DefaultStyle.css';

const CallTreeDetails: React.FC<any> = (props:any) => {
  
  const [callTree, setCallTree] : any = useState([]);
  const [response, setResponse] : any = useState(null);
  const [details, setDetails] : any = useState('');

  const callTreeId = props.match.params.id;

  useEffect(() => {
    getCallTreeDetails(callTreeId, (data: any) => {setCallTree(data)});
  }, []);

  const postCompletion = () => {
    alert("Your response has been submitted.");
    window.location.href = "/call-tree/pending";
  }

  return (
    <div className="container">
      <IonCard>
        <IonCardHeader>
          <IonButton href="/call-tree/pending" color="light" style={{width: "100%"}}>
            <IonIcon slot="start" icon={chevronBack} />
            Back
          </IonButton>
          <IonCardSubtitle>{callTree.createdDate}</IonCardSubtitle>
          <IonCardTitle>{callTree.subject}<br/><p style={{fontSize: "12px", fontStyle: "italic"}}>{callTree.subtitle}</p></IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0", padding: "0"}}>
            <IonRadioGroup value={response} onIonChange={e => setResponse(e.detail.value)}>
              <IonItem>
                <IonRadio slot="start" value="SAFE" />
                <IonLabel color="primary">
                I'm totally safe
                </IonLabel>
                <IonIcon icon={thumbsUp} slot="end" color="primary" />
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="UNCERTAIN" color="warning"/>
                <IonLabel color="warning">
                  I'm safe but uncertain
                </IonLabel>
                <IonIcon icon={thumbsDown} slot="end" color="warning"/>
              </IonItem>
              <IonItem>
                <IonRadio slot="start" value="NEED_HELP" color="danger"/>
                <IonLabel color="danger">
                  I urgently need help
                </IonLabel>
                <IonIcon icon={warning} slot="end" color="danger"/>
              </IonItem>
            </IonRadioGroup>
          </IonList>
          <br />
          <IonItem style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0"}}>
            <IonTextarea value={details} onIonChange={e => setDetails(e.detail.value)} placeholder="Describe your situation (Optional)"></IonTextarea >
          </IonItem>
          <br />
          <IonButton disabled={response === null} color="primary" style={{width: "100%", height: "50px"}} onClick={() => {
            saveCallTreeResponse(callTreeId, response, details, postCompletion)
          }}>Submit</IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default CallTreeDetails;
