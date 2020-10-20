<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Pessoas</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
	crossorigin="anonymous">
</head>
<body>
	<div class="container my-3">
		<form name="dados" id="dados" method="post" action="GetDados.jsp">

			<div class="form-group">
				<label for="nome">Nome da Pessoa: </label> <input type="text"
					id="nome" name="nome" class="form-control">
			</div>

			<div class="form-group">
				<label for="nome">Email da Pessoa: </label> <input type="text"
					id="email" name="email" class="form-control">
			</div>

			<div class="form-group">
				<label for="nome">UF: </label> <select id="estado" name="estado"
					class="form-control">
					<option value="0">Rio de Janeiro</option>
					<option value="1">São Paulo</option>
					<option value="2">Minas Gerais</option>
					<option value="3">Paraná</option>
					<option value="4">Santa Catarina</option>

				</select>
			</div>

			<button type="submit" name="enviar" class="btn btn-info">Enviar</button>

		</form>
	</div>

</body>
</html>