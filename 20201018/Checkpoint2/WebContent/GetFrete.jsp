<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8"%>
<%@page import="java.text.DecimalFormat" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Valor do Frete</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
	crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<h3 class="display-4 my-3">Valor Final com Frete</h3>
		
		<%
		String nome = request.getParameter("nome");
		String valor = request.getParameter("valor");
		String estado = request.getParameter("estado");
		
		DecimalFormat valueFormatter = new DecimalFormat("R$#0.00");
		double valorPedido = Double.parseDouble(valor);

		String[] estadosBrasil = new String[8];
		estadosBrasil[0] = "AM";
		estadosBrasil[1] = "ES";
		estadosBrasil[2] = "GO";
		estadosBrasil[3] = "MS";
		estadosBrasil[4] = "PR";
		estadosBrasil[5] = "RS";
		estadosBrasil[6] = "SC";
		estadosBrasil[7] = "SP";
		
		int estadoSelecionado = Integer.parseInt(estado);
		%>
		
		<p class="lead">
			<strong>NOME:</strong>
			<%=nome%>
		</p>
		<p class="lead">
			<strong>VALOR DO PEDIDO:</strong>
			<%out.print(valueFormatter.format(valorPedido));%>
		</p>
		<p class="lead">
			<strong>VALOR DO FRETE:</strong>
			<%
				double valorFrete = 0;
			
				switch (estadoSelecionado) {
				case 0:
					valorFrete = valorPedido * 0.10;
					break;
				case 1:
					valorFrete = valorPedido * 0.10;
					break;
				case 2:
					valorFrete = valorPedido * 0.12;
					break;
				case 3:
					valorFrete = valorPedido * 0.12;
					break;
				case 4:
					valorFrete = valorPedido * 0.09;
					break;
				case 5:
					valorFrete = valorPedido * 0.09;
					break;
				case 6:
					valorFrete = valorPedido * 0.09;
					break;
				case 7:
					valorFrete = valorPedido * 0.125;
					break;					
				}
				out.print(valueFormatter.format(valorFrete));
			%>
		</p>
		<p class="lead">
			<strong>VALOR TOTAL:</strong>
			<%
				double valorTotal = valorPedido + valorFrete;
				out.print(valueFormatter.format(valorTotal));
			%>
		</p>				
		<p class="lead">
			<strong>ESTADO:</strong>
			<%=estadosBrasil[estadoSelecionado]%>
		</p>		
		<p>
			<a href="Frete.jsp" class="btn btn-danger">Voltar</a>
		</p>		
	</div>
</body>
</html>