import { IonItem,IonCardContent, IonCard, IonCardHeader, IonButton, IonCardTitle, IonInput } from '@ionic/react';
import { useState } from 'react';
import { generateOtp } from '../actions/RegistrationAction';
import './DefaultStyle.css';

const DefaultPage: React.FC<any> = () => {
  const [mobileNumber, setMobileNumber] : any = useState("");

  navigator.geolocation.getCurrentPosition(function(position) {
    sessionStorage.setItem("geoLocationX", '' + position.coords.latitude);
    sessionStorage.setItem("geoLocationY", '' + position.coords.longitude);
  });
  
  const callback = (otpReferenceKey:any) => {
    sessionStorage.setItem("user", mobileNumber);
    window.location.href = "/user-registration/otp/" + otpReferenceKey;
  }

  return (
    <div className="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle style={{textAlign: "center"}}>Enter Mobile Number</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem style={{borderStyle: "solid", borderWidth: "thin", borderColor: "#E0E0E0"}}>
            <IonInput value={mobileNumber} placeholder="09XXXXXXXXX" type='text' maxlength={11}  onIonChange={e => setMobileNumber(e.detail.value)}></IonInput >
          </IonItem>
          <br />
          <IonButton disabled={mobileNumber === ""} onClick={() => generateOtp(mobileNumber, callback)} style={{width: "100%", height: "50px"}}>Next</IonButton>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default DefaultPage;
