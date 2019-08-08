$(document).ready(function(){
	obtenerMatches();

});

function obtenerMatches(){

	var token = localStorage.getItem("token");
	console.log(token);

	var url = "http://192.168.0.107:8000/api/auth/match";

	$.ajax({
			
				headers: {
				'Content-Type': 'aplication/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Access-Control-Allow-Origin': '*',
				'Authorization': 'Bearer ' + "" + token
    			},

				type:"GET",
				url: url,
				dataType: "json",
				success: function(resp){
					var datos = resp;
					console.log(resp);
					var tablaDatos2= '';
					var i;
					for(i=0; i<datos.length; i++){
						tablaDatos2 += '<tr>' + 
							'<td>' + datos[i]['dateMatch'] + '</td>' +
							'<td>' + datos[i]['teamLocal'] + '</td>' + 
							'<td>' + datos[i]['scoreLocal'] + '</td>' + 
							'<td>' + datos[i]['teamVisitor'] + '</td>' + 
							'<td>' + datos[i]['scoreVisitor'] + '</td>' + 
							'<td>' + datos[i]['stateMatch'] + '</td>' + '</tr>';
							/*'<td>' + datos[i]['dateMatch'] + '</td'> +
							'<td>' + datos[i]['teamLocal'] + '</td'> +
							'<td>' + datos[i]['scoreLocal'] + '</td'> +
							'<td>' + datos[i]['teamVisitor'] + '</td'> +
							'<td>' + datos[i]['scoreVisitor'] + '</td'> +
							'<td>' + datos[i]['stateMatch'] + '</td'> + '</tr>';*/
					}

					$('#tabla_general_movimientos').html(tablaDatos2);

					/*for(element in datos){
						arrayDatos.push(datos[element]["id"]);

					};
					console.log(datos[1]["id"]);

					//$(location).attr('href','pantalla2.html');*/
				},
				error: function(){
					console.log("Error al cargar los datos.");
				}
			})
}

$('#logOut').click(function(){
	localStorage.removeItem("token");
	$(location).attr('href','index.html');
})