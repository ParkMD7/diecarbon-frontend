// dependencies
import axios from "axios";

// user files
import { ROOT_URL, SEND_EMAIL } from '../constants';


export const sendEmailToRep = (userID, user_email_message) => {

  const request = axios.post(`${ROOT_URL}/mailer`, {
    id: userID,
    message: user_email_message
  })
  //debugger

  return {
    type: SEND_EMAIL,
    payload: request
  };
}
