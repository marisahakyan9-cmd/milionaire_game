'use strict';

let mainGame = document.querySelector('.game-block'),
gameWrapper = document.querySelector('.game-wrap'),
startBtn = document.querySelector('.start-btn'),
entBtn = document.querySelector('.end-btn'),
btnAswers = document.querySelectorAll('.answer'),
blockQuestion = document.querySelectorAll('.question'),
helpBtns = document.querySelectorAll('.hints-help'),
winBlock = document.querySelectorAll('.wins-block'),
helpFifty = document.querySelector('.fifty-fifty'),
helpHall = document.querySelector('.hall-help'),
helpFriend = document.querySelector('.call-friend'),
helpAi = document.querySelector('.ai-help'),
game = document.querySelector('.game')
/////==========>
let changeQuestion = document.getElementById('hintBox')
let extraQuestion = document.getElementById('extra')
let flasExtra = true
let endB = document.getElementById('end')
const popup =document.getElementById('rulesPopup')
const showBtn = document.getElementById('showRules')
let aiExplainBlock = document.getElementById('aiExplainBlock');
let aiExplainText = document.getElementById('aiExplainText');
let aiExplainClose = document.getElementById('aiExplainClose');
const OPENAI_KEY = ''
const OPENAI_MODEL = ''

showBtn.addEventListener('click',function(){
    popup.classList.add('show')
})

popup.addEventListener('click',function(){
    popup.classList.remove('show')
})

const generalMusic = new Audio

//// end 




// Խաղի սկիզբը
startBtn.addEventListener('click', () => {//Խաղի սկիզբը կոճակի վրա սեղմելիս , պետք է կատարվեն այս ֆունկցիայում ներառված գործողությւոնները
  generalMusic.pause();
  generalMusic.currentTime = 0;
  game.style.backgroundImage = "url('./img/galaxy.jpg')";
  game.style.backgroundSize="100%"

  startBtn.classList.add('animate__animated', 'animate__backOutUp');//նախապես ունեցած կոճակի վրա ավելացնում ենք այս երկու անիմացիաները
  mainGame.classList.remove('animate__backOutDown');//mainGame-ից հեռացնում ենք այս կլաս անուն ունեցող անիմացիան
  showBtn.remove()
  setTimeout(() => {//Ցույց է տալիս թե ինչքան ժամանակ հետո պետք է կատարվի տվյալ գործողությունը
    mainGame.style.display = 'block';
    mainGame.classList.add('animate__animated', 'animate__backInUp');//mainGame-ին ավելացնումէ է նախապես ստեղծված  կլաս անվանում
    startBtn.style.display = 'none';
    setTimeout(() => {
      gameWrapper.classList.add('animate__animated', 'animate__flipInX');//gameWrapper-ին ավելացնումէ է նախապես ստեղծված  կլաս անվանում
    }, 1000);
  }, 500);
  setTimeout(() => {
    endBtn.style.opacity = '1';// տրված է առավելագույն թափանցելիություն
  }, 1000);
  //
  setTimeout(() => {
    questionSong.loop = true
    questionSong.play()
    for (let i = 0; i < btnAnswers.length; i++) {
      btnAnswers[i].addEventListener('click', () => {
        questionSong.pause()
        setTimeout(() => {
          if (count != 5 && count != 10 && count != 15) {
            if (incorrectSoundFlag == false && count < 5) {
              questionSong.play()
            }
            if (count == 15) {
              fixed1.pause()
            }
            questionSong.currentTime = 0
          } else if (count >= 5) {
            fixed1.loop = true
            fixed1.play()
            questionSong.pause()
          }
        }, 3000);

      })
    }
  }, 2000);
});

btnAswers.forEach((btnAnswer)=>{
    btnAnswer.addEventListener('click',(e)=>{
        let numberQuestion = btnAnswer.parentElement.parentElement.classList[1];
        let userAnswer = e.target.innerText
        let blockAnswer = e.target
        let blockQuestionParentElement = blockAnswer.parentElement;
        blockQuestionParentElement.classList.add('block-event')
        correctnessAnswer(numberQuestion,userAnswer.blockAnswer,blockQuestionParentElement)
    });
});

btnAswers.forEach((item)=>{
    item.addEventListener('mouseover', ()=>{
        if(item.children[0]){
            item.children[0].style.display="none"
            item.classList.remove('color-active')

        }
    });
});
let helpSound = new Audio('./music/50-50 .mp3')