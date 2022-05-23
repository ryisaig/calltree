import { IonList, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getPendingCallTreeList, getRespondedCallTreeList } from '../actions/CallTreeAction';
import './DefaultStyle.css';
import SockJsClient from 'react-stomp';

const CallTreeList = ({ type }) => {
  
  const [callTree, setCallTree] = useState([]);

  const SOCKET_URL = 'http://localhost:8080/ws-message';
  
  const onMessageReceived = (msg) => {
      alert("A recent call tree has been triggered.");
      getPendingCallTreeList((data) => setCallTree(data));

    }

  
  useEffect(() => {
    if(type === "pending") {
      getPendingCallTreeList((data) => setCallTree(data));
    } else if(type === "responded") {
      getRespondedCallTreeList((data) => setCallTree(data));
    } else {
      setCallTree([{id: "001", subject: "Typhoon Guidelines #TyphooneOdette", createdDate: "03/30/2022"}]);
    }
  }, []);

  return (
    <div className="container">
      <IonList>
        {
          callTree.map((callTree) => {
            let urlToRedirect = undefined;
            if(type === "pending")
             urlToRedirect = "/call-tree/pending/"+ callTree.id + "/details";
            else if(type === "informational")
             urlToRedirect = "/call-tree/informational/" + callTree.id + "/details";
            return (
              <IonItem href={urlToRedirect}>
                <IonLabel>{callTree.subject}<br/><p style={{fontSize: "12px", fontStyle: "italic"}}>{callTree.caption}</p></IonLabel>
                <span>{callTree.createdDate}</span>
              </IonItem>
            );
          })
        }
         <SockJsClient
          url={SOCKET_URL}
          topics={['/topic/message']}
          onMessage={(msg)=> onMessageReceived(msg)}
          debug={false}
        />
      </IonList>
    </div>
  );
};

export default CallTreeList;
