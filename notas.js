class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, matricula, turma) {
        super(nome, idade);
        this.matricula = matricula;
        this.turma = turma;
        this.disciplinas = [];
    }

    adicionarDisciplina(disciplina) {
        this.disciplinas.push(disciplina);
    }

    calcularMediaGeral() {
        let soma = 0;
        this.disciplinas.forEach(d => soma += d.calcularMedia());
        return this.disciplinas.length > 0 ? soma / this.disciplinas.length : 0;
    }

    situacao() {
        return "Indefinida";
    }

    boletim() {
        console.log(`\Boletim de ${this.nome} (${this.matricula})`);
        this.disciplinas.forEach(d => {
            console.log(`Disciplina: ${d.nome}`);
            console.log(`Média: ${d.calcularMedia().toFixed(2)}`);
        });
        console.log(`Média Geral: ${this.calcularMediaGeral().toFixed(2)}`);
        console.log(`Situação: ${this.situacao()}`);
    }
}

class EstudanteEnsinoMedio extends Estudante {
    situacao() {
        let media = this.calcularMediaGeral();
        if (media >= 6) return "Aprovado";
        if (media >= 5) return "Recuperação";
        return "Reprovado";
    }
}

class EstudanteTecnico extends Estudante {
    situacao() {
        let media = this.calcularMediaGeral();
        if (media >= 7) return "Aprovado";
        if (media >= 6) return "Recuperação";
        return "Reprovado";
    }
}

class Disciplina {
    constructor(nome, cargaHoraria, notas = []) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = this.notas.reduce((acc, n) => acc + n, 0);
        return this.notas.length > 0 ? soma / this.notas.length : 0;
    }
}

function gerarBoletimTurma(estudantes) {
    console.log(" BOLETIM DA TURMA ");
    estudantes.forEach(estudante => {
        estudante.boletim();
    });
}

module.exports = {
    Pessoa,
    Estudante,
    EstudanteEnsinoMedio,
    EstudanteTecnico,
    Disciplina,
    gerarBoletimTurma
};