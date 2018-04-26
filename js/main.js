const chooseOptionBoxNode = document.getElementById("choose-box");
const questionBoxNode = document.getElementById("question-box");
const questionNode = document.getElementById("question");

let easyQuestionDatabase = ["Jaki jest twój ulubiony kolor?","Jak mial na imie twój pierwszy pies?","Jak miała na imie twoja pierwsza dziewczyna/chłopak?","Jaką kuchnie lubisz najbardziej?","Jaki jest twój ulubiony typ alkoholu?"];
let hotQuestionDatabase = ["Hot pytanie 1","Hot pytanie 2","Hot pytanie 3","Hot pytanie 4"];


var pytania = function(bazaPytan){
    
    var bazaPytanLength = bazaPytan.length;
    var bazaPytanIndex = [];
  
    var wypelnijTabeleIndex = function(){
      for(j = 0;j<bazaPytanLength;j++){
        bazaPytanIndex.push(j);
      }
    }
    wypelnijTabeleIndex();
    
    this.dodajPytanie = function(nowePytanie){
        bazaPytan.push(nowePytanie);
        bazaPytanLength++;
        bazaPytanIndex = [];
        wypelnijTabeleIndex();
    }
    
    this.zadajPytanie = function(){
        if(bazaPytan == undefined)console.log("blad w odczycie bazy danych");
        var i = wylosowany()
        var index = getRandomInt(i,i+1);
        var temp = bazaPytan[bazaPytanIndex[i]];
        usunZadanePytanie(i);
        if(temp == undefined)temp = "Koniec pytań";
        return temp;
    }
    
    var usunZadanePytanie = function(index) {
        var temp2 = bazaPytanIndex.splice(index,1);
    }
    
    var wylosowany = function(){
        var dlugosc = bazaPytanIndex.length;
        var temp = getRandomInt(0,dlugosc-1);
        return temp;     
    }    
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}

var quizEasy = new pytania(easyQuestionDatabase);
var quizHot = new pytania(hotQuestionDatabase);


function hotClick(){
    chooseOptionBoxNode.style = "display: none";
    questionBoxNode.style = "display: block";
    questionNode.innerHTML = quizHot.zadajPytanie();
}

function easyClick(){
    chooseOptionBoxNode.style = "display: none";
    questionBoxNode.style = "display: block";
    questionNode.innerHTML = quizEasy.zadajPytanie();
}

function showNextEasyQuestion(){
    questionNode.innerHTML = quizEasy.zadajPytanie();
}

function showNextHotQuestion(){
    questionNode.innerHTML = quizHot.zadajPytanie();
}

