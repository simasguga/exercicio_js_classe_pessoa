class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    dizerValorImc() {
        const calculoImc = this.peso / (this.altura * this.altura);
        const mensagem = console.log(`O valor de indice de massa corporal de ${this.nome} é de ${calculoImc.toFixed(2)}!`);
        return mensagem;
    }
}

const pessoa1 = new Pessoa("Predo", 65.7, 1.65);

const pessoa2 = new Pessoa("Zika", 67.9, 1.72);

function main(objeto) {
    return objeto.dizerValorImc();
}

main(pessoa1);
main(pessoa2);
