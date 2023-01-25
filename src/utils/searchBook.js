import axios from "axios";

async function searchBook(text) {
  let { data } = await axios.get(`/?q=${text}&maxResults=6`);

  return data;
}

export default searchBook;
