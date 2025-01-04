// alert("Hola Amigos Estamos En Mi Biblioteca")

function hideSection(){
    document.querySelector('.left-nav-bar').remove()
    }
function changePic(){
    var pic=document.getElementById('profilepic')
    pic.src="/images/secondppic.jpg"
    }
function bookApp(){
    document.getElementById('bookbtn').remove();
    var num = document.getElementById('bookNum')
    num = num.innerText -=1;
}