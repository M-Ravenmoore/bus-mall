var parentElement = document.getElementById('img-container');
var dataParentElement = document.getElementById('rendered data');
var maxVotes = 5;



//constructor to make item instanaces
function Image(name){    
    this.filepath = `../img/${name}`;
    this.alt = name.slice(0,-4);
    // slice function from StackOverflow: https://stackoverflow.com/questions/952924/javascript-chop-slice-trim-off-last-character-in-string
    this.title = name.slice(0,-4);
    
    console.log(this);
    this.clicks = 0;
    this.show = 0;
}

var bag = new Image('bag.jpg');
var banana = new Image("banana.jpg");
var bathroom = new Image("bathroom.jpg");
var boots = new Image("boots.jpg");
var breakfast = new Image("brakfast.jpg");
var bubblegum = new Image("bubblegum.jpg");
var chair = new Image("chair.jpg");
var cthulhu = new Image("cthulhu.jpg");
var dogduck = new Image("dog-duck.jpg");
var dragon = new Image("dragon.jpg");
var pen = new Image("pen.jpg");
var petsweep = new Image("pet-sweep.jpg");
var scissors = new Image("scissors.jpg");
var shark = new Image("shark.jpg");
var sweep = new Image("sweep.png");
var tauntaun = new Image("tauntaun.jpg");
var unicorn = new Image("unicorn.jpg");
var usb = new Image("usb.gif");
var watercan = new Image("water-can.jpg");
var wineglass = new Image("wine-glass.jpg")

//must be below new objects for this project!!
var objectArr = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogduck,dragon,pen,petsweep,scissors,shark,sweep,tauntaun,unicorn,usb,watercan,wineglass];

//helper functions
console.log("line44",objectArr)
// get a random image from the object list

function getRandomImgs(){
    var randomIndex = getRandomMax(objectArr.length)
    console.log(randomIndex)
    var randomImg = objectArr[randomIndex];
    // randomImg.show++;
    console.log(randomImg);
// wants to be a seprate func when i have time
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', randomImg.filepath);
    imageElement.setAttribute('alt', randomImg.alt);
    imageElement.setAttribute('title', randomImg.title);
    parentElement.appendChild(imageElement);
// wants to be a func
    var labelElement = document.createElement('label');
    var inputElement = document.createElement('input');
    inputElement.setAttribute('type','radio');
    inputElement.setAttribute('alt', randomImg.alt);
    labelElement.innerHTML ="clickme";
    labelElement.appendChild(inputElement);
    parentElement.appendChild(labelElement)
}


function getRandomMax(max){
    return Math.floor(Math.random()* Math.floor(max));
}

// event click generate random number between 0 and imgArr.length
function generateData(){
    // put data on page
    for (var i = 0; i < objectArr.length; i++) {
        var dataElement = document.createElement("data");
        console.log(objectArr[i])
        dataElement.textContent = objectArr[i].alt;
        console.log(objectArr[i]);
        dataParentElement.appendChild(dataElement);
    }
}
function userClick(){
    var alt = event.target.alt;
    maxVotes--;
        console.log(`event.target is ${event.target}`)
        if (maxVotes !== 0) {
            for (var i = 0; i < objectArr.length; i++) {
              if (alt === objectArr[i].alt) {
                objectArr[i].clicks++;
            }
            console.log(`user clicked it has ${objectArr[i].clicks} clicks`);       
            }
            parentElement.innerHTML = '';
            getRandomImgs();
            getRandomImgs();
            getRandomImgs();
        } else{
            parentElement.innerHTML = '';
            generateData();
            graph();
        };
}
// function makeLables{
//  var lablesArr= [];
//  var dataArr = [];


// }


function graph(){
    console.log("line108",objectArr[i].alt)
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: '# of Votes',
                data: objectArr.clicks,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
    
parentElement.addEventListener('click', userClick);

getRandomImgs();
getRandomImgs();
getRandomImgs();
