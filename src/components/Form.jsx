import React from "react"

function Form(props){
    return(
 
    <form className="col s3 offset-m2 m4">
      <h4>Crear Usuarios</h4>
      <div className="row">
        <div className="input-field col s12">
          <input id="name" type="text" className="validate"/>
          <label for="name">nombre</label>
        </div>
        <div className="input-field col s12">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name">Apellido</label>
        </div>
        <div className="input-field col s12">
          <input id="documento" type="Number" className="validate"/>
          <label for="documento">documento</label>
        </div>

        <button 
        onClick = {props.submit}
        class="btn waves-effect waves-light" 
        type="button"
         name="action">
         crear
         <i class="material-icons right">send</i>
        </button>
      </div> 
    </form>

 );
}

export default Form;

