const fs = require('fs');

const data = {
    name: 'Probability & Statistics for Engineers & Scientists',
    edition: '9th',
    writer: 'Walpole, Myers, Myers, Ye',
    publisher: 'Pearson Prentice Hall',
    date: 2012,
}

fs.writeFileSync("textbook.json", JSON.stringify(data));