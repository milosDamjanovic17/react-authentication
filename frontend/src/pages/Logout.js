import { redirect } from "react-router-dom";

export function action () {

   localStorage.removeItem('token'); // remove a token from existing session and redirect user to path '/'
   localStorage.removeItem('expiration');
   return redirect('/');
}