"use Strict"
import {UserInterface} from "./ui.js";
import {GamesList} from "./gamesList.js"

const ui=new UserInterface();
const games= new GamesList();
const navLinks=Array.from(document.querySelectorAll('.nav-link'));



navLinks.forEach((n)=>{
n.addEventListener('click',(e)=>{
    ui.navigateLink(e.target);
  games.getGames(`${e.target.getAttribute('id')}`).then(function () {
    const cards=Array.from(document.querySelectorAll('.game-card'));
   
    
    cards.forEach((c)=>{
c.addEventListener('click',function(e){

 
    
    games.showGameDetails(e.currentTarget.getAttribute('data-game-id'));
})
    })
    
    
});
   
})
});


games.getGames('mmorpg').then(function () {
    const cards=Array.from(document.querySelectorAll('.game-card'));
   
    
    cards.forEach((c)=>{
c.addEventListener('click',function(e){
console.log('hi');
 
    
    games.showGameDetails(e.currentTarget.getAttribute('data-game-id'));
});
    });
    
    
});

