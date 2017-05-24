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
        var geHospital2 = store.get(2); 
    
        tx.oncomplete = function() {
            db.close();
        };
    }   

}