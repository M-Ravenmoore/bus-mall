var parentElement = document.getElementById('img-container');
var dataParentElement = document.getElementById('rendered data');
var maxVotes = 25;
var lablesArr= []
var clicksArr = []
var looksArr = []
var voteOnNum = 3
var matchImages = []

//constructor to make item instanaces
function Image(name){    
    this.filepath = `../img/${name}`;
    this.alt = name.slice(0,-4);
    // slice function from StackOverflow: https://stackoverflow.com/questions/952924/javascript-chop-slice-trim-off-last-character-in-string
    this.title = name.slice(0,-4);
    
    console.log(this);
    this.clicks = 0;
    this.looks = 0;
}

var bag = new Image('bag.jpg');
var banana = new Image("banana.jpg");
var bathroom = new Image("bathroom.jpg");
var boots = new Image("boots.jpg");
var breakfast = new Image("breakfast.jpg");
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



function imgSet(numberOfPics){
    for(var i = 0;i<numberOfPics;i++){
        getRandomImgs();
    }
}
function getRandomImgs(){

    //randomize the images
    var randomIndex = getRandomMax(objectArr.length);
    
//make an array with 6 non matching images to keep repitition down
    while(matchImages.includes(randomIndex)){
        randomIndex = getRandomMax(objectArr.length);
      }
    matchImages.push(randomIndex);
    if(matchImages.length > 10){
        matchImages.shift();
    }
    var randomImg = objectArr[randomIndex]


    var imageElement = document.createElement('img');
    imageElement.setAttribute('src',randomImg.filepath);
    imageElement.setAttribute('alt',randomImg.alt);
    imageElement.setAttribute('title', randomImg.title);
    parentElement.appendChild(imageElement);
    randomImg.looks++;
    
    var labelElement = document.createElement('label');
    var inputElement = document.createElement('input');
    inputElement.setAttribute('type','radio');
    inputElement.setAttribute('alt', randomImg.alt);
    labelElement.innerHTML ="clickme";
    labelElement.appendChild(inputElement);
    parentElement.appendChild(labelElement)
}
function pullInfo(){
    for(var i = 0 ; i < objectArr.length; i++){
    lablesArr.push(objectArr[i].alt);
    clicksArr.push(objectArr[i].clicks);
    looksArr.push(objectArr[i].looks);
    }
}

function getRandomMax(max){
    return Math.floor(Math.random()* Math.floor(max));
}
// Puts text version of data on page
function generateData(){
    for (var i = 0; i < objectArr.length; i++) {
        var dataElement = document.createElement("li");
        console.log(objectArr[i])
        dataElement.textContent = `for product: ${objectArr[i].alt} it has ${objectArr[i].clicks} clicks and ${objectArr[i].looks} views`;
        console.log(objectArr[i]);
        dataParentElement.appendChild(dataElement);
    }
}
// creates the graphical data
function graph(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: lablesArr,
            datasets: [{
                label: '# of Votes',
                data: clicksArr,
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
function graph(){
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: lablesArr,
            datasets: [{
                label: '# of Votes',
                data: clicksArr,
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
function graph2(){
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: lablesArr,
            datasets: [{
                label: '# of Votes',
                data: looksArr,
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

function userClick(){
    var alt = event.target.alt;
    maxVotes--;
        console.log(`event.target is ${event.target}`)
        if (maxVotes !== 0) {
            for (var i = 0; i < objectArr.length; i++) {
              if (alt === objectArr[i].alt) {
                objectArr[i].clicks++;
                }       
            }
            parentElement.innerHTML = '';
            imgSet(voteOnNum);
            } else{
            parentElement.innerHTML = '';
            pullInfo();
            generateData();
            graph();
            graph2();
            };
}
    
parentElement.addEventListener('click', userClick);

imgSet(voteOnNum);
