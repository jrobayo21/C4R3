var d_user;
var recuperarJson;
var etiquetaContador={};

$(document).ready(function() {
    console.log("Estas en la página de perfil Asesor");
    init();
});

function init() {
    d_user = JSON.parse(sessionStorage.getItem('miUser'));
    $(".miNombreUsuario").html(d_user.name);
    traerInformacion();
   
}
function traerInformacion() {

    $.ajax({
            method: "GET",
            url: "http://localhost:8080/api/cookware/all"
        })
        .done(
            function(respuesta) {
                //alert("Datos"+respuesta);
                recuperarJson = respuesta;
                let myTable="<table class= 'misCantidades'>";
                for(i=0;i<respuesta.length;i++){
                    myTable+="<tr>";
                    
                    myTable+="<td>"+respuesta[i].reference+"</td>";
                    myTable+="<td>"+respuesta[i].brand+"</td>";
                    myTable+="<td>"+respuesta[i].category+"</td>";
					myTable+="<td>"+respuesta[i].materiales+"</td>";
					myTable+="<td>"+respuesta[i].dimensiones+"</td>";
					myTable+="<td>"+respuesta[i].description+"</td>";
                    
					myTable+="<td>"+respuesta[i].availability+"</td>";
                    myTable+="<td>"+respuesta[i].price+"</td>";
                    myTable+="<td>"+respuesta[i].quantity+"</td>";
					myTable+="<td>"+respuesta[i].photography+"</td>";
                    
                    myTable+="<td> <input type='number' id='micantidad"+i+"'></input> </td>";
                   
                    myTable+="</tr>";
                }
                myTable+="</table>";
                $(".adminProducto").html(myTable);
            
                
            }
        )
        .fail(
            function() {
                //alert("Error servidor");
            }
        )
        .always(
            function() {
                //alert("siempre ejecutandose")
            }
        );

}

function agregarOrdenes(){
    var id = $.trim($("#id").val());
    var date=new Date();
    llenarProductos();
    let dataToSend={
        id:id,
        registerDay:date.toISOString(),
        status:"Pendiente",
        salesMan:d_user,
    
        
    }
    console.log(dataToSend);
    

}
function cantidad(){
    
    //var d_reference = JSON.parse(sessionStorage.getItem('misProductos'));
    //var miContador = $('.misCantidades tr').length;
    //console.log(banderai);
    
    for(a=0;a<recuperarJson.length;a++){
        var id = $("#micantidad"+a).val(); 
        console.log("este es"+id);
        var etiqueta = recuperarJson[a].reference; 
        etiquetaContador[a] += etiqueta+':'+id ;
    }
    
    cantidades = etiquetaContador;
    console.log(cantidades);
}


function llenarProductos(){
        //obtengo del sessionStorage el objeto user, el cual corresponde al usuario autenticado
        let user = sessionStorage.getItem("user");
        let orderDate = new Date();
        cantidad();
        //pasar de JSON a JS
        let userJs = JSON.parse(user);
    
              
        let productos = {};
        let quantities ={};
    
    
        for (i=0; i<recuperarJson.length; i++) {
            productos[recuperarJson[i].reference]=recuperarJson[i]; 
            quantities[recuperarJson[i].reference]=cantidades[i];  
        }
  
        
    
        let order = {
            registerDay: orderDate.toISOString(),
            status: "Pendiente",
            salesMan: userJs,
            products: productos,
            quantities:quantities 
        }
    
        let orderJson = JSON.stringify(order);
    
}

$(document).on("click", ".btn_AgregarOrden", function() {
    agregarOrdenes();
});