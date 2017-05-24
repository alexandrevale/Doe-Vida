
function criar(){
    var objdb = [
                {estado:"São Paulo"},
                {estado:"Sergipe"}
                ];     
                
    $(".escolha").ready(function(){
        var p = document.getElementById("formulario");
        var select = document.createElement("select");
        var conteudo = document.createElement("option")
        var labSpan = document.createElement("label");
        labSpan.innerHTML = "Estado";
        conteudo.innerHTML = "Selecione"
        
        p.parentNode.insertBefore(select, p);
        p.parentNode.insertBefore(labSpan,select);
        select.appendChild(conteudo);
        
        //Transformar em forEach
        for (var i=0; i<objdb.length; i++) {
            conteudo.setAttribute('value', objdb[i].value);
            conteudo.appendChild(document.createTextNode(objdb[i].text));
            select.appendChild(conteudo);
        }
    });    
}

function criarCidade(){
    
    $(".escolha").ready(function(){    
        var p = document.getElementById("formulario");
        var select = document.createElement("select");
        var contCidade = document.createElement("option")
        var labCidade = document.createElement("label");
        labCidade.innerHTML = "Cidade";
        contCidade.innerHTML = "Selecione"
        
        p.parentNode.insertBefore(select, p);
        p.parentNode.insertBefore(labCidade,select);
        select.appendChild(contCidade);
});
}


function criar(){
    var objdb = [
                {estado:"São Paulo"},
                {estado:"Sergipe"}
                ];     
                
    $(".escolha").ready(function(){
        var p = document.getElementById("formulario");
        var select = document.createElement("select");
        var conteudo = document.createElement("option")
        var labSpan = document.createElement("label");
        labSpan.innerHTML = "Estado";
        conteudo.innerHTML = "Selecione"
        
        p.parentNode.insertBefore(select, p);
        p.parentNode.insertBefore(labSpan,select);
        select.appendChild(conteudo);
        
        //Transformar em forEach
        for (var i=0; i<objdb.length; i++) {
            conteudo.setAttribute('value', objdb[i].value);
            conteudo.appendChild(document.createTextNode(objdb[i].text));
            select.appendChild(conteudo);
        }
    });    
}

function criarCidade(){
    
    $(".escolha").ready(function(){    
        var p = document.getElementById("formulario");
        var select = document.createElement("select");
        var contCidade = document.createElement("option")
        var labCidade = document.createElement("label");
        labCidade.innerHTML = "Cidade";
        contCidade.innerHTML = "Selecione"
        
        p.parentNode.insertBefore(select, p);
        p.parentNode.insertBefore(labCidade,select);
        select.appendChild(contCidade);
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