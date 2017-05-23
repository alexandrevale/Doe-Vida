
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