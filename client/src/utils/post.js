import axios from 'axios';

async function postToRecord(type, data, updateData) {
  await axios.post(`/records/add/${type}`, data);
  updateData && updateData();
}

export default postToRecord;
