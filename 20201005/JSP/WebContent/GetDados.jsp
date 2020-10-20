<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Recuperando dados da pessoa</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
	crossorigin="anonymous">

</head>
<body>
	<div class="container">
		<h2 class="display-4 my-3">Recuperando dados da pessoa</h2>

		<%
			//recuperar pelo name - parametro
		String nome = request.getParameter("nome");
		String email = request.getParameter("email");
		String uf = request.getParameter("estado");

		//exibir o valor - retonar o que estiver no value
		out.print(uf);

		//criando um Array de estados
		String[] estadosBrasil = new String[5];
		estadosBrasil[0] = "Rio de Janeiro";
		estadosBrasil[1] = "São Paulo";
		estadosBrasil[2] = "Minas Gerais";
		estadosBrasil[3] = "Paraná";
		estadosBrasil[4] = "Santa Catarina";
		%>

		<!--  Exibir na página o que foi recuperado -->

		<p class="lead">
			Nome da Pessoa:
			<%=nome%>
		</p>
		<p class="lead">
			Email da Pessoa:
			<%=email%>
		</p>
		<p class="lead">
			UF da Pessoa:
			<%=estadosBrasil[Integer.parseInt(uf)]%>
		</p>

		<p>
			<a href="dados.jsp" class="btn btn-success">Voltar a Página de Pessoas</a>
		</p>
	</div>

</body>
</html>