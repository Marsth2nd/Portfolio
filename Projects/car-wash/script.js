function removeIt(){
    document.getElementById('showbtn').remove()   
}
var pic = document.getElementById('blueCarPic')
function changePic(){
pic.src="WebFund/blue-super-car.png"
}
function decreaseNum(event) {
    
    const buttons = document.querySelectorAll(".sections-btns");
    const nums = document.querySelectorAll(".Anums");
    const clickedBtn = event.target;
    const index = Array.from(buttons).indexOf(clickedBtn);

    if (index !== -1 && nums[index]) {
        let current = parseInt(nums[index].innerText);
        if (current > 0) {
            nums[index].innerText = current - 1;
        }
    }
}var Cpic = document.getElementById('client')
function changeClientPic(){
Cpic.src="WebFund/client.png"
}
var text=document.getElementById('text')
function changeText(){
    text.innerText="Im Proud Of All Of You the clients and the staff every one here is a piece of our succes our community is always our first thing that we care about always remember we bla bla and bla blla blla and always blla blla blaaa that think that ou bla lla is the best blla blla in the country ALWAYS REMEMBER WE LOVE YOU ALL"

}