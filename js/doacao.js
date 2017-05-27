function Doar() {
	
            //Conjunto de pacientes, pilha de objetos     
			var pacientes = [
			    {"nome":"Andressa da Rocha Morgado", "tipo":"O-"},
			    {"nome":"Mariana Lima de Souza", "tipo":"O-"},
			    {"nome":"Carlos Miguel da Silva", "tipo":"A+"},
			    {"nome":"Paula Noronha Fernades", "tipo":"AB+"},
			    {"nome":"Amanda Soares Matos", "tipo":"O+"},
			    {"nome":"Juliane Macedo dos Santos", "tipo":"AB+"}
			    ];
		
			return geraTabela(pacientes);
		}

		function geraTabela(pacientes) {
		
			//Chama a tag table com id="tabela", armazenando-a em uma variável
			var tabela = document.getElementById('tabela');
			
			//Para cada paciente originados do parâmetro da função que recebeu
			//estes dados da função "inicio", vamos criar linhas e colunas im-
			//plementando seus respectivos valores.
			for (var i in pacientes) {
				//A criação da variável linha que armazena um elemento <tr>
				var linha = document.createElement('tr');

				//O nome do paciente convertido em texto tipo "node" para ser
				//possível sua inserção em qualquer outro elemento html
				
				var nome = document.createTextNode(pacientes[i].nome);
				//A criação da variável colnome que armazena um elemento <td>
				var colnome = document.createElement('td');
				//O elemento <td></td> receberá, em seu interior, o nome
				colnome.appendChild(nome);
				//O elemento <tr></tr> receberá, em seu interior, a <td></td>
				linha.appendChild(colnome);

				var tipo = document.createTextNode(pacientes[i].tipo);
				var coltipo = document.createElement('td');
				coltipo.appendChild(tipo);
				linha.appendChild(coltipo);

				tabela.appendChild(linha);

			}

		}
function Receber(){
    
    
}