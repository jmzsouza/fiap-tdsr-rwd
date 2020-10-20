<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Calcular Valor do Condominio</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
	crossorigin="anonymous">
</head>
</head>
<body>
	<div class="container my-3">
		<h3 class="display-4 my-3">Calcular Valor do Condominio</h3>
		<form name="calcularCondominio" id="calcularCondominio" method="post" action="GetCondominio.jsp">
			<div class="form-group">
				<label for="condominio"><strong>Valor do Condominio:</strong></label>
				<input type="text" id="valor" name="valor" class="form-control">
			</div>
			<button type="submit" name="calcular" class="btn btn-primary">Calcular</button>
		</form>
	</div>
</body>
</html>