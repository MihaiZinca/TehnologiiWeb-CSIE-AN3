const groceryStore = [
    { name: 'Apples', price: '1', unit: 'kg' },
    { name: 'Bread', price: '0.5', unit: 'pcs'},
    { name: 'Milk', price: '2', unit: 'pcs' },
    { name: 'Water', price: '1', unit: 'pcs' },
    { name: 'Eggs', price: '1.5', unit: 'pcs' },
    { name: 'Beer', price: '3', unit: 'pcs'},
];

// function search(letter){
//     return groceryStore.filter((item) =>
//         item.name.toLowerCase().includes(letter.toLowerCase())
//         );
//     };

    // for (let item of groceryStore){
    //     if(item.name.toLowerCase().includes(letter.toLowerCase()))
    //     {
    //         results.push(item);
    //     }
    // }

function search(substring){
    return groceryStore.filter((item) =>
        item.name.toLowerCase().includes(substring.toLowerCase())
        );
    };

//const results = search1('er');

const substring = process.argv[2];

if (!substring) {
    console.log('Please provide a search term.');
    process.exit(1);
}

if (!isNaN(substring)) {
    console.log('Search term must be a string, not a number.');
    process.exit(1);
}

const results = search(substring);

if (results.length === 0)
{
    console.log('No results found.');
    return;
}

console.log(`Found ${results.length} products which match the given search criteria`);
console.log(results);

//script astf il sa apelez node index.js er, literele pe care le caut sa nu fie hardocate in prog