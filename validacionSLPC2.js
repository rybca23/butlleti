// IMPORTANTE: PONER AQUI SIEMPRE EL ID_RECURSO DEL CAMPUS
// *********************************************************************
    var IdRecurso = "70036"
  // *********************************************************************

// PARAMETROS NULOS POR DEFECTO. CAMBIAR SOLO PARA CAMPUS PERSONALIZADOS
// *********************************************************************
    var IdCurso = "" //despres crido altres funcions per cursos, com es projecte, en blanc
    var IdGrupo = ""
  
// *********************************************************************

// URLs FIJAS DEL PORTAL (MODIFICAR SOLO SI CAMBIA LA IP O EL PUERTO)
    URL_GenerarMatricula = "https://rybca.online/asp/altaonline/validacion124.asp"
// *********************************************************************  

function Matricular(){
  window.location = URL_GenerarMatricula;
}


function NombreCampo(campo){
var nom;
nom=campo.name;
if( campo.name=="Password" || campo.name=="Password1"){
  nom="Password";}
if (campo.name=="Apellido1"){
  nom="1er apellido";}
if (campo.name=="Apellido2"){
  nom="2do apellido";}
return nom;
}

function isExisting(obj)
{  
  return typeof(obj)!='undefined';
}

function IsEmpty(campo){
var name;
name=NombreCampo(campo);
if (campo.value == "")
{
alert (name + " debe tener un valor.");
campo.focus();
return true;
}                                       
else 
{
return false;
}   
}
     
function Texto(campo,LongMax, LongMin)
{
var name;
name=NombreCampo(campo);
if  ( LongMin > 0 && campo.value.length < LongMin ) {
    alert(name + " no debe ser menor de " + LongMin + " caracteres");
    campo.focus();
    return false;
    }
if  ( campo.value.length > LongMax ) {
    alert(campo.name + " no debe exceder de " + LongMax + " caracteres");
    campo.focus();
    return false;
    }
else{
  return true;
  }

}
     
   
     
function isDate(sDate) {
   var re = /^\d{2}\/\d{2}\/\d{4}$/
   if (re.test(sDate)) {
      var dArr = sDate.split("/");
      var d = new Date(dArr[1]+"/"+dArr[0]+"/"+dArr[2]);
      
      return d.getDate() == dArr[0] && d.getMonth() + 1 == dArr[1] && d.getFullYear() == dArr[2];
   }
   else {
      return false;
   }
}
  function CambiaOcupacion2(frm){
 if(frm.rbOcupacion2.checked){
 		frm.Ocupacion2.value = frm.rbOcupacion2.value;
 }
 else {
 		frm.Ocupacion2.value="";
 }
 return true;
}

//-----

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

//+++++

function verifyUser(txt){
var status; 
var txtRegEx = /^[a-zA-Z0-9_-]+$/i;
     if (txt.search(txtRegEx) == -1) {
           alert("El campo Usuario tiene caracteres no validos");
          status = false;     
     }
     else {
          status = true;
     }
     return status;
}     

function verifyPassword(txt){
var status; 
var txtRegEx = /^[a-zA-Z0-9]+$/i;
     if (txt.search(txtRegEx) == -1) {
           alert("El campo ContraseÃ±a tiene caracteres no validos");
          status = false;     
     }
     else {
          status = true;
     }
     return status;
}     

function Validar(frm){



  
  if(IsEmpty(frm.Nombre) || !Texto(frm.Nombre,20,0)){    
      return false;
  }

  if(IsEmpty(frm.Apellido1) || !Texto(frm.Apellido1,50,0)){    
      return false;
  }  
  
 

if(IsEmpty(frm.NIF) || !Texto(frm.NIF,50,0)){    
      return false;
  
  }

if(isExisting(frm.Direccion)){
  if(IsEmpty(frm.Direccion) || !Texto(frm.Direccion,50,0)){    
      return false;
  
  }
}


  if(IsEmpty(frm.Ciudad) || !Texto(frm.Ciudad,50,0)){    
      return false;
  
  }

  if(IsEmpty(frm.CodigoPostal) || !Texto(frm.CodigoPostal,5,0)){    
      return false;
  }

  
  if(isExisting(frm.Provincia)){
  if(IsEmpty(frm.Provincia) || !Texto(frm.Provincia,50,0)){    
      return false;
  
  }
}
  
 
  
  if(IsEmpty(frm.Telefono) ||!Texto(frm.Telefono,15,0)){    
      return false;
  }
  
 
  if(IsEmpty(frm.CentroTrabajo) || !Texto(frm.CentroTrabajo,50,0)){    
      return false;
  }
  
  if(IsEmpty(frm.Especialidad) || !Texto(frm.Especialidad,50,0)){    
      return false;
  }
  
  
  


  
if(IsEmpty(frm.Usuario) || !Texto(frm.Usuario,15,6)){    
      return false;
  }
  else {
    if (!verifyUser(frm.Usuario.value)) {
      frm.Usuario.focus();
      return false;
    }
  }  
  
  if(IsEmpty(frm.Password) || !Texto(frm.Password,10,6)){    
      return false;
  }
  else {
    if (!verifyPassword(frm.Password.value)) {
      frm.Password.focus();
      return false;
    }
  }  
  
  if(IsEmpty(frm.Password1) || !Texto(frm.Password1,10,6)){    
      return false;
  }
  else {
    if (!verifyPassword(frm.Password1.value)) {
      frm.Password1.focus();
      return false;
    }
  }    
  
  if(frm.Password.value != frm.Password1.value){    
      alert("Las contraseÃ±as son diferentes.");
      return false;
  }
	if(frm.Email.value != frm.Email1.value){    
      		alert("Las direcciones de e-mail son diferentes.");
      		return false;
  }

	if  (frm.LOPD.checked == 0){		
			alert("Debe aceptar las condiciones de privacidad par acceder al curso");
			frm.LOPD.focus();
			return false;
	}



frm.Recurso.value = IdRecurso;
frm.Curso.value = IdCurso;
frm.Grupo.value = IdGrupo;
frm.Campo1.value = frm.CentroTrabajo.value;


frm.Campo3.value = frm.Especialidad.value;
frm.action = URL_GenerarMatricula;
frm.submit();
return true;
}
