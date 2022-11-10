
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
    var a = ["img/slide2.png","img/slide3.png","img/slide4.png","img/slide0.png","img/slide1.png",]
    slide.src=a[index]
    index++
    if(index==4){
        index=0
    }
}
setInterval (chuyenDoi,3000)

//Tìm Kiếm Sản Phẩm
var listClassPhone=[".list-phone .phone1",".list-phone .phone2",".list-phone .phone3",".list-phone .phone4",".list-phone .phone5",".list-phone .phone6",".list-phone .phone7",".list-phone .phone8",]

function TimKiemSanPham(){
    var value=document.querySelector('#txtSearch').value
    document.querySelector('#txtSearch').value=""
    var timThay=false
    var listPhone=["Xiaomi Redmi Note 7 (64GB)","Samsung Galaxy A50 (64GB)","iPhone 6s Plus (32GB)","Samsung Galaxy A10","OPPO A5s","Vivo Y15","iPhone Xs Max (64GB)","iPhone X (256GB)"]
    var listClassPhone=[".list-phone .phone1",".list-phone .phone2",".list-phone .phone3",".list-phone .phone4",".list-phone .phone5",".list-phone .phone6",".list-phone .phone7",".list-phone .phone8"]
    for (var i = 0;i<listPhone.length;i++){
        if(listPhone[i].includes(value)){
            document.querySelector(listClassPhone[i]).setAttribute("style","display:block;")
            timThay=true
        }else{
            document.querySelector(listClassPhone[i]).setAttribute("style","display:none;")
            
        }
    }
    if(!timThay){
        document.querySelector('.report_text').setAttribute("style","display:block;")
        document.querySelector('.report_text').innerHTML='Rất tiếc, chúng tôi không tìm thấy kết quả nào phù hợp với từ khóa "'+"<strong>"+value+'"</strong>'
    }else{
        document.querySelector('.report_text').setAttribute("style","display:none;")

    }
}


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
    document.querySelector('.report_text').setAttribute("style","display:none;")
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
        document.querySelector('.report_text').setAttribute("style","display:none;")
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
        document.querySelector('.report_text').setAttribute("style","display:none;")
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
        document.querySelector('.report_text').setAttribute("style","display:none;")
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
    document.querySelector('.report_text').setAttribute("style","display:none;")
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
    document.querySelector('.report_text').setAttribute("style","display:none;")
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
    document.querySelector('.report_text').setAttribute("style","display:none;")
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
//Hiển thị thôn tin chi tiết
function XoaClassPhone(){
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone1')
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone2')
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone3')
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone4')
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone5')
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone6')
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone7')
    document.querySelector('.TT-chi-tiet .content').classList.remove('phone8')
}
displayAlls[0].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone1')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone1/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="Xiaomi Redmi Note 7 (64GB)"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="4.990.000₫"
    document.querySelector('#thuonghieu').innerHTML="Xiaomi"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="Xanh Da Trời"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="Xanh Khổng Tước"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="Xám Hoa Cương"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone1/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
displayAlls[1].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone2')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone2/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="Samsung Galaxy A50 (64GB)"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="6.990.000₫"
    document.querySelector('#thuonghieu').innerHTML="Samsung"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="Đen Tinh Vân"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="Xanh Dương Xỉ"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="Đồng Ánh Hồng"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone2/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
displayAlls[2].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone3')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone3/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="iPhone 6s Plus (32GB)"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="9.990.000₫"
    document.querySelector('#thuonghieu').innerHTML="Iphone"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="Màu Xám"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="Màu Bạc"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="Màu Vàng Hồng"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone3/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
displayAlls[3].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone4')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone4/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="Samsung Galaxy A10"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="3.090.000₫"
    document.querySelector('#thuonghieu').innerHTML="Samsung"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="Đen Cá Tính"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="Cam Nhiệt Huyết"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="Xanh năng động"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone4/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
