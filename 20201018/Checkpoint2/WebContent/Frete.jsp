<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Calcular Valor do Frete</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
	crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h3 class="display-4 my-3">CÁLCULO DE FRETE</h3>
		
		<p>Preencha os campos abaixo e clique no botão enviar</p>
		<form name="calcularFrete" id="calcularFrete" method="post" action="GetFrete.jsp">
			<div class="form-group">
				<label for="frete"><strong>Nome:</strong></label>
				<input type="text" id="nome" name="nome" class="form-control">
			</div>
			<div class="form-group">
				<label for="frete"><strong>Valor do Pedido:</strong></label>
				<input type="text" id="valor" name="valor" class="form-control">
			</div>
			<div class="form-group">
				<label for="frete"><strong>Estado:</strong></label>
				<select id="estado" name="estado"
					class="form-control">
					<option value="0">AM</option>
					<option value="1">ES</option>
					<option value="2">GO</option>
					<option value="3">MS</option>
					<option value="4">PR</option>
					<option value="5">RS</option>
					<option value="6">SC</option>
					<option value="7">SP</option>
				</select>
			</div>					
			<button type="submit" name="enviar" class="btn btn-danger">Enviar</button>
		</form>
	</div>
</body>
</html>