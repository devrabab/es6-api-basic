const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini`;
const multiLine = 'This is my first line  \n'+
    'this is second line \n'+
    'this is third line \n'+
    'this is fourth line';

    const newMultiLine = `this is 1st line
    this is 2nd line
    this is 3rd line
    this is 4th line
    `
    const friends = ['abul', 'babul', 'kabul', 'sabul'];
    const count = 5;
    const old = '<h3 class="friend-name">Friend-5</h3>'
    // old method 
    const old2 = '<h3 class="friend-name">Friend-'+ count + '</h3>' 
    // new method 
    const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`
    // console.log(new1);

    const first = 'Mamun';
    const last = 'Chowdhury';
    const fullOld = first + ' ' + last;
    const fullNew = `${first} ${last}`;

    console.log(fullNew);
    // console.log(multiLine);
    // console.log(newMultiLine);