displayAlls[4].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone5')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone5/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="OPPO A5s"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="3.990.000₫"
    document.querySelector('#thuonghieu').innerHTML="OPPO"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="Xanh Thời Thượng"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="Đen Mạnh Mẽ"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="Xanh Đam Mê"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone5/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
displayAlls[5].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone6')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone6/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="Vivo Y15"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="4.990.000₫"
    document.querySelector('#thuonghieu').innerHTML="Vivo"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="Xanh Hồng"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="Đen"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="Xanh Nhạt"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone6/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
displayAlls[6].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone7')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone7/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="iPhone Xs Max (64GB)"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="29.990.000₫"
    document.querySelector('#thuonghieu').innerHTML="Iphone"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="XS Max / Clear"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="XS / Clear"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="XR / Clear"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone7/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
displayAlls[7].onclick=function(){
    document.querySelector('.TT-chi-tiet').style.display='block'
    XoaClassPhone()

    document.querySelector('.TT-chi-tiet .content').classList.add('phone8')
    document.querySelector('.TT-chi-tiet .img-head img').src='./img/phone8/1.jpg'
    document.querySelector('.TT-chi-tiet .infor h1').innerHTML="iPhone X (256GB)"
    document.querySelector('.TT-chi-tiet .infor .gia .gia-left').innerHTML="29.990.000₫"
    document.querySelector('#thuonghieu').innerHTML="Iphone"
    document.querySelector('.TT-chi-tiet .infor .mau .chon1').innerHTML="Bạc"
    document.querySelector('.TT-chi-tiet .infor .mau .chon2').innerHTML="Xám"
    document.querySelector('.TT-chi-tiet .infor .mau .chon3').innerHTML="Đen"
    anhS=document.querySelectorAll('.TT-chi-tiet .img-list img')
    for(var i=0;i<5;i++){
        src='./img/phone8/'+(i+1).toString(10)+'.jpg'
        anhS[i].src=src
    }
}
//Thêm vào giỏ hàng
function CapNhatTongTien(){
    var Tong=0
    Phones=document.querySelectorAll('.gio-hang .row .gia')
    for (var i=1;i<Phones.length;i++){
        Tong=Tong+parseInt(Phones[i].innerHTML.replace(/\./g,''))
    }
    Tong=Tong.toString(10)
    for (var i = Tong.length-1;i>=0;i--){
        if (i==Tong.length-1){
            Tong=Tong.slice(0,i-2)+'.'+Tong.slice(i-2)
        }
        else if(i==Tong.length-1-6){
            Tong=Tong.slice(0,i)+'.'+Tong.slice(i)
        }
    }
    document.querySelector('.dat-hang .tong-tien strong strong').innerHTML=Tong
}
document.querySelector('.list-phone .information .buy1').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone1')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone1 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone1 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone1 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=4990000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone1 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone1"><div class="col san-pham">Xiaomi Redmi Note 7 (64GB)</div><div class="col gia">4.990.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()

    
}
document.querySelector('.list-phone .information .buy2').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone2')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone2 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone2 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone2 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=6990000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone2 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone2"><div class="col san-pham">Samsung Galaxy A50 (64GB)</div><div class="col gia">6.990.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()
}
document.querySelector('.list-phone .information .buy3').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone3')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone3 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone3 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone3 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=9990000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone3 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone3"><div class="col san-pham">iPhone 6s Plus (32GB)</div><div class="col gia">9.990.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()
}
document.querySelector('.list-phone .information .buy4').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone4')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone4 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone4 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone4 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=3090000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone4 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone4"><div class="col san-pham">Samsung Galaxy A10</div><div class="col gia">3.090.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()
}
document.querySelector('.list-phone .information .buy5').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone5')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone5 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone5 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone5 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=3990000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone5 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone5"><div class="col san-pham">OPPO A5s</div><div class="col gia">3.990.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()
}
document.querySelector('.list-phone .information .buy6').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone6')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone6 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone6 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone6 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=4990000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone6 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone6"><div class="col san-pham">Vivo Y15</div><div class="col gia">4.990.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()
}
document.querySelector('.list-phone .information .buy7').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone7')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone7 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone7 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone7 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=29990000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone7 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone7"><div class="col san-pham">iPhone Xs Max (64GB)</div><div class="col gia">29.990.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()
}
document.querySelector('.list-phone .information .buy8').onclick=function(){
    cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+1
    if(document.querySelector('.gio-hang .phone8')!=null){
        soLuongPhone=parseInt(document.querySelector('.gio-hang .phone8 .so-luong').innerHTML)
        document.querySelector('.gio-hang .phone8 .so-luong').innerHTML=soLuongPhone+1
        // giaPhone=parseInt(document.querySelector('.gio-hang .phone8 .gia').innerHTML.replace(/\./g,''))
        giaPhoneCapNhat=29990000*(soLuongPhone+1)+'₫'
        for (var i = giaPhoneCapNhat.length-1;i>=0;i--){
            if (i==giaPhoneCapNhat.length-1){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i-3)+'.'+giaPhoneCapNhat.slice(i-3)
            }
            else if(i==giaPhoneCapNhat.length-1-7){
                giaPhoneCapNhat=giaPhoneCapNhat.slice(0,i)+'.'+giaPhoneCapNhat.slice(i)
            }
        }
        document.querySelector('.gio-hang .phone8 .gia').innerHTML=giaPhoneCapNhat
    }
    else{
        document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone8"><div class="col san-pham">iPhone X (256GB)</div><div class="col gia">29.990.000₫</div><div class="col so-luong">1</div><div class="col chon">Xóa</div></div>'
    }
    CapNhatTongTien()
}
gioHang=document.querySelector('.dat-hang')
gioHang.style.display="none"
    document.querySelector('.head-search .shop').onclick=function(){
    gioHang=document.querySelector('.dat-hang')
    if(gioHang.style.display=="none"){
        gioHang.setAttribute("style","display:block !important;")
    }
    else if(gioHang.style.display=="block"){
        gioHang.setAttribute("style","display:none !important;")
    }
}
//clear giỏ hàng
function ClearGioHang(){
    document.querySelector('.gio-hang').innerHTML='<div class="row"><div class="col san-pham">Sản phẩm</div><div class="col gia">Giá</div><div class="col so-luong">Số lượng</div><div class="col chon">Chọn</div></div>'
    document.querySelector('.dat-hang .tong-tien').innerHTML='<strong>Tổng tiền: <strong>000</strong>₫</strong>'
    document.querySelector('.head-search .cout-shopping-cart').innerHTML=0
}

