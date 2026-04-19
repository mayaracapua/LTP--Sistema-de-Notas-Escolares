const {
    EstudanteEnsinoMedio,
    EstudanteTecnico,
    Disciplina,
    gerarBoletimTurma
} = require("./notas");


let matematica = new Disciplina("Matemática", 80, [7, 8, 6]);
let portugues = new Disciplina("Português", 60, [5, 6, 7]);

let programacao = new Disciplina("Programação", 100, [8, 9, 7]);
let redes = new Disciplina("Redes", 80, [6, 7, 6])

let aluno1 = new EstudanteEnsinoMedio("João Lucas", 16, "EM", "2A");
aluno1.adicionarDisciplina(matematica);
aluno1.adicionarDisciplina(portugues);

let aluno2 = new EstudanteTecnico("Maria", 18, "TEC", "3B");
aluno2.adicionarDisciplina(programacao);
aluno2.adicionarDisciplina(redes);

let turma = [aluno1, aluno2];

gerarBoletimTurma(turma);