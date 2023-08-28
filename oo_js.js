function RacaDragonBall (nome, origem) {
    this.nome = nome;
    this.origem = origem;

    this.lutar = function() {
        console.log('Lutando');
    }

    this.voar = function() {
        console.log('Voando');
    }
}

function SaiyaJin(nome, ki) {
    RacaDragonBall.call(this, nome, 'Planeta Vegeta');
    this.ki = ki;

    this.SaiyaJin2 = function() {
        console.log('Evoluindo para SaiyaJin2');
    }
}

function Namekuseijin(nome, ki) {
    RacaDragonBall.call(this, nome, 'Namekusei');
    this.ki = ki;

    this.detectarKi = function() {
        console.log('Detectando KI inimigo');
    }
}

const goku = new SaiyaJin('Goku', 15000);
const vegeta = new SaiyaJin('Vegeta', 12000);
const piccolo = new Namekuseijin('Piccolo', 10000);