//Xóa 1 sản phẩm
sanPhams=document.querySelectorAll('.gio-hang .chon')
console.log(sanPhams)
for (var i=1;i<sanPhams.length;i++){
    sanPhams[i].onclick= function(i){
        console.log(i)
        alert("HTT")
    }
}
// Thông tin chi tiết
    //Chọn ảnh
    anhPhoneS=document.querySelectorAll('.TT-chi-tiet .img-list>div>div')
    srcAnhPhoneS=document.querySelectorAll('.TT-chi-tiet .img-list>div>div>img')
    anhPhoneS[0].onclick=function(){
        anhPhoneS[0].setAttribute("style","border: 2px solid #ee4d2d;")
        anhPhoneS[1].setAttribute("style","border: none")
        anhPhoneS[2].setAttribute("style","border: none")
        anhPhoneS[3].setAttribute("style","border: none")
        anhPhoneS[4].setAttribute("style","border: none")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[0].src
    }
    anhPhoneS[1].onclick=function(){
        anhPhoneS[0].setAttribute("style","border: none")
        anhPhoneS[1].setAttribute("style","border: 2px solid #ee4d2d;")
        anhPhoneS[2].setAttribute("style","border: none")
        anhPhoneS[3].setAttribute("style","border: none")
        anhPhoneS[4].setAttribute("style","border: none")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[1].src
    }
    anhPhoneS[2].onclick=function(){
        anhPhoneS[0].setAttribute("style","border: none;")
        anhPhoneS[1].setAttribute("style","border: none")
        anhPhoneS[2].setAttribute("style","border: 2px solid #ee4d2d")
        anhPhoneS[3].setAttribute("style","border: none")
        anhPhoneS[4].setAttribute("style","border: none")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[2].src
    }
    anhPhoneS[3].onclick=function(){
        anhPhoneS[0].setAttribute("style","border: none;")
        anhPhoneS[1].setAttribute("style","border: none")
        anhPhoneS[2].setAttribute("style","border: none")
        anhPhoneS[3].setAttribute("style","border: 2px solid #ee4d2d")
        anhPhoneS[4].setAttribute("style","border: none")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[3].src
    }
    anhPhoneS[4].onclick=function(){
        anhPhoneS[0].setAttribute("style","border: none")
        anhPhoneS[1].setAttribute("style","border: none")
        anhPhoneS[2].setAttribute("style","border: none")
        anhPhoneS[3].setAttribute("style","border: none")
        anhPhoneS[4].setAttribute("style","border: 2px solid #ee4d2d;")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[4].src
    }
    //Chọn Màu Sắc
    mauSacS=document.querySelectorAll('.TT-chi-tiet .infor .mau .chon')
    mauSacS[0].onclick=function(){
        mauSacS[0].setAttribute("style","color: #ee4d2d;border: #ee4d2d 1px solid;")
        mauSacS[1].setAttribute("style","color: #757575;border: 1px solid rgba(0,0,0,.09);")
        mauSacS[2].setAttribute("style","color: #757575;border: 1px solid rgba(0,0,0,.09);")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[1].src
    }
    mauSacS[1].onclick=function(){
        mauSacS[1].setAttribute("style","color: #ee4d2d;border: #ee4d2d 1px solid;")
        mauSacS[0].setAttribute("style","color: #757575;border: 1px solid rgba(0,0,0,.09);")
        mauSacS[2].setAttribute("style","color: #757575;border: 1px solid rgba(0,0,0,.09);")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[2].src
    }
    mauSacS[2].onclick=function(){
        mauSacS[2].setAttribute("style","color: #ee4d2d;border: #ee4d2d 1px solid;")
        mauSacS[1].setAttribute("style","color: #757575;border: 1px solid rgba(0,0,0,.09);")
        mauSacS[0].setAttribute("style","color: #757575;border: 1px solid rgba(0,0,0,.09);")
        document.querySelector('.TT-chi-tiet .img .img-head img').src=srcAnhPhoneS[3].src
    }
    //tăng giảm số lượng
    function Tang(){
        document.querySelector('.TT-chi-tiet .infor .so-luong .value input').value=parseInt(document.querySelector('.TT-chi-tiet .infor .so-luong .value input').value)+1
    }
    function Giam(){
        if(parseInt(document.querySelector('.TT-chi-tiet .infor .so-luong .value input').value)==1){
            return
        }
        document.querySelector('.TT-chi-tiet .infor .so-luong .value input').value=parseInt(document.querySelector('.TT-chi-tiet .infor .so-luong .value input').value)-1
    }
    //Thêm vào giỏ
    document.querySelector('.TT-chi-tiet .infor .them-gio-hang .gio-hang').onclick=function(){
        listPhone=['phone1','phone2','phone3','phone4','phone5','phone6','phone7','phone8']
        for (var i=0;i<listPhone.length;i++){
            if((document.querySelector('.TT-chi-tiet .content').classList)[1]==listPhone[i]){
                gio_hang_selector='.gio-hang .phone'+(i+1).toString(10)
                so_luong_selector='.gio-hang .phone'+(i+1).toString(10)+' .so-luong'
                gia_selector='.gio-hang .phone'+(i+1).toString(10)+' .gia'
                cout_shopping_cart=parseInt(document.querySelector('.head-search .cout-shopping-cart').innerHTML)
                soLuong=parseInt(document.querySelector('.TT-chi-tiet .infor .so-luong .value input').value)
                document.querySelector('.head-search .cout-shopping-cart').innerHTML=cout_shopping_cart+soLuong
                var donGia=0
                if(i+1==1){
                    donGia=4990000
                }else if(i+1==2){
                    donGia=6990000
                }else if(i+1==3){
                    donGia=9990000
                }else if(i+1==4){
                    donGia=3090000
                }else if(i+1==5){
                    donGia=3990000
                }else if(i+1==6){
                    donGia=4990000
                }else if(i+1==7){
                    donGia=29990000
                }else if(i+1==8){
                    donGia=29990000
                }
                if(document.querySelector(gio_hang_selector)!=null){
                    soLuongPhone=parseInt(document.querySelector(so_luong_selector).innerHTML)
                    document.querySelector(so_luong_selector).innerHTML=soLuongPhone+soLuong
                    giaPhoneCapNhat=donGia*(soLuongPhone+soLuong)+'₫'
                    for (var j = giaPhoneCapNhat.length-1;j>=0;j--){
                        if (j==giaPhoneCapNhat.length-1){
                            giaPhoneCapNhat=giaPhoneCapNhat.slice(0,j-3)+'.'+giaPhoneCapNhat.slice(j-3)
                        }
                        else if(j==giaPhoneCapNhat.length-1-7){
                            giaPhoneCapNhat=giaPhoneCapNhat.slice(0,j)+'.'+giaPhoneCapNhat.slice(j)
                        }
                    }
                    document.querySelector(gia_selector).innerHTML=giaPhoneCapNhat
                }
                else{
                    giaPhoneCapNhat=donGia*soLuong+'₫'
                    for (var j = giaPhoneCapNhat.length-1;j>=0;j--){
                        if (j==giaPhoneCapNhat.length-1){
                            giaPhoneCapNhat=giaPhoneCapNhat.slice(0,j-3)+'.'+giaPhoneCapNhat.slice(j-3)
                        }
                        else if(j==giaPhoneCapNhat.length-1-7){
                            giaPhoneCapNhat=giaPhoneCapNhat.slice(0,j)+'.'+giaPhoneCapNhat.slice(j)
                        }
                    }
                    document.querySelector('.gio-hang').innerHTML=document.querySelector('.gio-hang').innerHTML+'<div class="row phone1"><div class="col san-pham">Xiaomi Redmi Note 7 (64GB)</div><div class="col gia">'+giaPhoneCapNhat+'</div><div class="col so-luong">'+soLuong+'</div><div class="col chon">Xóa</div></div>'
                }
            }
        }
        document.querySelector('.TT-chi-tiet').style.display='none'
        CapNhatTongTien()
        alert("Đã thêm vào giỏ hàng")
    }

