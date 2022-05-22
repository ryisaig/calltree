import { IonItem,IonCardContent, IonCard, IonCardHeader, IonButton, IonCardTitle, IonInput, IonCardSubtitle } from '@ionic/react';
import { useState } from 'react';
import { saveUser } from '../actions/RegistrationAction';
import './DefaultStyle.css';

const UserRegistration: React.FC<any> = () => {

  const [userDetails, setUserDetails]:any = useState({}); 
  const userRegistrationCallBack = (result: any) => {
    sessionStorage.setItem("userDetails", result);
    window.location.href = "/call-tree";
  }

  return (
    <div className="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle style={{textAlign: "center"}}>User Registration</IonCardTitle>
          <br />
        </IonCardHeader>
        <IonCardContent>
          <IonItem style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0"}}>
            <IonInput placeholder="Enter full name" type='text' value={userDetails.fullName} onIonChange={(e:any) => {setUserDetails({...userDetails, fullName: e.detail.value})}}></IonInput >
          </IonItem>
          <br />
          <IonItem style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0"}}>
            <IonInput placeholder="Enter address" type='text' value={userDetails.address} onIonChange={(e:any) => {setUserDetails({...userDetails, address: e.detail.value})}}></IonInput >
          </IonItem>
          <br />
          <IonButton style={{width: "100%", height: "50px"}} onClick={() => {saveUser(userDetails, userRegistrationCallBack)}}>Register</IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default UserRegistration;
