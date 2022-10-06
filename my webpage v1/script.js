var i=0;
var n=1;
var carousel_number = document.getElementsByClassName("carousel_image").length;

function carousel_pause(){
    let carousel_box = document.getElementsByClassName('carousel');
    carousel_box[0].addEventListener('mouseover', function () {
        n = carousel_number;
    })
    carousel_box[0].addEventListener('mouseout', function () {
        n = 1;
        carousel_box[0].style.border = "" ;
    })
}
function carousel() {
    var carousel_radio_1 = document.getElementById("carousel_radio_1");//獲取ID       
    var carousel_radio_2 = document.getElementById("carousel_radio_2");//獲取ID       
    var carousel_radio_3 = document.getElementById("carousel_radio_3");//獲取ID 
    i+=n;
    if(i%carousel_number===0 ){
        carousel_radio_1.checked=true;  
    }      
    if(i%carousel_number===1 ){
        carousel_radio_2.checked=true;
    }      
    if(i%carousel_number===2 ){
        carousel_radio_3.checked=true;
    }
    if(i>10){
        i=i-9;
    }
};
function carousel_radio_onclick_1(){
        i=0;
}
function carousel_radio_onclick_2(){
        i=1;
}
function carousel_radio_onclick_3(){
        i=2;
}
function image_link_1(){
    var image_link = "src/研究所成績單截圖.JPG"
    if(confirm("是否打開檔案?")==true){        
        window.open(image_link);
    }
}
function image_link_2(){
    var image_link ="src/大學成績單截圖.JPG";
    if(confirm("是否打開檔案?")==true){        
        window.open(image_link);
    }
}
function image_link_3(){
    var image_link ="src/畢業證書_壓縮.jpg";
    if(confirm("是否打開檔案?")==true){        
        window.open(image_link);
    }
}
window.onload = function(){
    setInterval("carousel()",3000);    
}
carousel_pause();
function carousel_back(){
    i=(i+2)%3;
    var carousel_back_radio = document.getElementsByName("carousel_radio");
    carousel_back_radio[i].checked = true;
    console.log(i);
}
function carousel_forward(){
    i=(i+1)%3;
    var carousel_back_radio = document.getElementsByName("carousel_radio");
    carousel_back_radio[i].checked = true;
    console.log(i);
}
