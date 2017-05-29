function criarTabelaHemonucleo(){
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