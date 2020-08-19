$(function(){

    let now = 1;
    let max = 2;
    let width = 100;



 

    $('.sec-bbs .cont li:first-child').on('click', function(){
        // 모달창에 on 클래스를 붙여 보여준다.
        $('.modal-wrap').addClass('on');
    });
    $('#modal button').on('click', function(){
        $('.modal-wrap').removeClass('on');
    });

    

    setInterval(function(){    
        if(now<2){
            // '.slide ul'의 'left: -100%' 애니메이션 시켜...
            $('.sec-gallery ul').animate({
                left : (now*width*(-1)) + '%'
            });
            now++; // now = now + 1
        }else{
            $('.sec-gallery ul').animate({
                left : 0
            });
            now=1;
        }
    },3000);
    










});