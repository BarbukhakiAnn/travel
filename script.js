
$(document).ready(function(){
    // $('body').css('color','red');
    $('#button').click(function() {
        $('#button').css('color','green');
        // $('#head').hide();
        $('#popup').css('display','flex');
    });

    $('#cross').click(function() {
         $('#popup').css('display','none');
    });
    $('.question>button').click(function() {
    	$(".popup2_wrapper").css("display","flex");
    });
    $('.popup2>.cross').click(function() {
        $(".popup2_wrapper").css('display','none');
    });
    $(".animation>.ques-item>.ques").click(function() {
    	$(this).parent().find(".re").slideToggle(500);
         
    	
    	});
    
    

    $(".cook>button").click(function(){
        $('.cook').fadeOut(900) ;
               
    });
    $(".cook>.cook-wrapper>button").click(function(){
        $('.cook').fadeOut(900) ;
            
    });

});