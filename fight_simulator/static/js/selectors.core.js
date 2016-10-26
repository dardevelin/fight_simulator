// clean corner

RED_CORNER = true;
BLUE_CORNER = false;

// True is for red corner, False is for blue corner
// NOTE this function expects a consistent html structure
// and is based on the existance of a 'class named corner' on
// both fighter corners. updating that html may require an update
// of this function
function clean_player_selection(corner) {
    // clear gender
    var RED_CORNER = true;
    var BLUE_CORNER = false;
    
    var side = 99;
    
    if( corner === RED_CORNER ) {
	side = 0;
    } else {
	side = 1;
    }

    var _gender = 0;
    var _promotion = 1;
    var _weight = 2;
    var _fighter = 3;
    
    var gender_sel = $('.corner')[side].getElementsByTagName('select');
    $( gender_sel[_gender] ).selectpicker('val', 'Gender');
    $( gender_sel[_promotion] ).selectpicker('val', 'Promotion');
    $( gender_sel[_weight] ).selectpicker('val', 'Weight');
    $( gender_sel[_fighter] ).selectpicker('val', 'Fighter');

    // clean the image
    $('.corner')[side].getElementsByTagName('img')[0].src = "../static/images/Body-1.png";
    // clean fighter info text

    var _name = 1;
    var _nickname = 3;
    var _weightclass = 5;
    var _record = 7;
    
    finfo_txt = $('.corner')[side].getElementsByTagName('td');
    finfo_txt[_name].innerHTML = "";
    finfo_txt[_nickname].innerHTML = "";
    finfo_txt[_weightclass].innerHTML = "";
    finfo_txt[_record].innerHTML = "";
    
}// end of clean_player_selection




// trap on change ( menu option, gender, so that it applies to both corners )
