<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<%@page import="java.text.DecimalFormat" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Valor do Condominio</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
	crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h3 class="display-4 my-3">Valor do Condominio</h3>
		
		<%
			String valor = request.getParameter("valor");
			double valorCondominio = Double.parseDouble(valor);
			DecimalFormat valueFormatter = new DecimalFormat("R$#0.00");
		%>
		
		<p class="lead">
			<strong>FUNDO DE RESERVA: </strong>
			<%
				double fundoReserva = valorCondominio * 0.05;
				out.print(valueFormatter.format(fundoReserva));
			%>
		</p>
		<p class="lead">
			<strong>BENFEITORIAS: </strong>
			<%
				double benfeitorias = valorCondominio * 0.07;
				out.print(valueFormatter.format(benfeitorias));
			%>
		</p>		
		<p class="lead">
			<strong>TAXA DE ADMINISTRAÇÃO: </strong>
			<%
				double taxaAdministracao = valorCondominio * 0.15;
				out.print(valueFormatter.format(taxaAdministracao));
			%>
		</p>
		<p class="lead">
			<strong>TOTAL FINAL: </strong>
			<%
				double totalFinal = valorCondominio + fundoReserva + benfeitorias + taxaAdministracao;
				out.print(valueFormatter.format(totalFinal));
			%>
		</p>						
		<p>
			<a href="Condominio.jsp" class="btn btn-primary">Voltar a Página de Calcular Valor</a>
		</p>
	</div>

</body>
</html>