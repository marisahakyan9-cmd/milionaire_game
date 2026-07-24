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