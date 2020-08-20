const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let firstRowA = firstRow.split("а").length-1;
    let secondRowА = secondRow.split("а").length-1;
    if (firstRowA > secondRowА) {
        console.log(firstRow);
    } else {
        console.log(secondRow);
    }
}

getRow(firstRow, secondRow); 
