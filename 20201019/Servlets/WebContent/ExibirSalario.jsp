<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Exibir Salário</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
	integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
	crossorigin="anonymous">
</head>
<body>

	<div class="container my-3">

		<h3 class="display-3">Cálculo Salarial</h3>
		<p class="my-3 lead">
			Nome do funcionário:
			<%=request.getAttribute("nome")%>
		</p>
		<p class="my-3 lead">
			Salário Atual do funcionário:
			<%=request.getAttribute("salario")%>
		</p>
		<p class="my-3 lead">
			Desconto de INSS do funcionário:
			<%=request.getAttribute("inss")%>
		</p>
		<p class="my-3 lead">
			Desconto de IR do funcionário:
			<%=request.getAttribute("ir")%>
		</p>
		<p class="my-3 lead">
			Salário do funcionário:
			<%=request.getAttribute("novoSalario")%>
		</p>

		<a href="Pagamento.jsp" class="btn btn-info">Novo Cálculo</a>

	</div>

</body>
</html>