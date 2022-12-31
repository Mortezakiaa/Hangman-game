let demo = document.getElementById("demo");
let secretwords = ['nba' , 'cloner' , 'bascketball' , 'programmer' , 'iran'  , 'usa' , 'joker' , 'moriane'];
let btns = document.querySelector(".words").childNodes;


let randomitem = '';
let clickedword = [];
let result = '';
let mistakes = 0;


function createrandom(){
    randomitem = secretwords[Math.floor(Math.random()*secretwords.length)];
    btns.forEach(btn=>{
        btn.addEventListener('click' , clickbtn);
    });
    window.addEventListener('keydown' , keyboard);
}



function clickbtn(letter){
    letter = letter.target;
    letter.classList.add('disabled');
    clickedword.push(letter.innerText.toLowerCase());
    if(randomitem.indexOf(letter.innerText.toLowerCase()) >= 0){
        createunderscore();
        checkwin();
    }else{
        mistakes++;
        checklose();
    }
}

function keyboard(event){
    event = event.key;
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(item =>{
        if(item.innerText.toLowerCase() === event){
            item.classList.add('disabled');
        }
    })
    clickedword.push(event);
    if(randomitem.indexOf(event) >= 0){
        createunderscore();
        checkwin();
    }else{
        mistakes++;
        checklose();
    }
}


function createunderscore(){
    let splitedword = randomitem.split("");
    let mapword = splitedword.map(letter => clickedword.indexOf(letter) >= 0 ? letter : "_");
    result = mapword.join("");
    demo.innerHTML = result;
}



function checkwin(){
    if(randomitem === result){
        document.getElementById("hangman").src = "pics/winner.png";
        setTimeout(() => {
            window.location.reload(); 
         }, 3000);
    }
}

function checklose(){
    document.getElementById('hangman').src = `pics/hangman${mistakes}.png`;
    if(mistakes === 6){
        document.getElementById("output").innerHTML = `Random Word is : ${randomitem}<br> you lose`
        setTimeout(() => {
           window.location.reload(); 
        }, 3000);
    }
}




createrandom();
createunderscore();
