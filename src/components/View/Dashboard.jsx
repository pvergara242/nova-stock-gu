import React from "react";
import Form from "../Form.jsx";
import axios from "axios";

function Dashboard() {
    const submit = ()=>{

    const tipoDeDocumento = getRadioButtonValue("#docType");

    const numeroDocumento = document.querySelector("#numerodoc").value;
    const fechaNacimiento = document.querySelector("#fechaNac").value;
    const genero = getRadioButtonValue("#gen");
    const nombres = document.querySelector("#nom").value;
    const apellidos = document.querySelector("#ape").value;
    const telefonoFijo = document.querySelector("#te").value;
    const celular = document.querySelector("#celu").value;
    const correo = document.querySelector("#ema").value;
    const contrasena = document.querySelector("#cla").value;
    const rol= getRadioButtonValue("#role");

    const data ={
      tipoDeDocumento,
      numeroDocumento,
      fechaNacimiento,
      genero,
      nombres,
      apellidos,
      telefonoFijo,
      celular,
      correo,
      contrasena,
      rol

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
    <Form submit={submit}/>
</div>
)

}
export default Dashboard;

function getRadioButtonValue(selector) {
  var container = document.querySelector(selector);
  var inputs = container.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      return inputs[i].value;
    }
  }
}

