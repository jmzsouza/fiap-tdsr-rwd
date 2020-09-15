// criando o objeto de forma literal
const pessoa = {
    nome: 'Jonas',
    idade: 32,
    email: 'email@email.com',
}

//exibir no console
console.log(`Objeto pessoa ${pessoa}`);
console.log(`Objeto pessoa ${pessoa.nome}`);
console.log(`Objeto pessoa ${pessoa.idade}`);
console.log(`Objeto pessoa ${pessoa.email}`);

//função para a criação do objeto - factory
function criarPet(nome, tipo, idade) {
    return {
        nome,
        tipo,
        idade,
        exibir() {
            console.log(`Nome do pet: ${this.nome} | Tipo do pet: ${this.tipo} | Idade do pet: ${this.idade}`);
        },
        adicionarIdade() {
            this.idade++;
        }
    }
}

// criar os pets
const pet1 = criarPet('Taleban', 'Cachorro', 10);
const pet2 = criarPet('Billy', 'Gato', 14);

pet1.exibir();
pet2.exibir();

pet1.adicionarIdade();
pet1.exibir();

//atribuição por desestruturação
const coisas = {
    tipo: 'Mesa',
    material: 'Madeira',
    dimensao: {
        largura: 3.5,
        altura: 1.5,
        profundidade: 1.7
    }
};

console.log(coisas);
const {
    tipo,
    material
} = coisas;
console.log(tipo);
console.log(material);

const {
    dimensao: {
        largura,
        altura
    }
} = coisas;
console.log(largura);
console.log(altura);