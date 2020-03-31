import React from "react";
import Form from "../Form.jsx";
import Perfil from "../Perfil.jsx";
import axios from "axios";

function Dashboard() {
  const submit = ()=>{
    const name = document.querySelector("#name").value;
    const last_name = document.querySelector("#last_name").value;
    const documento = document.querySelector("#documento").value;

    const data ={
      name,
      last_name,
      document: documento

    };

    axios.post("https://paola34.herokuapp.com/api/v1/create/User", data)
    .then(result =>{
      console.log(result)
    })
    .catch(err =>{
      console.log(err)
    })
  };

return(
  <div className="row">
<Perfil />
<Form submit={submit}/>
</div>
)

}
export default Dashboard;

