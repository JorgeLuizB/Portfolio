let formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        verificaCampos();
});

function verificaCampos(){
    let inputNome = document.getElementById('input-nome');
    let inputEmail = document.getElementById('input-email');
    let inputAssunto = document.getElementById('input-assunto');
    let txtArea = document.getElementById('txtarea-msg');
    if(inputNome.value.length > 50){
        console.log('Digitou mais de 50 caracteres ' + inputNome.value.length)
    } else if(inputAssunto.value.length > 50){
        console.log('Digitou mais de 50 caracteres ' + inputAssunto.value.length)
    } else if(txtArea.value.length > 300){
        console.log('Digitou mais de 50 caracteres ' + inputAssunto.value.length)
    } else{
        let corpo = `Nome: ${inputNome.value} \n Email: ${inputEmail.value} \n Mensagem: ${txtArea.value}`;
        location.href = `mailto:jrgluiz4848@gmail.com?subject= ${encodeURIComponent(inputAssunto.value)} &body= ${encodeURIComponent(corpo)}`;
    }
}