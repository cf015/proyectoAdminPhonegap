$(document).ready(function(){

});

function enviarDatos(){

	var email = $('#email').val();
	var password = $('#pass').val();
	var url = "http://192.168.0.107:8000/api/auth/login";

	$('#formLogin').validate({
		rules:{
			email: {required: true, email:true},
			pass: {required: true}
		},
		messages:{
			email: "Ingresar un email valido.",
			pass: "Ingresar una contraseña"

		},
		submitHandler: function(form) {

			var data = {
				"email": email,
				"password": password };
			var dataPost = JSON.stringify(data);

			$.ajax({
			
				headers: {
				'Content-Type': 'aplication/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Access-Control-Allow-Origin': '*',
				//'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyZjJlNWQ2MjczZjMwMmVhODMzOTMyZmMyZWYzMGU2M2I2MzBiYTJhN2U1ZTE3MWJmNTRmYzVkYTc3ZTU5NWU5ODZiMjc1NDQ0NzRiYzMwIn0.eyJhdWQiOiIxIiwianRpIjoiZjJmMmU1ZDYyNzNmMzAyZWE4MzM5MzJmYzJlZjMwZTYzYjYzMGJhMmE3ZTVlMTcxYmY1NGZjNWRhNzdlNTk1ZTk4NmIyNzU0NDQ3NGJjMzAiLCJpYXQiOjE1NjUwNzY5MzcsIm5iZiI6MTU2NTA3NjkzNywiZXhwIjoxNTk2Njk5MzM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HAXCxqU1r-RqX61FEIEE_TU-z7K_rd0e4pkTmFRl_IWblpgeAh6qG4rV1CWyfJ-G1kyREx-NxLktKZvul5aALeOzKjOxcVeTkZ3s5D4RuscbyI6_eKv9CtfsXbdICLPcKfivZYSvnfxXYv7Rsg_ueg5bTNv9T2nX-bi7yfxf-tyZNuPXaarN-NOXdkzIisXiKuGTGC-rxr6oI0GDG4fnXqs5a3EH23r3CVUSk8-XXMOglUFiHQ7hTR-Cx-PUgdxsIUydLW1YHFCpIpieUFFGnVQ-5X0n9copcit7Uy7Mm9Ckg5xAYqXrdyx5jTzrMjjJ76yX5xBJwH_3phwNUrF2RBLeExHq0qj1ivgQOflIXkYJQfDd_5EPsNkJoie9R55Ndg2qhpQXL0tsiFF0xVUXqwDUliLGFf31DPTlDATWZuTxNFoRI-9Gj6vhme5mbVUECf5YbEqhbGR7PnwUIUauRnO8zATt0Vb_HtLbl4fDM5DwbjXQHfrkDG12Cf7txi4UCYsOn1jaiqzCtIhtiArxLGxcR-yyzOFO3cWTjGnMj1uIkdvBAnSdOaStlBi4d0rC97HSSO1ypiQrCOqrjRXtb1tAVonY6mAQvqNcfkoJnpOrw7GbiJgt31oQJMCv6M6TR7xdMp6MW7kBHZ34bHLXn-8TYzth66UOu37mrOqMSOo'
    			},

				type:"POST",
				url: url,
				dataType: "json",
				data: dataPost,
				success: function(resp){
					console.log(resp['access_token']);
					var token = resp['access_token'];
					localStorage.setItem("token",token);
					$(location).attr('href','pantalla2.html');
				},
				error: function(){
					console.log("Campos incorrectos");
					alert("Error");
					$(location).attr('href','index.html');
				}
			})
    	}
	})

}

/*$('#botonLogin').click(function(){

	var email = $('#email').val();
	var password = $('#pass').val();
	var url = "http://192.168.0.107:8000/api/auth/login";

	$('#formLogin').validate({
		rules:{
			email: {required: true, email:true},
			pass: {required: true}
		},
		messages:{
			email: "Ingresar un email valido.",
			pass: "Ingresar una contraseña"

		},
		submitHandler: function(form) {

			var data = {
				"email": email,
				"password": password };
			var dataPost = JSON.stringify(data);

			$.ajax({
			
				headers: {
				'Content-Type': 'aplication/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Access-Control-Allow-Origin': '*',
				//'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYyZjJlNWQ2MjczZjMwMmVhODMzOTMyZmMyZWYzMGU2M2I2MzBiYTJhN2U1ZTE3MWJmNTRmYzVkYTc3ZTU5NWU5ODZiMjc1NDQ0NzRiYzMwIn0.eyJhdWQiOiIxIiwianRpIjoiZjJmMmU1ZDYyNzNmMzAyZWE4MzM5MzJmYzJlZjMwZTYzYjYzMGJhMmE3ZTVlMTcxYmY1NGZjNWRhNzdlNTk1ZTk4NmIyNzU0NDQ3NGJjMzAiLCJpYXQiOjE1NjUwNzY5MzcsIm5iZiI6MTU2NTA3NjkzNywiZXhwIjoxNTk2Njk5MzM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HAXCxqU1r-RqX61FEIEE_TU-z7K_rd0e4pkTmFRl_IWblpgeAh6qG4rV1CWyfJ-G1kyREx-NxLktKZvul5aALeOzKjOxcVeTkZ3s5D4RuscbyI6_eKv9CtfsXbdICLPcKfivZYSvnfxXYv7Rsg_ueg5bTNv9T2nX-bi7yfxf-tyZNuPXaarN-NOXdkzIisXiKuGTGC-rxr6oI0GDG4fnXqs5a3EH23r3CVUSk8-XXMOglUFiHQ7hTR-Cx-PUgdxsIUydLW1YHFCpIpieUFFGnVQ-5X0n9copcit7Uy7Mm9Ckg5xAYqXrdyx5jTzrMjjJ76yX5xBJwH_3phwNUrF2RBLeExHq0qj1ivgQOflIXkYJQfDd_5EPsNkJoie9R55Ndg2qhpQXL0tsiFF0xVUXqwDUliLGFf31DPTlDATWZuTxNFoRI-9Gj6vhme5mbVUECf5YbEqhbGR7PnwUIUauRnO8zATt0Vb_HtLbl4fDM5DwbjXQHfrkDG12Cf7txi4UCYsOn1jaiqzCtIhtiArxLGxcR-yyzOFO3cWTjGnMj1uIkdvBAnSdOaStlBi4d0rC97HSSO1ypiQrCOqrjRXtb1tAVonY6mAQvqNcfkoJnpOrw7GbiJgt31oQJMCv6M6TR7xdMp6MW7kBHZ34bHLXn-8TYzth66UOu37mrOqMSOo'
    			},

				type:"POST",
				url: url,
				dataType: "json",
				data: dataPost,
				success: function(resp){
					console.log(resp['access_token']);
					var token = resp['access_token'];
					localStorage.setItem("token",token);
					$(location).attr('href','pantalla2.html');
				},
				error: function(){
					console.log("Campos incorrectos");
				}
			})
    	}
	})
})*/