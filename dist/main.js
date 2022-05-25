(()=>{"use strict";class r{constructor(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]],this.gameStatus=!0}addShip(r,e,t,a){if(e=parseInt(e),t=parseInt(t),"h"===a){let a=0;for(;a<r;){if(""!==this.boardArray[e][t+a])return"Error, cannot place here!";a+=1}for(a=0;a<r;)this.boardArray[e][t+a]="o",a+=1}if("v"===a){let a=0;for(;a<r;){if(""!==this.boardArray[e+a][t])return"Error, cannot place here!";a+=1}for(a=0;a<r;)this.boardArray[e+a][t]="o",a+=1}}fireAt(r,e){!0===this.gameStatus&&("o"===this.boardArray[r][e]?this.boardArray[r][e]="x":""===this.boardArray[r][e]&&(this.boardArray[r][e]="m"),this.checkWin())}checkWin(){for(const r of this.boardArray)for(const e of r)if("o"===e)return;console.log("Game Over!"),this.gameStatus=!1}resetBoard(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]}}function e(r){let e=0,t=document.createElement("div");for(;e<6;){let a=document.createElement("div");a.setAttribute("class",`column${e}`),a.addEventListener("click",(()=>{if(!1===r.fireMode){let e=a.className.slice(-1),t=a.parentNode.className.slice(-1);r.addShipsP1(t,e,"v"),o(r)}})),t.appendChild(a),e+=1}return t}function t(r){let e=0,t=document.createElement("div");for(;e<6;){let a=document.createElement("div");a.setAttribute("class",`column${e}`),a.addEventListener("click",(()=>{if(!1===r.fireMode){let e=a.className.slice(-1),t=a.parentNode.className.slice(-1);r.addShipsP2(t,e,"v"),s(r)}})),t.appendChild(a),e+=1}return t}function a(r,a){let o=0;if("boardDisplay1"===a)for(;o<6;){let t=e(r);t.setAttribute("class",`row${o}`),document.querySelector(`#${a}`).appendChild(t),o+=1}if("boardDisplay2"===a)for(;o<6;){let e=t(r);e.setAttribute("class",`row${o}`),document.querySelector(`#${a}`).appendChild(e),o+=1}}function o(r){let e=0,t=0;for(;e<6;){for(t=0;t<6;){let a=document.querySelectorAll(`#boardDisplay1 .row${e} .column${t}`);for(const o of a)o.innerText=r.player1Board.boardArray[e][t];t+=1}e+=1}}function s(r){let e=0,t=0;for(;e<6;){for(t=0;t<6;){let a=document.querySelectorAll(`#boardDisplay2 .row${e} .column${t}`);for(const o of a)o.innerText=r.player2Board.boardArray[e][t];t+=1}e+=1}}const i=new class{constructor(){this.player1Board=new r,this.player2Board=new r,this.turn=0,this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1}startGame(){this.turn=0,this.player1Board.gameStatus=!0,this.player2Board.gameStatus=!0,this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1}addShipsP1(r,e,t){let a=0;for(;a<3;){if(""!==this.player1Board.boardArray[parseInt(r)+a][parseInt(e)])return void console.log("error cannot place here");a+=1}!1===this.ship1[0]?(this.player1Board.addShip(3,r,e,t),this.ship1[0]=!0):!1===this.ship2[0]?(this.player1Board.addShip(4,r,e,t),this.ship2[0]=!0):!1===this.ship3[0]&&(this.player1Board.addShip(5,r,e,t),this.ship3[0]=!0),console.log("board1:"),console.log(this.player1Board.boardArray)}addShipsP2(r,e,t){let a=0;for(;a<3;){if(""!==this.player2Board.boardArray[parseInt(r)+a][parseInt(e)])return;a+=1}!1===this.ship1[1]?(this.player2Board.addShip(3,r,e,t),this.ship1[1]=!0):!1===this.ship2[1]?(this.player2Board.addShip(4,r,e,t),this.ship2[1]=!0):!1===this.ship3[1]&&(this.player2Board.addShip(5,r,e,t),this.ship3[1]=!0),console.log("board2:"),console.log(this.player2Board.boardArray)}playRound(r){let e,t;for(;!0===this.player1Board.gameStatus&&!0===this.player2Board.gameStatus;)return this.turn%2==0?(e=r("What is the row?"),t=r("What is a column?"),this.player1Board.fireAt(e,t),console.log(this.player1Board.boardArray)):(e=r("What is the row?"),t=r("What is a column?"),this.player2Board.fireAt(e,t),console.log(this.player2Board.boardArray)),this.turn+=1,"Round is played";return console.log("Game is Over"),"Game is Over"}resetGame(){this.player1Board.resetBoard(),this.player2Board.resetBoard()}};document.querySelector("#startGame").addEventListener("click",(()=>{i.startGame(prompt),a(i,"boardDisplay1"),a(i,"boardDisplay2")})),document.querySelector("#fireAt").addEventListener("click",(()=>{!function(r){r.fireMode=!0;let e=0,t=0;for(;e<6;){for(t=0;t<6;){let a=document.querySelectorAll(`#boardDisplay1 .row${e} .column${t}`);for(const s of a){let a=e,i=t;s.addEventListener("click",(()=>{!0===r.player1Board.gameStatus&&!0===r.player2Board.gameStatus&&(r.player1Board.fireAt(a,i),o(r))}))}t+=1}e+=1}}(i),function(r){r.fireMode=!0;let e=0,t=0;for(;e<6;){for(t=0;t<6;){let a=document.querySelectorAll(`#boardDisplay2 .row${e} .column${t}`);for(const o of a){let a=e,i=t;o.addEventListener("click",(()=>{!0===r.player1Board.gameStatus&&!0===r.player2Board.gameStatus&&(r.player2Board.fireAt(a,i),s(r))}))}t+=1}e+=1}}(i)}))})();