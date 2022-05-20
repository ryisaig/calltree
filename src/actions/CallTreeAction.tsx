import axios from 'axios'

// const URL = "http://192.168.1.12:5000";
const URL = "http://localhost:8080";

export const getPendingCallTreeList = (callback:any) => {
    axios.get(URL + "/calltree/pending", { params: {mobileNumber: "+639178238032"}})
    .then(res => {
        callback(res.data);
    });

    //callback([{_id: "001", subject: "Are you safe? - Pls. respond.", subtitle: "Ligtas ka ba? Pakisagot ang tanong.", createdDate: "03/30/2022"}])
}

export const getRespondedCallTreeList = (callback:any) => {
    axios.get(URL + "/calltree/responded", { params: {mobileNumber: "+639178238032"}})
    .then(res => {
        const calltree:any[] = [];
        res.data.forEach((data:any) => {
            calltree.push({subject: data.callTree.subject + " - " + data.response +  ( data.additionalDetails && " ( " +  data.additionalDetails + " )"), createdDate: data.callTree.createdDate});
        })
        console.log("calltree", calltree);
        callback(calltree);
    });
    // callback([{_id: "001", subject: "Are you safe? - Pls. respond", subtitle: "Ligtas ka ba? Pakisagot ang tanong.", createdDate: "03/30/2022"}])
}

export const getCallTreeDetails = (id:any, callback:any) => {
    axios.get(URL + "/calltree/pending/" + id, { params: {mobileNumber: "+639178238032"}})
    .then(res => {
        callback(res.data);
    });
    //callback({_id: "001", subject: "Are you safe? - Pls. respond", subtitle: "Ligtas ka ba? Pakisagot ang tanong.", createdDate: "03/30/2022"})

}

export const saveCallTreeResponse = (callTreeId: any, response: string, details: string, callback: any) => {
    axios.post(URL + "/calltree/respond/", {
        mobileNumber: "+639178238032",
        callTreeId: callTreeId,
        additionalDetails: details,
        response: response
    })
    .then(() => {
       callback();
    })
    // callback();
}