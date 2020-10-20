<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pagamento</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
	integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
	crossorigin="anonymous">
</head>
<body>

	<div class="container my-3">
	
		<h3 class="display-3">C�lculo Salarial</h3>
		<!-- servlet chamada CalculoSalarial sendo invocada na action -->
		<form method="get" name="dados" id="dados" action="CalculoSalarial">
			<div class="my-3">
				<input type="text" name="nome" id="nome" class="form-control"
					placeholder="Nome do funcion�rio" required>
			</div>

			<div class="my-3">
				<input type="text" name="salario" id="salario" class="form-control"
					placeholder="Sal�rio do funcion�rio" required>
			</div>

			<div class="my-3">
				<input type="submit" name="calcular" id="calcular"
					class="btn btn-success" value="Calcular Sal�rio">
			</div>
		</form>

	</div>

</body>
</html>