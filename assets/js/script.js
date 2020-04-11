$(function(){
    $('#file').on('change', retract);
    $('#file').on('click', close);
    $('button').on('click', startShow);
    function startShow(event){
        if ($('#file').val()==''){
            alert('please choose a file');
        }else{
            $('#leftpane').removeClass('withdraw');
            $('#rightpane').removeClass('withdraw'); 
            var player= document.getElementById('bang');
            player.currentTime=0;
            player.play();
        }
    }
    function retract (event){
        var reel= URL.createObjectURL(event.target.files[0]);
        $('#block-container').fadeIn('fast').css('background-image', 'url('+reel+')');
        $('#leftpane').addClass('withdraw');
        $('#rightpane').addClass('withdraw');
    }
    function close (event){
        $('#leftpane').removeClass('withdraw');
        $('#rightpane').removeClass('withdraw');

    }
})