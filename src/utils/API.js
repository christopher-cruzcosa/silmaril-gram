import axios from "axios";
const baseURL = "https://the-one-api.dev/v2/character?race=Maiar,Elf&sort=name:";
const token = "Zr4se3LDmW_C7woV5sbM";

//This function makes the api "get" call, using a search query and sort direction

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetch: function (query,sort) {
    let finalUrl;
    if(query!=="none") {
      finalUrl = baseURL + sort + "&name=/" + query + "/i";
    } else {
      finalUrl = baseURL + sort;
    };

    return axios.get(finalUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
};


