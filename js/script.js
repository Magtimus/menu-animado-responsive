$('.container-menu').hide();

$('.container-menu').css({
    left: '-100%'
});


$('.icon-menu').on('click', function(){
    
    $('.container-menu').show();
    $('.container-menu').animate({
        left: '0%'
    }, 'swing');
    
    $('main').addClass("main2");
    
})


$('.close').on('click', function(){
    
    $('.container-menu').animate({
        left: '-100%'
    }, 'swing');
    $('main').removeClass("main2");
    
})