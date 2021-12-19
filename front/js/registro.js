$( document ).ready(function() {
    console.log( "Estas en la página Registro" );
    init();
});
function init()
{
	
}

function registrarUsuario(){
	
    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());
    var password = $.trim($("#password").val());
	var password_r = $.trim($("#pwr_r").val());
    

    let myData = {
		
		 		name:name,
                email:email,
                password:password
               
    }
    let dataToSend = JSON.stringify(myData);

                ///// Se crea usuario
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "http://localhost:8080/api/user/new",
                    data: dataToSend,
                    datatype: "json",
                    cache: false,
                    timeout: 600000,
                    success: function(respuesta) {
                        location.reload();
						
						
                    },
                    error: function(e) {
                        alert("No FUNCIONA");
                    },
                    done: function(e) {
                        alert("No FUNCIONA");
                    }
                });

}


function login()
{
    console.log("Mi boton Login Funciona");
    var usuarioLogin = $.trim($("#email").val());
    var usuarioPassword = $.trim($("#pwd").val());
   console.log("usuario= " + usuarioLogin);
    console.log("Password= " + usuarioPassword);
    if (usuarioLogin != "" && usuarioPassword != "") {

        $.ajax({
            url: "http://localhost:8080/api/user/" + usuarioLogin + "/" + usuarioPassword,
            type: "GET",
            datatype: "JSON",
            success: function(respuesta) {
                //console.log(respuesta);
                console.log("id " + respuesta.id);
                if (respuesta.id === null) {
                    alert("El usuario no existe o el password es incorrecto");
                } else {
                    console.log("ENTRO");
                    validarperfil(respuesta.type);
                    sessionStorage.setItem('miUser', JSON.stringify(respuesta));
					location.href='perfilAdmin.html';

                }
            }
        });
    } else { alert("Ningun campo debe estar vacio") }

}

function validarperfil(perfil) {
    switch (perfil) {
        case 'ADM':
            console.log('Perfil Admin');
            window.location.href = "perfilAdmin.html";
            break;
        case 'COORD':
            console.log('Perfil Coordinador');
            break;
        case 'ASE':
            console.log('Perfil Asesor');
            break;
    }


}
$(document).on("click", ".btnLogin", function() {
    login();
	
});

$(document).on("click",".btnRegistrarse",function() {
    registrarUsuario();
});