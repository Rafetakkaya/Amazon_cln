import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-challenge-2cb75.cloudfunctions.net/api"//function deploy --only functions diyip firabaseye girip functiondaki link
    //"http://localhost:5001/challenge-2cb75/us-central1/api" firebase emulattor:start tan gelen
});
export default instance;