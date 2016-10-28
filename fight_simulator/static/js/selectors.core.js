// clean corner

RED_CORNER = true;
BLUE_CORNER = false;

// True is for red corner, False is for blue corner
// NOTE this function expects a consistent html structure
// and is based on the existance of a 'class named corner' on
// both fighter corners. updating that html may require an update
// of this function
function clear_fighter_selection(corner) {
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
  
  // clear fighter info
  var gender_sel = $('.corner')[side].getElementsByTagName('select');
  $( gender_sel[_gender] ).selectpicker('val', 'Gender');
  $( gender_sel[_promotion] ).selectpicker('val', 'Promotion');
  $( gender_sel[_weight] ).selectpicker('val', 'Weight');
  $( gender_sel[_fighter] ).selectpicker('val', 'Fighter');

  // clear the image
  $('.corner')[side].getElementsByTagName('img')[0].src = "../static/images/Body-1.png";
  // clear fighter info text

  var _name = 1;
  var _nickname = 3;
  var _weightclass = 5;
  var _record = 7;
  
  finfo_txt = $('.corner')[side].getElementsByTagName('td');
  finfo_txt[_name].innerHTML = "";
  finfo_txt[_nickname].innerHTML = "";
  finfo_txt[_weightclass].innerHTML = "";
  finfo_txt[_record].innerHTML = "";
}

function which_menu(evt, corner) {

    var corner_name = corner === true ? "red corner" : "blue corner";
    var reverse_side = corner === true ? 1 : 0;

    // array default indexes
    var _gender = 0;
    var _promotion = 1;
    var _weight = 2;
    var _fighter = 3;
    
    reverse_sel = $('.corner')[reverse_side].getElementsByTagName('select');
    
    if( evt.target.classList.contains("gender_menu") ) {
	console.log(corner_name + ", gender menu was selected");
	// use jquery to extract the data via selectpicker from evt.target
	// which is an object menu
	var gender_val = $(evt.target).selectpicker('val');
	var reverse_val = $( reverse_sel[_gender] ).selectpicker('val');

	if( gender_val !== reverse_val && reverse_val != "" ) {
	    // corner is just true and false, so we flip with a negation. !
	    var ok  = confirm(
		"You can't simulate ilegal fights, this will automatically erase the "
		    + (corner === true ? "blue corner" : "red corner")
		    + " selection. Are you sure you want to continue ?");

	    if( true === ok ) {
		// apply the filter to our current corner
		clear_fighter_selection(!corner);
		$( reverse_sel[_gender] ).selectpicker('val', gender_val);
		ui_apply_gender_filter(!corner, gender_val.toLowerCase());
	    } else {
		clear_fighter_selection(corner);
		return;
	    }
	}// end of gender_menu
	ui_apply_gender_filter(corner, gender_val.toLowerCase());
	return;
    }
    
    if( evt.target.classList.contains("promotion_menu") ) {
	console.log(corner_name + ",promotion menu was selected");
	return;
    }// end of promotion_menu
    
    if( evt.target.classList.contains("weight_menu") ) {
	console.log(corner_name + ",weight menu was selected");
	return;
    }// end of weight_menu
    
    if( evt.target.classList.contains("fighter_menu") ) {
	console.log(corner_name + ",fighter menu was selected");
	    return;
    }// end of fighter_menu
    
    console.log(corner_name + ",something changes, can't say what");
    return;
}

// end of clear_player_selection
function corner_event_handler(evtData) {
    var evt = evtData;

    if( evt.currentTarget.classList.contains("red_side") ) {
	// check if the target is gender
	which_menu(evt, RED_CORNER);
	return;
    }

    which_menu(evt, BLUE_CORNER);
    
    return;

}

// trap on change ( menu option, gender, so that it applies to both corners )
function ui_apply_gender_filter(corner, gender) {

    var corners = $('.corner');
    // 0 is red | 1 is blue
    var side = corner === true ? 0 : 1;
    var _fighter_menu = 3;
    
    var fighters = get_fighters_by_gender(gender);
    
    var fighter_menu_sel = corners[side].getElementsByTagName('select')[_fighter_menu];
    // clean previous selections
    $(fighter_menu_sel).empty().selectpicker('refresh');
    
    for( var i=0; i < fighters.length; ++i ) {
	full_name = fighters[i].last_name + ", " + fighters[i].first_name;
	// add new filtered data
	$( fighter_menu_sel ).append('<option>' + full_name + '</option>').selectpicker('refresh');
    }
}

function filter_by_promotion(corner) {  
  $('.promotion_menu').change(function() {
    var promotion_sel = $(this).val();
    if (promotion_sel === "UFC") {
      $('select.fighter_menu').empty().selectpicker('refresh');
      var ufc = get_fighters_by_promotion(promotion_sel);
      for (var i=0; i<ufc.length; i++) {
        var full_name = (ufc[i].last_name + ", " + ufc[i].first_name);
        $('select.fighter_menu').append('<option>' + full_name + '</option>').selectpicker('refresh');        
      }
    } else if (promotion_sel === "Bellator") {
      $('select.fighter_menu').empty().selectpicker('refresh');
      var bellator = get_fighters_by_promotion(promotion_sel);
      for (var i=0; i<bellator.length; i++) {
        var full_name = (bellator[i].last_name + ", " + bellator[i].first_name);
        $('select.fighter_menu').append('<option>' + full_name + '</option>').selectpicker('refresh');        
      }
    }
  });
}

function filter_by_weight(corner) {
  $('.weight_menu').change(function() {
    var weight_sel = $(this).val().toLowerCase();
    if (weight_sel === "strawweight") {
      console.log(weight_sel);
    } else if (weight_sel === "flyweight") {
      console.log(weight_sel);
    } else if (weight_sel === "bantamweight") {
      console.log(weight_sel);
    } else if (weight_sel === "fetherweight") {
      console.log(weight_sel);
    } else if (weight_sel === "lightweight") {
      console.log(weight_sel);
    } else if (weight_sel === "welterweight") {
      console.log(weight_sel);
    } else if (weight_sel === "middleweight") {
      console.log(weight_sel);
    } else if (weight_sel === "light heavyweight") {
      console.log(weight_sel);
    } else if (weight_sel === "heavyweight") {
      console.log(weight_sel);
    }      
  });
}

function load_fighter_info(corner) {
  $('.fighter_menu').change(function() {
    var fighter_sel = $(this).val();

  });
}

$(document).ready(function() {
    $('.corner').change( corner_event_handler );
//  filter_by_gender(RED_CORNER);
  filter_by_promotion();
  filter_by_weight();
});
