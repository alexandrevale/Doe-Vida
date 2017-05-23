
function criar() {
    
    var p = document.getElementById("formulario");
    var select = document.createElement("select");
    var conteudo = document.createElement("option")
    var labSpan = document.createElement("label");
    labSpan.innerHTML = "Estado";
    conteudo.innerHTML = "Selecione"
    
    p.parentNode.insertBefore(select, formulario);
    p.parentNode.insertBefore(labSpan,select);
    select.appendChild(conteudo);
    
}  