//mobile
function TimKiemSanPhamMobile(){
    var value_mobile=document.querySelector('#txtSearch-mobile').value
    document.querySelector('#txtSearch-mobile').value=""
    var timThay=false
    var listPhone=["Xiaomi Redmi Note 7 (64GB)","Samsung Galaxy A50 (64GB)","iPhone 6s Plus (32GB)","Samsung Galaxy A10","OPPO A5s","Vivo Y15","iPhone Xs Max (64GB)","iPhone X (256GB)"]
    var listClassPhone=[".list-phone .phone1",".list-phone .phone2",".list-phone .phone3",".list-phone .phone4",".list-phone .phone5",".list-phone .phone6",".list-phone .phone7",".list-phone .phone8"]
    for (var i = 0;i<listPhone.length;i++){
        if(listPhone[i].includes(value_mobile)){
            document.querySelector(listClassPhone[i]).setAttribute("style","display:block;")
            timThay=true
        }else{
            document.querySelector(listClassPhone[i]).setAttribute("style","display:none;")
            
        }
    }
    if(!timThay){
        document.querySelector('.report_text').setAttribute("style","display:block;")
        document.querySelector('.report_text').innerHTML='Rất tiếc, chúng tôi không tìm thấy kết quả nào phù hợp với từ khóa "'+"<strong>"+value_mobile+'"</strong>'
    }else{
        document.querySelector('.report_text').setAttribute("style","display:none;")
    }
 
}