// global data
None = "";
players_list = [
    {'fighter_image':'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDemitrious_Johnson%252FJOHNSON_DEMETRIOUS.png?w600-h600-tc1',
     'draw': 1,
     'id': 1,
     'promotion': 'UFC',
     'weight': 'Flyweight',
     'gender': 'male',
     'loss': 2,
     'last_name':'Johnson',
     'first_name':'Demetrious',
     'win': 24,
     'nickname':'Mighty Mouse'
    }, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDominick_Cruz%252FCRUZ_DOMINICK_02.png?w600-h600-tc1', 'draw': 0, 'id': 2, 'promotion': 'UFC', 'weight': 'Bantamweight', 'gender': 'male', 'loss': 1, 'last_name': 'Cruz', 'first_name': 'Dominick', 'win': 22, 'nickname': 'The Dominator'}, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FConor_McGregor%252FMCGREGOR_CONOR.png?w600-h600-tc1', 'draw': 0, 'id': 3, 'promotion': 'UFC', 'weight': 'Featherweight', 'gender': 'male', 'loss': 3, 'last_name': 'McGregor', 'first_name': 'Conor', 'win': 20, 'nickname': 'The Notorious'}, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FEddie_Alvarez%252FALVAREZ_EDDIE_BELT.png?w600-h600-tc1', 'draw': 0, 'id': 4, 'promotion': 'UFC', 'weight': 'Lightweight', 'gender': 'male', 'loss': 4, 'last_name': 'Alvarez', 'first_name': 'Eddie', 'win': 28, 'nickname': None}, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FTyrone_Woodley%252FWOODLEY_TYRON_BELT.png?w600-h600-tc1', 'draw': 0, 'id': 5, 'promotion': 'UFC', 'weight': 'Welterweight', 'gender': 'male', 'loss': 3, 'last_name': 'Woodley', 'first_name': 'Tyron', 'win': 16, 'nickname': 'The Chosen One'}, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252F%252FMichael_Bisping%252FBISPING_MICHAEL_BELT.png?w600-h600-tc1', 'draw': 0, 'id': 6, 'promotion': 'UFC', 'weight': 'Middleweight', 'gender': 'male', 'loss': 7, 'last_name': 'Bisping', 'first_name': 'Michael', 'win': 31, 'nickname': 'The Count'}, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDaniel_Cormier%252FCORMIER_DANIEL.png?w600-h600-tc1', 'draw': 0, 'id': 7, 'promotion': 'UFC', 'weight': 'Light_Heavyweight', 'gender': 'male', 'loss': 1, 'last_name': 'Cormier', 'first_name': 'Daniel', 'win': 18, 'nickname': 'DC'}, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FStipe_Miocic%252FMIOCIC_STIPE_BELT.png?w600-h600-tc1', 'draw': 0, 'id': 8, 'promotion': 'UFC', 'weight': 'Heavyweight', 'gender': 'male', 'loss': 2, 'last_name': 'Miocic', 'first_name': 'Stipe', 'win': 16, 'nickname': None}, 
    {'fighter_image': 'http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FJoanna-Jedrzejczyk%252FJEDRZEJCZYK_JOANNA_BELT.png?w600-h600-tc1', 'draw': 0, 'id': 9, 'promotion': 'UFC', 'weight': 'Women_Strawweight', 'gender': 'female', 'loss': 0, 'last_name': 'Jedrzejczyk', 'first_name': 'Joanna', 'win': 12, 'nickname': None}];
// players / get_players()

function get_players_by_gender(gender) {
    // write the code to get the actual player
    var players = "";
    return players;
}

function get_players_by_promotion(promotion) {
    // write the code to get the actual player
    var players = "";
    return players;
}

function get_players_by_weight(weight) {
    // write the code to get the actual player
    var players = "";
    return players;
}

function get_players_by_name(name) {
    // write the code to get the actual player
    var players = "";
    return players;
}


// ensure consistency
// this means that we have to validate if players can fight each other
// for instance, players of different genders can't fight each other
// and so on.

function validate_pairs(red_player, blue_player) {
    // returns true when it's a valid fight
    // returns false when it's an illegal fight

    // note: syntax for accessing gender field may change
    if( red_player.gender != blue_player.gender ) {
	return false;
    }
    
    return true;
}

function get_weight_class(player) {
    if( player.gender === "female" ) {
	return player.weight.split("_")[1];
    }

    return player.weight;
}

function get_img_path(player) {
    return player.fighter_image;
}


function I() {
    var _demo = "this is a demo";
    demo_global = "this is a global";
}
