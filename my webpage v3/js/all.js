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