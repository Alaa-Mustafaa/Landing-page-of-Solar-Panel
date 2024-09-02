
var menubutton=document.getElementsByClassName('menu');
var uu=document.querySelector('ul');
var call=document.getElementsByClassName('call-us')

function ToggleMenu(){

    var s = uu.getAttribute('style')

    if( s == 'display:none'){

        uu.setAttribute('style','display:flex')
    
    }else{
        uu.setAttribute('style','display:none')
    }
}