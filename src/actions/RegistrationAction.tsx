import axios from 'axios'

// const URL = "http://192.168.1.12:5000";
const URL = "http://localhost:8080";

export const generateOtp = (mobileNumber: any, callback: any) => {
    axios.get(URL + "/user/otp?mobileNumber=" + mobileNumber)
    .then(res => {
        callback(res.data.referenceKey);
    }).catch(error => {
        alert(error);
    });
    // callback("");
};

export const validateOtp = (referenceKey: string, otp: string, callback: any) => {
    axios.get(URL + "/user/otp/validate?referenceKey=" + referenceKey + "&otp=" + otp)
    .then(res => {
        callback(res.data);
    }).catch(error => {
        alert(error);
    });
}