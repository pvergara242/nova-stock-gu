import React from "react"

function Form(props){
    return(
 
      <form id="formulario" className="col s3 offset-m2 m4">
          <h4>DATOS DEL USUARIO</h4>
          <div className="row">
              <div id="docType">
                <label for="">
                    Tipo De Documento:
                </label>
                <p>
                    <label>
                        <input name="group1" className="with-gap" type="radio" value="CC" checked />
                        <span>Cedula de Ciudadanía</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" className="with-gap" type="radio" value="TI" />
                        <span>Tarjeta de Identidad</span>
                    </label>
                    </p>
                </div>
          <div id="numeroDocumento" className="input-field col s12">
              <label for="numerodoc">N° Documento: </label>
              <input name='numeroDocumento'id="numerodoc" type='Number' tabindex='1' />
          </div>

          <div id="fechaNacimiento" className="input-field col s12">
              <label for="fechaNac">Fecha de Nacimiento: </label>
              <input type="date" id="fechaNac" />
          </div>
          <div id="gen">
            <label for="">
                    Género:
                </label>
                <p>
                <label>
                    <input name="group2" className="with-gap" type="radio" value="F" checked />
                    <span>Femenino</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group2" className="with-gap" type="radio" value="M" />
                    <span>Masculino</span>
                </label>
                </p>
            </div>
          <div id="nombres" className="input-field col s12">
              <label for="nombres">Nombres: </label>
              <input name='nombres' type='text' id="nom" tabindex='1' />
          </div>

          <div id="apellidos" className="input-field col s12">
              <label for="ape">Apellidos: </label>
              <input name='apellidos' id="ape" type='text' tabindex='2' />
          </div>

          <div id="tel" className="input-field col s12">
              <label for="te">Telefono fijo: </label>
              <input name='TelefonoFijo' id="te" type='Number' tabindex='2' />
          </div>

          <div id="cel" className="input-field col s12">
              <label for="celu">Celular: </label>
              <input name='celular' id="celu" type='Number' tabindex='2' />
          </div>

          <div id="email" className="input-field col s12">
              <label for="ema">Correo: </label>
              <input name='correo' id="ema" type="email" tabindex='2' class="validate" />
              <span class="helper-text" data-error="Formato no válido" data-success="Formato válido">Ingrese email válido</span>
          </div>

          <div id="clave" className="input-field col s12">
              <label for="cla">Contraseña: </label>
              <input name='contrasena' id="cla" type='password' tabindex='2' />
          </div>
          <div id="role">
            <label for="">
                    Rol:
                </label>
                <p>
                <label>
                    <input name="group3" className="with-gap" type="radio" value="Admin" checked />
                    <span>Administrador</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group3" className="with-gap" type="radio" value="Aux" />
                    <span>Auxiliar</span>
                </label>
                </p>
            </div>
        <button 
        onClick = {props.submit}
        class="btn waves-effect waves-light" 
        type="button"
        name="action">
        Registrar
         <i class="material-icons right">send</i>
        </button>
        </div>
        </form>
 );
}

export default Form;

