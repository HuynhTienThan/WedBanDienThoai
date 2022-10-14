
// form đăng nhập
var TaiKhoan=document.querySelector(".js-tai-khoan")
var formLogin=document.querySelector(".form-dang-nhap")
TaiKhoan.onclick = function(){
    if(formLogin.style.display=="none"){
        TaiKhoan.setAttribute("style","color: white ")
        formLogin.setAttribute("style","display:block;")
    }else{
        formLogin.setAttribute("style","display:none;")
        TaiKhoan.setAttribute("style","color:rgba(255, 255,255, 0.6);")
    }
}

// chuyển đổi ảnh
var slide = document.querySelector('#slide')
var index=0
chuyenDoi = function (){
    var a = ["../img/slide2.png","../img/slide3.png","../img/slide4.png","../img/slide0.png","../img/slide1.png",]
    slide.src=a[index]
    index++
    if(index==4){
        index=0
    }
}
setInterval (chuyenDoi,3000)

//Tim2 


// selector list phone
var hangMoiVe = document.querySelector('.body .hang-moi-ve')
var apple = document.querySelector('.body .apple')
var samsung = document.querySelector('.body .samsung')
var htc = document.querySelector('.body .htc')
var oppo = document.querySelector('.body .oppo')
var xiaomi = document.querySelector('.body .xiaomi')
var sanPhamKhac = document.querySelector('.body .san-pham-khac')
var Alls=document.querySelectorAll('.list-selector-body .list-selector')

var displayAlls = document.querySelectorAll('.list-phone .information')
var displayXiaomi = document.querySelector('.list-phone .xiaomi')
var displaySamsungs = document.querySelectorAll('.list-phone .samsung')
var displayApples = document.querySelectorAll('.list-phone .apple')
var displayOppo = document.querySelector('.list-phone .oppo')
var displayHtc = document.querySelector('.list-phone .htc')

hangMoiVe.onclick = function(){
    hangMoiVe.setAttribute("style","background-color: rgb(16 150 222);color: white;")
    displayXiaomi.style.display="block"
    for(var i=1;i<displayAlls.length ;i++){ 
        displayAlls[i].style.display="none"
    }
    for(var x=1;x<Alls.length;x++){
        Alls[x].setAttribute("style" ,"background-color: white;color: rgb(16 150 222);")
    }
}
sanPhamKhac.onclick = function(){
    sanPhamKhac.setAttribute("style","background-color: rgb(16 150 222);color: white;")
    for(var i=0;i<displayAlls.length ;i++){ 
        displayAlls[i].style.display="block"
    }
    for(var x=0;x<Alls.length;x++){
        if(x!=6){
            Alls[x].setAttribute("style" ,"background-color: white;color: rgb(16 150 222);")
        }
    }
}
apple.onclick = function(){
    apple.setAttribute("style","background-color: rgb(16 150 222);color: white;")
    for(var i=0;i<displayApples.length;i++){
        displayApples[i].style.display="block"
    }
    for(var j=0;j<displayAlls.length ;j++){
        if(j!=2 && j!=6 && j!=7){
            displayAlls[j].style.display="none"
        }
    }
    for(var x=0;x<Alls.length;x++){
        if(x!=1){
            Alls[x].setAttribute("style" ,"background-color: white;color: rgb(16 150 222);")
        }
    }
}
samsung.onclick = function(){
    samsung.setAttribute("style","background-color: rgb(16 150 222);color: white;")
    for(var i=0;i<displaySamsungs.length;i++){
        displaySamsungs[i].style.display="block"
    }
    for(var j=0;j<displayAlls.length ;j++){
        if(j!=1 && j!=3){
            displayAlls[j].style.display="none"
        }
    }
    for(var x=0;x<Alls.length;x++){
        if(x!=2){
            Alls[x].setAttribute("style" ,"background-color: white;color: rgb(16 150 222);")
        }
    }
}
htc.onclick = function(){
    htc.setAttribute("style","background-color: rgb(16 150 222);color: white;")
    displayHtc.style.display="block"
    for(var j=0;j<displayAlls.length ;j++){
        if(j!=5){
            displayAlls[j].style.display="none"
        }
    }
    for(var x=0;x<Alls.length;x++){
        if(x!=3){
            Alls[x].setAttribute("style" ,"background-color: white;color: rgb(16 150 222);")
        }
    }
}
xiaomi.onclick = function(){
    xiaomi.setAttribute("style","background-color: rgb(16 150 222);color: white;")
    displayXiaomi.style.display="block"
    for(var i=1;i<displayAlls.length ;i++){ 
        displayAlls[i].style.display="none"
    }
    for(var x=0;x<Alls.length;x++){
        if(x!=5){
            Alls[x].setAttribute("style" ,"background-color: white;color: rgb(16 150 222);")
        }
    }
}
oppo.onclick = function(){
    oppo.setAttribute("style","background-color: rgb(16 150 222);color: white;")
    displayOppo.style.display="block"
    for(var i=0;i<displayAlls.length ;i++){
        if (i!=4){
            displayAlls[i].style.display="none"
        }
    }
    for(var x=0;x<Alls.length;x++){
        if(x!=4){
            Alls[x].setAttribute("style" ,"background-color: white;color: rgb(16 150 222);")
        }
    }
}

