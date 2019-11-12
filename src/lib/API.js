const API_URL ="http://localhost/www.php";
export default {
  async getRockets(){
    //first way
    //return fetch(API_URL).then( result => result.json());

    const res= await fetch(API_URL);
    return res.json();
    //.then( result => result.json());

  }

}
