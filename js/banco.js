function inserirRegistro(){
    var nome = document.forms.form1.name.value
    var last = document.forms.form1.last.value;
    var tipo = document.forms.form1.tipo.value;
    var hemonucleo = document.forms.form1.hemonucleo.value;
    var id = parseInt(document.forms.form1.id.value);
     inserir({"id":id,"name":{first:nome, "last":last},"tipo":tipo,"hemonucleo":hemonucleo})
}

function inserir(obj){
    
    var open = indexedDB.open("Banco", 1);
    open.onupgradeneeded = function() {
        var db = open.result;
        var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
        store.createIndex("NameIndex", ["name.last","name.first"]);
    };
    
    open.onsuccess = function() {
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
 
        store.put(obj);
        
        tx.oncomplete = function() {
            alert("Cadastrado com sucesso");
            db.close();
        };
    }
}

function buscar(){
    getObjId(parseInt(document.forms.form2.id.value)); 
}

function getObjId(id){
    var open = indexedDB.open("Banco", 1);
    open.onsuccess = function(){
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
            
        var getFirst = store.get(id);
             
        getFirst.onsuccess = function() {
            var obj = getFirst.result;
            document.getElementById("h2").innerHTML = "Nome: "+obj.name.first + " " + obj.name.last+ "<br> Tipo sanguíneo: "+obj.tipo+ "<br> Hemonucleo: "+obj.hemonucleo; 
        };
            
        tx.oncomplete = function() {
            db.close();
        };
    }
}

function getObjIndex(idx){
    var open = indexedDB.open("Banco", 1);
    open.onsuccess = function(){
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");
        var index = store.index("NameIndex");
            
        var getFirst = index.get(idx);
            
        getFirst.onsuccess = function() {
            var obj = getFirst.result;
            document.getElementById("h1").innerHTML = obj.name.first; 
        };
        tx.oncomplete = function() {
            db.close();
        };
    }
}       

// MOSTRAR DADOS CADASTRADOS NA TABELA

function mostrar(){
    var divres = document.getElementById("result"); //p id="result" que recebe a função
    divres.innerHTML = ""; //pra limpar cada vez que clicar 
    var open = indexedDB.open("Banco", 1);
    open.onsuccess = function() {
        var db = open.result;
        var trans = db.transaction("MyObjectStore","readonly");
        var armazenar = trans.objectStore("MyObjectStore");
        var cursor = armazenar.openCursor(); //curso receber o evento do botao doar e faz a função de mostrarDados
        
        cursor.addEventListener("success", mostrarDados);
        
    }
}

function mostrarDados(e){
    var cursor = e.target.result; //target representa a 1 linha 
    if(cursor){
        var p = document.createElement("p"); //cria um p pra cada resultado e joga na divres 
        p.innerHTML = "Nome: "+cursor.value.name.first+ " "+cursor.value.name.last+"<br> Tipo sanguíneo: "+cursor.value.tipo+"<br> Hemonúcleo: "+cursor.value.hemonucleo;
        var divres = document.getElementById("result");
        divres.appendChild(p); //coloca o p na divres (div resultado)
        cursor.continue(); //tipo contador, sobe pro segundo, terceiro....
    }
}