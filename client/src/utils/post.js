import axios from 'axios';

async function postToRecord(type, data) {
    const res = await axios.post(`/records/add/${type}`, data);
    console.log(res.data);
}

export default postToRecord;
