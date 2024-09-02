let menubutton=document.getElementsByClassName('menu');
let uu=document.querySelector('ul');
let call=document.getElementsByClassName('call-us')
function ToggleMenu(){
 let s = uu.getAttribute('style')
 if( s == 'display:none'){uu.setAttribute('style','display:flex')}else{uu.setAttribute('style','display:none')}}