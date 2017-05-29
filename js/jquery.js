$(main)

function main(){
 $("#btnDoar").click(function() {
  $("#conteudo1").css("display","inline");
 });
    
 $("#btnReceber").click(function() {
  $("#conteudo2").css("display","inline");
 });
 
 $("#btnAnteriorOpcao").click(function() {
    window.location.href = 'hemonucleo.html';
 });
}