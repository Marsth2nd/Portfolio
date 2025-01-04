console.log("page loaded...");

function changeName(){
        document.getElementById('cardName').innerHTML="The Batman" 
        var avatar =document.getElementById('avataros')
        avatar.src="images/TheBatman.jpeg"
    }

// Without Bonus
// function removePerson(element) {
// document.getElementById(element).remove();
// }


// With BONUS
function removePersonWithBonus(element){
        document.getElementById(element).remove()
        var badgeNum=document.querySelectorAll('.badge')
        badgeNum[0].innerHTML -=1;
        // badgeNum[1].innerHTML +=1;
    }
function removePersonWithIncrease(element){
        removePersonWithBonus(element);
        var connections=document.querySelectorAll('.badge');
        var badgeNum=connections[1].innerHTML;
        connections[1].innerHTML=parseInt(badgeNum)+1;
    }