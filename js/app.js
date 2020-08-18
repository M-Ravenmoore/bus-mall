var parentElement = document.getElementById('img-container');

var imageArr = [];
var maxVotes = 10;

function Image(name, ext){
    this.filepath = `../img/${name}.${ext}`;
    this.alt = name;
    this.title = name;
    this.clicks = 0;
    this.show = 0;
    
    imageArr.push(this);
}

new Image("bag","jpg");
new Image("banana","jpg");
new Image("bathroom","jpg");
new Image("boots","jpg");
new Image("breakfast","jpg");
new Image("bubblegum","jpg");
new Image("chair","jpg")
new Image("cthulhu","jpg");
new Image("dog-duck","jpg");
new Image("dragon","jpg");
new Image("pen","jpg");
new Image("dog-duck","jpg");
new Image("pet-sweep","jpg")
new Image("scissors","jpg");
new Image("shark","jpg");
new Image("sweep","png")
new Image("tauntaun","jpg");
new Image("unicorn","jpg");
new Image("water-can","jpg");
new Image("wine-glass","jpg");
new Image("usb","gif");

function getRandomImgs(){
    var randomIndex = getRandomMax(imageArr.length)
    var randomImg = imageArr[randomIndex]

    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', randomImg.filepath);
    imageElement.setAttribute('alt', randomImg.alt);
    imageElement.setAttribute('title', randomImg.title);
    parentElement.appendChild(imageElement);
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

function userClick(){
    var alt = event.target.alt;
    maxVotes--
        console.log(`event.target is ${event.target.alt}`)
        for (var i = 0 ; i > imageArr.length;i++){
            if(alt === imageArr[i].alt){
                imageArr.push.clicks++;
                }
        }
        console.log(`user clicked ${imageArr} it has ${imageArr.clicks} clicks`);
        parentElement.innerHTML = '';
        getRandomImgs();
        getRandomImgs();
        getRandomImgs();
    }        
    
parentElement.addEventListener('click', userClick);

getRandomImgs();
getRandomImgs();
getRandomImgs();
