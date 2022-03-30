import { IonItem,IonCardContent, IonCard, IonCardHeader, IonButton, IonCardTitle, IonInput, IonCardSubtitle } from '@ionic/react';
import './DefaultStyle.css';

const UserRegistration: React.FC<any> = (props:any) => {
  return (
    <div className="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle style={{textAlign: "center"}}>User Registration</IonCardTitle>
          <br />
        </IonCardHeader>
        <IonCardContent>
          <IonItem style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0"}}>
            <IonInput placeholder="Enter full name" type='text' maxlength={11}></IonInput >
          </IonItem>
          <br />
          <IonItem style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0"}}>
            <IonInput placeholder="Enter address" type='text' maxlength={11}></IonInput >
          </IonItem>
          <br />
          <IonButton style={{width: "100%", height: "50px"}} onClick={() => {window.location.href = "/call-tree"}}>Register</IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default UserRegistration;
