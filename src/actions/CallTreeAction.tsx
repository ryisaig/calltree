import axios from 'axios'

export const getPendingCallTreeList = (callback:any) => {
    // axios.get("http://192.168.1.12:5000/calltree/pending", { params: {mobileNumber: "+639178238032"}})
    // .then(res => {
    //     callback(res.data);
    // });

    callback([{_id: "001", subject: "Are you safe? - Pls. respond", createdDate: "03/30/2022"}])
}

export const getRespondedCallTreeList = (callback:any) => {
    // axios.get("http://192.168.1.12:5000/calltree/responded", { params: {mobileNumber: "+639178238032"}})
    // .then(res => {
    //     const calltree:any[] = [];
    //     res.data.forEach((data:any) => {
    //         calltree.push({subject: data.callTree.subject + " - " + data.response +  ( data.additionalDetails && " ( " +  data.additionalDetails + " )"), createdDate: data.callTree.createdDate});
    //     })
    //     console.log("calltree", calltree);
    //     callback(calltree);
    // });
    callback([{_id: "001", subject: "Are you safe? - Pls. respond", createdDate: "03/30/2022"}])
}

export const getCallTreeDetails = (id:any, callback:any) => {
    axios.get("http://192.168.1.12:5000/calltree/pending/" + id, { params: {mobileNumber: "+639178238032"}})
    .then(res => {
        callback(res.data);
    });
}

export const saveCallTreeResponse = (callTreeId: any, response: string, details: string, callback: any) => {
    // axios.post("http://192.168.1.12:5000/calltree/respond/", {
    //     mobileNumber: "+639178238032",
    //     callTreeId: callTreeId,
    //     additionalDetails: details,
    //     response: response
    // })
    // .then(() => {
    //    callback();
    // })
    callback();
}