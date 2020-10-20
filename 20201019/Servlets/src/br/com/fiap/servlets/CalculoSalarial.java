package br.com.fiap.servlets;

import java.io.IOException;
import java.text.DecimalFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalculoSalarial
 */
@WebServlet("/CalculoSalarial")
public class CalculoSalarial extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CalculoSalarial() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		DecimalFormat formatador = new DecimalFormat("R$#0.00");

		// Recuperando os dados do form
		String nome = request.getParameter("nome");
		double salario = Double.parseDouble(request.getParameter("salario"));

		// Cálculo simples
		double inss = salario * 0.07;
		double ir = salario * 0.04;
		double novoSalario = (salario - (inss + ir));

		// Preparar as informações a serem enviadas ao novo JSP - PARAMETROS
		request.setAttribute("nome", nome);
		request.setAttribute("salario", formatador.format(salario));
		request.setAttribute("inss", formatador.format(inss));
		request.setAttribute("ir", formatador.format(ir));
		request.setAttribute("novoSalario", formatador.format(novoSalario));

		// Definir para onde enviar - procura a página para fazer o envio
		request.getRequestDispatcher("ExibirSalario.jsp").forward(request, response);

	}

}
