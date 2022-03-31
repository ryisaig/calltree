import { IonList, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getPendingCallTreeList, getRespondedCallTreeList } from '../actions/CallTreeAction';
import './DefaultStyle.css';

interface ContainerProps {
  type: string;
}

const CallTreeList: React.FC<ContainerProps> = ({ type }) => {
  
  const [callTree, setCallTree]:any[] = useState([]);
  
  useEffect(() => {
    if(type === "pending") {
      getPendingCallTreeList((data:any) => setCallTree(data));
    } else if(type === "responded") {
      getRespondedCallTreeList((data:any) => setCallTree(data));
    } else {
      setCallTree([{_id: "001", subject: "Typhoon Guidelines #TyphooneOdette", createdDate: "03/30/2022"}]);
    }
  }, []);

  return (
    <div className="container">
      <IonList>
        {
          callTree.map((callTree:any) => {
            let urlToRedirect = undefined;
            if(type === "pending")
             urlToRedirect = "/call-tree/pending/"+ callTree._id + "/details";
            else if(type === "informational")
             urlToRedirect = "/call-tree/informational/" + callTree._id + "/details";
            return (
              <IonItem href={urlToRedirect}>
                <IonLabel>{callTree.subject}</IonLabel>
                <span>{callTree.createdDate}</span>
              </IonItem>
            );
          })
        }
      </IonList>
    </div>
  );
};

export default CallTreeList;
