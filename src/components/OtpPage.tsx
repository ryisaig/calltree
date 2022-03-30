import { IonItem,IonCardContent, IonCard, IonCardHeader, IonButton, IonCardTitle, IonInput, IonCardSubtitle } from '@ionic/react';
import { useState } from 'react';
import './DefaultStyle.css';

const OtpPage: React.FC<any> = (props:any) => {
  //const mobileNumber = props.store.get('user');
  //const referenceKey = props.match.params.referenceKey;

  const [enableResendButton, setEnableResendButton] = useState(false);


  return (
    <div className="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle style={{textAlign: "center"}}>Enter OTP</IonCardTitle>
          <br />
          <IonCardSubtitle>Please check the SMS sent to your mobile number. <br /></IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0"}}>
            <IonInput placeholder="XXXXXX" type='text' maxlength={11}></IonInput >
          </IonItem>
          <br />
          <IonButton hidden={enableResendButton} style={{width: "100%", height: "50px"}} onClick={() => { window.location.href = "/user-registration/new"}}>Next</IonButton>
          <IonButton hidden={!enableResendButton} style={{width: "100%", height: "50px"}}>Resend OTP</IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default OtpPage;
