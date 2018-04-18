var RNumero;
var RTentativas;
limit = 50;

//Com esta função, o programa vai buscar um numero aleatorio
function Aleatorio() {
    hoje = new Date();
    num = hoje.getTime();
    num = Math.round(Math.abs(Math.sin(num) * 1000000)) % limit;
    return num;
}

function Init() {
    RNumero = Aleatorio();
    RTentativas = 0;
    document.FJogo.Output.value = 'Estou a pensar num numero entre 0 e ' + (limit - 1) + '. Tenta adivinhar qual é?';
    document.FJogo.Tries.value = RTentativas;
    document.FJogo.HighLow.value = '';
    document.FJogo.Input.value = '';
}

function Jogo(Number) {
//Se ao introduzir um numero, esse for o numero correto (condição verdadeira), o jogo para e diz:
    if (Number == RNumero) {
        RTentativas++;
        document.FJogo.Output.value = 'Acertaste em ' + RTentativas + ' tentativas! Era o numero ' + RNumero + '! Clica em Recomeçar para jogar outra vez';
        document.FJogo.HighLow.value = 'Certoooooooooo!';
//Se isso não for verdadeiro, então o jogo diz, repetindo o processo novamente até que passe a ser verdadeiro:
    } else {
        RTentativas++;
        document.FJogo.Output.value = 'Não, ' + Number + ' não é o numero em que estou a pensar!';
        document.FJogo.HighLow.value = (RNumero > Number) ? 'mais alto!' : 'mais baixo!';
        document.FJogo.Tries.value = RTentativas;
    }
}