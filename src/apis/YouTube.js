import axios from "axios";

const KEY = "AIzaSyC9v9z8xSIvhUdCK6pfMRf37bCG8lly2ns"; // this key is MEANT to be publically available.

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});
