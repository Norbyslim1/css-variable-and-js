$(function(){
    $('button').on('click', startShow);
    function startShow(event){
        if ($('#file').val()==''){
            alert('please choose a file');
        }else{
            var reel= URL.createObjectURL(event.target.files[0]);
        $('#block-container').fadeIn('fast').css('background-image', 'url('+reel+')');
            
        }
    }
    //     console.log(event.target);
    //     file=URL.createObjectURL(event.target.files[0]);
    //     $('img').fadeIn('fast').attr('src',file);
        
    //     }
    // // }
    // $('#file').change(function(event){
    //     var reel= URL.createObjectURL(event.target.files[0]);
    //     $('#block-container').fadeIn('fast').css('background-image', 'url('+reel+')');
        
    // })
})