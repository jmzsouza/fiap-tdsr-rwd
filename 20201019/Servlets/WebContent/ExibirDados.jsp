<%@page import="br.com.fiap.dao.Dados"%>
<%@page import="br.com.fiap.bean.Pessoa"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pessoas Gravadas</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
	integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
	crossorigin="anonymous">
</head>
<body>

	<div class="container my3">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Nome</th>
					<th>Email</th>
					<th>Endereco</th>
				</tr>
			</thead>

			<!-- Dados do ArrayList -->
			<tbody>
				<%
					for (Pessoa pessoa : Dados.pessoas) {
				%>
				<tr>
					<td><%=pessoa.getNome()%></td>
					<td><%=pessoa.getEmail()%></td>
					<td><%=pessoa.getEndereco()%></td>
					<%
						}
					%>
				</tr>
			</tbody>

		</table>
		<a href="GravarArrayList.jsp" class="btn btn-info">Gravar outra pessoa</a>
	</div>

</body>
</html>