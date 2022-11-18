// Exercise 1;
// Timezone;
let timeNow = new Date();
// convert to msec since Jan 1 1970
let localTime = timeNow.getTime();
// obtain local UTC offset and convert to msec
localOffset = timeNow.getTimezoneOffset() * 60000; // *60000 to change to milleseconds
// obtain UTC time in msec
utc = localTime + localOffset;
// obtain and add destination’s UTC time offset
// brussels 
var offset = +1;
Brussels = utc + (3600000 * offset);
nd = new Date(Brussels);
document.writeln("Brussels time is " + nd.toLocaleString() + "<br>");
// Anchorage (USA) = -9
var offset = -9;
Anchorage = utc + (3600000 * offset);
nd = new Date(Anchorage);
document.writeln("Anchorage time is " + nd.toLocaleString() + "<br>");

//  Reykjavik (Iceland)
var offset = 0;
Reykjavik = utc + (3600000 * offset);
nd = new Date(Reykjavik);
document.writeln("Reykjavik time is " + nd.toLocaleString() + "<br>");
// Saint-Petersburg (Russia)
var offset = 3;
SaintPetersburg = utc + (3600000 * offset);
nd = new Date(SaintPetersburg);
document.writeln("SaintPetersburg time is " + nd.toLocaleString() + "<br>");


// Exercise 2 
// timeStamps , how many days have passed since the date of my birthday till now;

function feelingOLd() {
    const dateNow = new Date();
    const birthday = new Date("12/25/1985")
    const diffirent = Math.floor((dateNow - birthday) / 1000 / 60 / 60 / 24);
    return diffirent;
}
feelingOLd();
document.write(`Since the date of my birthday till now I have passed ${feelingOLd()} days <br>`);
// how many days have passed since any point in time( after 1970);
function passedDays(timePoint) {
    const dNow = new Date().getTime(); // date now 
    const pointeTime = new Date(timePoint).getTime();
    let daysPassed = Math.floor((dNow - pointeTime) / 1000 / 60 / 60 / 24);

    return daysPassed;
}
passedDays()
// const days = passedDays("11/16/2022")
document.write(`Since the point in time after 1970 till now  passed ${passedDays("12/25/1985")} days <br>`);

// Exercise 3 ;
// find the exact time and date we will be in 8000 hours.

const div = document.createElement('div');
document.body.prepend(div);
const input = document.createElement('input');
input.type = 'number'
div.append(input);
const output = document.createElement('div');
div.append(output);

const newDate = (new Date()).getTime();

input.addEventListener('keyup', (event) => {
    if (event.target.value) {
        const getDate = new Date(newDate + event.target.value * 60 * 60 * 1000);
        output.textContent = getDate
    }
});
