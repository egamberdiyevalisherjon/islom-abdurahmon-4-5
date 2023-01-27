import axios from "axios";

async function searchBook(text) {
  let { data } = await axios.get(`/?q=${text}&maxResults=6&startIndex=0`);

  return data;
}

export default searchBook;
