$(function(){
    $('#leftpanel').val('5');
    $('#rightpanel').val('5.1');
    $('#file').on('change', retract);
    $('#file').on('click', close);
    $('button').on('click', startShow);
    $('#rightpanel').on('change',rightmove);
    $('#leftpanel').on('change', leftmove);
    $('#palette').on('change', paint);
    function startShow(e){
        if ($('#file').val()==''){
            alert('please choose a file');
        }else{
            $('#leftpane').removeClass('withdraw');
            $('#rightpane').removeClass('withdraw');
            $(':root').css('--left','1.0');
            $(':root').css('--right','1.02');
            $('#leftpane').addClass('closeLeft');
            $('#rightpane').addClass('closeRight');
            var player= document.getElementById('bang');
            player.currentTime=0;
            player.play();
            $('#leftpanel').val('5');
            $('#rightpanel').val('5.1');
        }
    }
    function retract(event){
        var reel= URL.createObjectURL(event.target.files[0]);
        $('#block-container').fadeIn('fast').css('background-image', 'url('+reel+')');
        $('#leftpane').addClass('withdraw');
        $('#rightpane').addClass('withdraw');
    }
    function close(e){
        $('#leftpane').removeClass('withdraw');
        $('#rightpane').removeClass('withdraw');
        $(':root').css('--left','1.0');
        $(':root').css('--right','1.02');
        $('#leftpanel').val('5');
        $('#rightpanel').val('5.1');
    }
    function leftmove(e){
        let left= ($('#leftpanel').val())/5;
        $(':root').css('--left',left);
    }
    function rightmove (e){
        let right= ($('#rightpanel').val())/5;
        $(':root').css('--right',right);
    }
    function paint (event){
        let coloring=$('#palette').val();
        $(':root').css('--color', coloring);
    }    
})
