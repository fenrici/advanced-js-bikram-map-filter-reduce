//RESUELVE LOS EJERCICIOS AQUI
//RESUELVE LOS EJERCICIOS AQUI
1.
const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = (elevados) => numbers.map(num => num ** num);
console.log(elevados(numbers));


2.
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const result2 = foodList.map(food => {
    switch (food) {
        case 'Pizza':
            return 'Como soy de Italia, amo comer Pizza';
        case 'Ramen':
            return 'Como soy de Japón, amo comer Ramen';
        case 'Paella':
            return 'Como soy de Valencia, amo comer Paella';
        case 'Entrecot':
            return 'Aunque no como carne, el Entrecot es sabroso';
        default:
            return '';
    }
});
console.log(result2);

3.
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map(person => {
    return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`;
});

console.log(result3);

4.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num % 2 !== 0);
console.log(result4);

5.
const foodList2 = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];

const result5 = foodList2
    .filter(food => food.isVeggie) // Filtra solo los vegetarianos
    .map(food => `Que ${food.name.includes('Tofu') ? 'rica' : 'rico'} ${food.name} me voy a comer!`);

console.log(result5);

6.
const inventory = [
    { name: 'Mobile phone', price: 199 },
    { name: 'TV Samsung', price: 459 },
    { name: 'Viaje a Cancún', price: 600 },
    { name: 'Mascarilla', price: 1 }
];

const result6 = inventory
    .filter(item => item.price > 300)  // Filtra los elementos con precio mayor a 300
    .map(item => item.name);  // Extrae solo los nombres de los elementos

// Muestra el array como está, pero con los elementos en líneas separadas
console.log(result6);

// REDUCE

6 / 7.
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((acc, num) => acc * num, 1);
console.log(result7);

7 / 8.
const sentenceElements = [
    'Me',
    'llamo',
    'Franco',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const result8 = sentenceElements.reduce((acc, word) => acc + ' ' + word);
console.log(result8);

8 / 9.
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const result9 = books
    .filter(book => book.category === 'code')
    .reduce((acc, book) => acc + book.price, 0);

console.log(result9);
