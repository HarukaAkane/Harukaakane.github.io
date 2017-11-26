function showhideBlock(idclick,idtext){
    var objclick = document.getElementById(idclick);
    var objtext  = document.getElementById(idtext);

    if(objtext.style.display=='none') {
        objclick.innerHTML=objclick.innerHTML.replace("РџРѕРґСЂРѕР±РЅРµРµ","РЎРІРµСЂРЅСѓС‚СЊ");
        objtext.style.display='block';
    }
    else {
        objclick.innerHTML=objclick.innerHTML.replace("РЎРІРµСЂРЅСѓС‚СЊ","РџРѕРґСЂРѕР±РЅРµРµ");
        objtext.style.display='none';
    }
}
function collapsElement(id) {
    if ( document.getElementById(id).style.display != "none" ) {
        document.getElementById(id).style.display = 'none';
    }
    else {
        document.getElementById(id).style.display = '';
    }
}