import { IonList, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getPendingCallTreeList, getRespondedCallTreeList } from '../actions/CallTreeAction';
import './DefaultStyle.css';

interface ContainerProps {
  type: string;
}

const CallTreeList: React.FC<ContainerProps> = ({ type }) => {
  
  const [callTree, setCallTree] = useState([]);
  
  useEffect(() => {
    if(type === "pending") {
      getPendingCallTreeList((data:any) => setCallTree(data));
    } else {
      getRespondedCallTreeList((data:any) => setCallTree(data));
    }
  }, []);

  return (
    <div className="container">
      <IonList>
        {
          callTree.map((callTree:any) => {
            return (
              <IonItem href={type === "pending" ? "/call-tree/pending/"  + callTree._id + "/details" : undefined}>
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
