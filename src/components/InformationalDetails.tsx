import { IonList, IonItem, IonLabel, IonDatetime, IonIcon, IonCardContent, IonCard, IonCardHeader, IonRadio, IonRadioGroup, IonButton, IonTextarea, IonTitle, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { arrowBack, chevronBack, thumbsDown, thumbsUp, warning } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { getCallTreeDetails, saveCallTreeResponse } from '../actions/CallTreeAction';
import './DefaultStyle.css';

const InformationalDetails: React.FC<any> = (props:any) => {
  
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
        
        </IonCardHeader>
        <IonCardContent>
          <div style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0", padding: "20px"}}>
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/38639/typhoon-gale-clipart-xl.png"/>
            <br /><br/>
              <div style={{textAlign: "left"}}><span style={{fontWeight: "bold"}}><u>If a Typhoon is likely in your area, you should:</u></span><br /><ul><li><span color="#5040ae">Listen to the radio or TV for information.<br /></span></li><li><span color="#5040ae">Secure your home, close storm shutters and secure outdoor objects or bring them indoors.<br /></span></li><li><span color="#5040ae">Turn off utilities (electricity) if instructed to do so. Otherwise, turn the refrigerator thermostat to its coldest setting and keep its doors closed.<br /></span></li>
              <li><span color="#5040ae">Ensure a supply of water for sanitary purpose such as cleaning and flushing toilets. Fill the bathtub and other larger containers with water.<br /></span></li><li><span color="#5040ae">Find out how to keep food safe during and after and emergency.</span><br /></li></ul><br />
              
                </div>
          </div>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default InformationalDetails;
