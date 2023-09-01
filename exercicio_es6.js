const alunos = [
    {nome: 'Gabriel', nota: 10},
    {nome: 'Joao', nota: 0},
    {nome: 'Maria', nota: 6},
    {nome: 'Carla', nota: 7},
    {nome: 'Jose', nota: 2},
    {nome: 'Carlos', nota: 5}
]

function acimaDaMedia(arr) {
    const aprovados = arr.filter(objects => objects.nota >= 6);
    return aprovados;
}

console.log(acimaDaMedia(alunos));