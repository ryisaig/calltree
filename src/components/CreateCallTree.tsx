import { IonCardContent, IonModal, IonContent,  IonCardHeader, IonCardTitle, IonCard, IonInput, IonButton, IonItem, IonCheckbox} from "@ionic/react";

const CreateCallTree: React.FC = () => {
    return (
    <IonModal trigger="create-calltree-trigger">
    <IonContent>
      <IonCard>
        <IonCardHeader color="primary">
          <IonCardTitle>Trigger Call-tree</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonInput placeholder="Title" value="Are you safe? - Pls respond."/>
          <IonInput placeholder="Caption" value="Ligtas ka ba? Pakisagot ang tanong."/>
          <IonItem>
            <IonCheckbox slot="start" color="primary" />
            I'm totally safe.
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" color="warning" />
            I'm safe but uncertain.
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" color="danger" />
            I urgently need help.
          </IonItem>
          <br/>
          <IonButton>Submit</IonButton>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonModal>);
}
export default CreateCallTree;

   