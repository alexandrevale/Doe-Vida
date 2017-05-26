function criarEstado(){
    var estados = ["Minas Gerais","Paraná","Pernambuco","Rio de Janeiro","São Paulo","Sergipe"];     
    var selectEstado = document.getElementById("appEstado");
    //lista os estado do objeto "estados" no select
    estados.forEach(function(estado, i) {
        var conteudo = document.createElement("option");
        conteudo.innerHTML = estado;
        conteudo.value = estado;
        selectEstado.appendChild(conteudo);
    });
}

function validarEstado(){
    var selectEstado = document.getElementById("appEstado");
    var verifica = selectEstado.options[selectEstado.selectedIndex].value;
    if(verifica === "Selecionado"){
        sweetAlert("Por favor, selecione um estado.");
    }else if(verifica !== "São Paulo"){
        sweetAlert("Estamos em testes, desculpe o transtorno.","No momento apenas o estado de São Paulo esta atualizado.");
    }else{
        window.location.href = 'cidade.html';
    }
}

function criarCidade(){
    var cidades = ["Cubatão","Praia Grande","São Paulo","Santos","São Vicente"];     
    var selectCidade = document.getElementById("appCidade");
    //lista os estado do objeto "cidades" no select
    cidades.forEach(function(cidade, i) {
        var conteudo = document.createElement("option");
        conteudo.innerHTML = cidade;
        conteudo.value = cidade;
        selectCidade.appendChild(conteudo);
    });
}

function getDB(){ 
	var open = indexedDB.open("Hemonucleo", 1);
	open.onsuccess = function() {
		var db = open.result;
		var tx = db.transaction("MyObjectStore", "readwrite");
		var store = tx.objectStore("MyObjectStore");
		var index = store.index("NameIndex");
		var getHospital1 = store.get(1);
		var getHospital2 = store.get(2);
        var getHospital1 = store.get(1);
		var getHospital2 = store.get(2);
		
		var tabela = document.getElementById("tb1");
		var tr = document.createElement("tr");
		var tr2 = document.createElement("tr");
		var tdHospital = document.createElement("td");
		var tdHospital2 = document.createElement("td");
		var tbody = document.querySelector("tbody");
        
        //recebe os valores passados no bd.js para as tds
		getHospital1.onsuccess = function() {
			tdHospital.innerHTML = "<br>" + getHospital1.result.name + " <br> " + getHospital1.result.description + "<br>" + getHospital1.result.code;
		};
		
		getHospital2.onsuccess = function() {
			tdHospital2.innerHTML = "<br>" + getHospital2.result.name + " <br> " + getHospital2.result.description + "<br>" + getHospital2.result.code;
		};

    	tr.appendChild(tdHospital);
    	tr2.appendChild(tdHospital2);
    	tbody.appendChild(tr);
    	tbody.appendChild(tr2);
    	tabela.appendChild(tbody);
    		
    	tx.oncomplete = function() {
    		db.close();
    	};
	}
}