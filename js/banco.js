
function inserirRegistro(){
    var nome = document.forms.form1.name.value
    var last = document.forms.form1.last.value;
    var tipo = document.forms.form1.tipo.value;
    var id = parseInt(document.forms.form1.id.value);
     inserir({"id":id,"name":{first:nome, "last":last},"tipo":tipo})
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
        //var index = store.index("NameIndex");
    
        store.put(obj);
        
        tx.oncomplete = function() {
            alert("Inserido com sucesso")
            db.close();
        };
    }
}

function buscar(){
   //  getObjId(document.forms.form2.name.value); 
   
     getObjId(parseInt(document.forms.form2.id.value));
  
}

//function getObjId(name){ //estava id
    function getObjId(id){
        var open = indexedDB.open("Banco", 1);
        open.onsuccess = function(){
            var db = open.result;
            var tx = db.transaction("MyObjectStore", "readwrite");
            var store = tx.objectStore("MyObjectStore");
            
            //var getFirst = store.get(name); //estava id
            var getFirst = store.get(id);
             
            getFirst.onsuccess = function() {
                var obj = getFirst.result;
               document.getElementById("h1").innerHTML = obj.name.first + " " + obj.name.last; 
            };
            
            tx.oncomplete = function() {
                db.close();
            };
        }
}
/*
function listar(obj) {
    var p = document.createElement('p');
    p.innerHTML = obj.id + " " + obj.name.first + " " + obj.name.last + " " + obj.age;
    document.getElementById("h1").appendChild(p);
}*/

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
    var divres = document.getElementById("result");
    divres.innerHTML = "";
    var open = indexedDB.open("Banco", 1);
    open.onsuccess = function() {
        var db = open.result;
        //divres.innerHTML = "";
        var trans = db.transaction("MyObjectStore","readonly");
        var armazenar = trans.objectStore("MyObjectStore");
        var cursor = armazenar.openCursor();
        
        cursor.addEventListener("success", mostrarDados, false);
    }
}

function mostrarDados(e){
    var cursor = e.target.result;
    if(cursor){
        var p = document.createElement("p");
        p.innerHTML = "Nome: "+cursor.value.name.first+" tipo: "+cursor.value.tipo;
        var divres = document.getElementById("result");
        divres.appendChild(p);
        cursor.continue();
    }
}


