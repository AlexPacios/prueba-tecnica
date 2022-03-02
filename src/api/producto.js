import { urlApiProducts } from "../utils/constants";

export function getMovilApi(id) {
    const url = `${urlApiProducts}/${id}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
  
    return fetch(url, params)
      .then(response => {
          return response.json();
      })
      .then(result => { 
        return result;
      })
      .catch(err => {
        return err.message;
      });
  }
  