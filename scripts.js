
function enviando() {

    let umPergunta = document.querySelector('input[name="perguntaUm"]:checked').value;
    let doisPergunta = document.querySelector('input[name="perguntaDois"]:checked').value;
    let tresPergunta = document.querySelector('input[name="perguntaTres"]:checked').value;
    let quatroPergunta = document.querySelector('input[name="perguntaQuatro"]:checked').value;
    let cincoPergunta = document.querySelector('input[name="perguntaCinco"]:checked').value;
    let seisPergunta = document.querySelector('input[name="perguntaSeis"]:checked').value;
    let setePergunta = document.querySelector('input[name="perguntaSete"]:checked').value;
    //retorno
    let imediatoUm = document.querySelector('input[name="imediato"]:checked').value;
    let longo_diaDois = document.querySelector('input[name="longo_dia"]:checked').value
    let apos_tarefasTres = document.querySelector('input[name="apos_tarefas"]:checked').value
    let apos_cobradoQuatro = document.querySelector('input[name="apos_cobrado"]:checked').value





    console.log('p1: ' + umPergunta);
    console.log('p2: ' + doisPergunta);
    console.log('p3: ' + tresPergunta);
    console.log('p4: ' + quatroPergunta);
    console.log('p5: ' + cincoPergunta);
    console.log('p6: ' + seisPergunta);
    console.log('p7: ' + setePergunta);
    console.log('imediato: ' + imediatoUm);
    console.log('logo do dia: ' + longo_diaDois);
    console.log('apos tarefas: ' + apos_tarefasTres);
    console.log('apos ser cobrado: ' + apos_cobradoQuatro);

}
