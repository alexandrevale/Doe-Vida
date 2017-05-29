window.addEventListener("load", function criarEstado(){
    var estados = ["Minas Gerais","Paraná","Pernambuco","Rio de Janeiro","São Paulo","Sergipe"];
    var selectEstado = document.getElementById("appEstado");
    //lista os estado do objeto "estados" no select
    estados.forEach(function(estado, i) {
        var conteudo = document.createElement("option");
        conteudo.innerHTML = estado;
        conteudo.value = estado;
        selectEstado.appendChild(conteudo);
    });

    var validarEstado = document.getElementById("btnProximoEstado");
    validarEstado.addEventListener("click", function(){
        var selectEstado = document.getElementById("appEstado");
        var verifica = selectEstado.options[selectEstado.selectedIndex].value;
        if(verifica === "Selecionado"){
            sweetAlert("Por favor, selecione um estado.");
        }else if(verifica !== "São Paulo"){
            sweetAlert("Estamos em testes, desculpe o transtorno.","No momento apenas o estado de São Paulo esta atualizado.");
        }else{
            window.location.href = 'cidade.html';
        }
    });  
    document.getElementById("btnAnteriorEstado").addEventListener("click", function(){
        window.location.href = 'home.html';
    });
});

window.addEventListener("load", function criarCidade(){
    var cidades = ["Cubatão","Praia Grande","São Paulo","Santos","São Vicente"];     
    var selectCidade = document.getElementById("appCidade");
    //lista os estado do objeto "cidades" no select
    cidades.forEach(function(cidade, i) {
        var conteudo = document.createElement("option");
        conteudo.innerHTML = cidade;
        conteudo.value = cidade;
        selectCidade.appendChild(conteudo);
    });
    
    var validarCidade = document.getElementById("btnProximoCidade");
    validarCidade.addEventListener("click", function(){
        var selectCidade = document.getElementById("appCidade");
        var verifica = selectCidade.options[selectCidade.selectedIndex].value;
        if(verifica === "Selecionado"){
            sweetAlert("Por favor, selecione uma cidade.");
        }else if(verifica !== "Santos"){
            sweetAlert("Estamos em testes, desculpe o transtorno.","No momento apenas a cidade de Santos esta atualizada.");
        }else{
            
            window.location.href = 'hemonucleo.html';
        }
    });  
    document.getElementById("btnAnteriorCidade").addEventListener("click", function(){
        window.location.href = 'estado.html';
    });
});

window.addEventListener("load",function(){
    var open = indexedDB.open("Hemonucleo", 1);
    open.onupgradeneeded = function() {
        var db = open.result; 
        var store = db.createObjectStore("MyObjectStore", {keyPath: "id"}); 
        var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
    };
    
    open.onsuccess = function() { 
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore"); 
        var index = store.index("NameIndex");

        store.put({id: 1, name: "Hemonúcleo de Santos", description: "R. Oswaldo Cruz, 197 - Boqueirão", code: "Telefone: (13) 3202-1428"});
        store.put({id: 2, name: "Santa Casa de Santos", description: "Rua Doutor Cláudio Luís da Costa, 50 - Jabaquara", code: "Telefone: (13) 3202-1428"});
        
        var getHospital1 = store.get(1); 
        var getHospital2 = store.get(2); 
    
        
        tx.oncomplete = function() {
            db.close();
        };
	}
	document.getElementById("btnAnteriorHemo").addEventListener("click", function(){
        window.location.href = 'cidade.html';
    });
	document.getElementById("btnProximoHemo").addEventListener("click", function(){
        window.location.href = 'escolha.html';
    });
});

/*
                
                document.getElementById("btnProximoHemo").addEventListener("click",function(){
                    window.location.href = 'hemonucleo.html'
                });
                
<button class="btn" id="btnAnteriorHemo"onclick="location.href='cidade.html'">Anterior</button>
<button class="btn" id="btnProximoHemo" onclick="location.href='escolha.html'">Próximo</button>
*/