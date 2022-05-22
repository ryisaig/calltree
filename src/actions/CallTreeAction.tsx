import axios from 'axios'

const URL = "http://localhost:8080";

export const getPendingCallTreeList = (callback:any) => {
    axios.get(URL + "/calltree/pending", { params: {mobileNumber: sessionStorage.getItem("user")}})
    .then(res => {
        callback(res.data);
    });
}

export const getRespondedCallTreeList = (callback:any) => {
    axios.get(URL + "/calltree/responded", { params: {mobileNumber: sessionStorage.getItem("user")}})
    .then(res => {
        const calltree:any[] = [];
        res.data.forEach((data:any) => {
            calltree.push({subject: data.callTree.subject + " - " + data.response +  ( data.additionalDetails && " ( " +  data.additionalDetails + " )"), createdDate: data.callTree.createdDate});
        })
        console.log("calltree", calltree);
        callback(calltree);
    });
}

export const getCallTreeDetails = (id:any, callback:any) => {
    axios.get(URL + "/calltree/pending/" + id, { params: {mobileNumber: sessionStorage.getItem("user")}})
    .then(res => {
        callback(res.data);
    });
}

export const saveCallTreeResponse = (callTreeId: any, response: string, details: string, callback: any) => {
    axios.post(URL + "/calltree/respond/", {
        mobileNumber: sessionStorage.getItem("user"),
        callTreeId: callTreeId,
        additionalDetails: details,
        response: response
    })
    .then(() => {
       callback();
    })
}