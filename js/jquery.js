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

 $('.cpf').mask('000.000.000-00', {reverse: true}
 );


 $("#botaoreceber").click(function(e){
          e.target.style.display.none;
    $("#conteudo2").hide();
 
  });
}