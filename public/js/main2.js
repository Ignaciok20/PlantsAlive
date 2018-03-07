function main() 
{
	//var db = firebase.database(); 
	alert("Hola");
}


function addUser()
{

	var usuario = document.getElementById('user-input').value;
	//-->Obtenemos el servicio
	var database = firebase.database();

    //Operacion de escritura
        //Con ref hacemos referencia al nombre de la coleccion (tabla en sql) aunque no exista se creará
        database.ref().child('users/' + usuario).set({
	                nick_name: "Nacho",
	                surename: "Kwiatkowski"
            }); //Con ref hacemos referencia al nombre de la coleccion (tabla en sql) aunque no exista se creara
               // con el set indicamos escritura y en formato json insertamos
}

function deleteUser()
{

	var usuario = document.getElementById('user-input').value;
	//-->Obtenemos el servicio
	var database = firebase.database();

    //Operacion de escritura
        //Con ref hacemos referencia al nombre de la coleccion (tabla en sql) aunque no exista se creará
        database.ref().child('users/' + usuario).set({
	                nick_name: "Nacho",
	                surename: "Kwiatkowski"
            }); //Con ref hacemos referencia al nombre de la coleccion (tabla en sql) aunque no exista se creara
               // con el set indicamos escritura y en formato json insertamos
}

