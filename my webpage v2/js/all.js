var i=0;//image number : control carousel
var n=1;//every interval : i + n
carousel_number = $('.carousel_image').length;
function carousel_pause(){
    $('.carousel').mouseover(function () {
        n = carousel_number;
    });
    $('.carousel').mouseout(function () {
        n = 1;
        $('.carousel')[0].style.border = "" ;
    });
}
function carousel() {    
    i+=n;
    if(i%carousel_number===0 ){
        $('.carousel_radio')[0].checked=true;  
    }      
    if(i%carousel_number===1 ){
        $('.carousel_radio')[1].checked=true;  
    }      
    if(i%carousel_number===2 ){
        $('.carousel_radio')[2].checked=true;
    }
    if(i>10){
        i=i-9;
    }
};
function set_radio(x){
    i=x-1;
}
function image_link(image_num){
    if(image_num==1){
    var image_link ="src/研究所成績單_compressed.pdf"        
    }
    if(image_num==2){
    var image_link ="src/大學成績單_compressed.pdf";        
    }
    if(image_num==3){
    var image_link ="src/畢業證書_壓縮.jpg";        
    }
    if(confirm("是否打開檔案?")==true){        
        window.open(image_link);
    }
}
window.onload = function(){
    setInterval("carousel()",1000);    
}
carousel_pause();
function carousel_back(){
    i=(i+2)%3;
    $(".carousel_radio")[i].checked =true;
    console.log(i);
}
function carousel_forward(){
    i=(i+1)%3;
    $(".carousel_radio")[i].checked =true;
    console.log(i);
}
var biology = new Vue({
    el:'.biography_container',
    data:{
        app:i,
        one:1,
        result:0
    },
    computed:{
        print_i(){
            this.app=i;        
            i=i+1;
            console.log(i);
            return this.app;
        }
    }
});