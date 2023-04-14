const alunos = [
    { nome: "João", nota: 4.0 },
    { nome: "Maria", nota: 9.0 },
    { nome: "Pedro", nota: 6.0 },
    { nome: "Ana", nota: 8.5 }
];

function filtrarAlunos(notaMinima, alunos) {
    return alunos.filter(function(aluno) {
        return aluno.nota >= notaMinima
    })
}

const alunosAprovados = filtrarAlunos(6, alunos);
console.log(alunosAprovados);