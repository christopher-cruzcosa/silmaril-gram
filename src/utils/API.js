import axios from "axios";
const URL = "https://the-one-api.dev/v2/character?name&race=Maiar,Elf";
const token = "Zr4se3LDmW_C7woV5sbM";



// fetch: function () {
//   return axios.get(URL, {
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
// };

// export default fetch;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetch: function () {
    return axios.get(URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
};


