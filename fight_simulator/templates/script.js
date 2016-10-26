<script>
// Arrays to hold fighters for different levels of filtering
var None = "";
var fighterData = [{{ data|safe }}];
var male = [];
var female = [];
var male_promotion = [];
var female_promotion = [];
var male_flyweight = [];
var male_bantamweight = [];
var male_featherweight = [];
var male_lightweight = [];
var male_welterweight = [];
var male_middleweight = [];
var male_lhweight = [];
var male_heavyweight = [];
var female_strawweight = [];
var female_bantamweight = [];

$(document).ready(function() {
    $('#blue_corner').hide();
    // Loops and conditionals to filter fighter data into arrays based on drop down menus
    for (var i=0; i<fighterData.length; i++) {
        var data = fighterData[i];
        for (var i=0; i<data.length; i++) {
            var fighters = data[i];                  
            // Male fighter filters
            // Filter by gender
            if (fighters['gender'] == "male") {
                male.push(fighters);
                // Filter by promotion
                if (fighters['promotion'] == "UFC") {
                    male_promotion.push(fighters);
                    // Filter by weight class               
                    if (fighters['weight'] == "Flyweight") {
                        male_flyweight.push(fighters);
                    }
                    else if (fighters['weight'] == "Bantamweight") {
                        male_bantamweight.push(fighters);
                    }
                    else if (fighters['weight'] == "Featherweight") {
                        male_featherweight.push(fighters);
                    }
                    else if (fighters['weight'] == "Lightweight") {
                        male_lightweight.push(fighters);
                    } 
                    else if (fighters['weight'] == "Welterweight") {
                        male_welterweight.push(fighters);
                    }
                    else if (fighters['weight'] == "Middleweight") {
                        male_middleweight.push(fighters);
                    }
                    else if (fighters['weight'] == "Light_Heavyweight") {
                        male_lhweight.push(fighters);
                    }
                    else if (fighters['weight'] == "Heavyweight") {
                        male_heavyweight.push(fighters);
                    }
                }                
            }
            // Female fighter filters
            else if (fighters['gender'] == "female") {
                female.push(fighters);
                // Filter by promotion
                if (fighters['promotion'] == "UFC") {
                    female_promotion.push(fighters);
                    // Filter by weight class
                    if (fighters['weight'] == "Women_Strawweight") {
                        female_strawweight.push(fighters);
                    }
                    else if (fighters['weight'] == "Women_Bantamweight") {
                        female_bantamweight.push(fighters);
                    }
                }
            }             
        }
    }    

    // Each corner has its own variables and filter function
    // Comments for red corner apply to blue corner as well

    // jQuery variables for dropdown selectors    
    var $red_gender = $('#red_gender');
    var $red_weight = $('#red_weight');
    var $red_promotion = $('#red_promotion'); 
    var $red_fighter = $('#red_fighter');
    var $red_info = $('#red_info');
    var $blue_gender = $('#blue_gender');
    var $blue_weight = $('#blue_weight');
    var $blue_promotion = $('#blue_promotion'); 
    var $blue_fighter = $('#blue_fighter');
    var $blue_info = $('#blue_info');    

    // Function to filter fighters when 'male' is selected
    $red_gender.on('change', function(){
        $red_promotion.empty();
        var promotions = ["UFC"];
        for (var i=0; i<promotions.length; i++) {
            $red_promotion.append('<option>' + promotions[i] + '</option>').selectpicker('refresh');
        }        
        if (($red_gender).val() == "Male") {
            $('#red_info_name').html("");
            $('#red_info_nickname').html("");
            $('#red_info_weight').html("");
            $('#red_info_record').html("");
            $('#red_img').attr("src", "../static/images/Body-1.png");         
            $red_fighter.empty();
            $red_weight.empty();
            $blue_gender.empty();
            $blue_gender.append('<option disabled>Female</option>');
            $blue_gender.append('<option>Male</option>').selectpicker('refresh');
            $blue_gender.selectpicker('val', 'Male').change();
            $('#blue_corner').show();
            // Modify weight class dropdown to only have male weight classes once gender is chosen
            var weight_classes = ["Flyweight", "Bantamweight", "Featherweight", "Lightweight", 
                                    "Welterweight", "Middleweight", "Light Heavyweight", "Heavyweight"];
            for (var i=0; i<weight_classes.length; i++) {
                $red_weight.append('<option>' + weight_classes[i] + '</option>').selectpicker('refresh');
            }                                              
            for (var i=0; i<male.length; i++) {
                $red_fighter.append('<option>' + male[i].last_name + ", " + male[i].first_name +'</option>').selectpicker('refresh');
            }
            // Function to filter fighters by weight class selected
            $red_weight.on('change', function(){
                if (($red_weight).val() == "Flyweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_flyweight.length; i++) {
                        $red_fighter.append('<option>' + male_flyweight[i].last_name + ", " + male_flyweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($red_weight).val() == "Bantamweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_bantamweight.length; i++) {
                        $red_fighter.append('<option>' + male_bantamweight[i].last_name + ", " + male_bantamweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($red_weight).val() == "Featherweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_featherweight.length; i++) {
                        $red_fighter.append('<option>' + male_featherweight[i].last_name + ", " + male_featherweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($red_weight).val() == "Lightweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_lightweight.length; i++) {
                        $red_fighter.append('<option>' + male_lightweight[i].last_name + ", " + male_lightweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($red_weight).val() == "Welterweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_welterweight.length; i++) {
                        $red_fighter.append('<option>' + male_welterweight[i].last_name + ", " + male_welterweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($red_weight).val() == "Middleweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_middleweight.length; i++) {
                        $red_fighter.append('<option>' + male_middleweight[i].last_name + ", " + male_middleweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($red_weight).val() == "Light Heavyweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_lhweight.length; i++) {
                        $red_fighter.append('<option>' + male_lhweight[i].last_name + ", " + male_lhweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($red_weight).val() == "Heavyweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<male_heavyweight.length; i++) {
                        $red_fighter.append('<option>' + male_heavyweight[i].last_name + ", " + male_heavyweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
            });            
        }
    });
    // Function to filter fighters when 'female' is selected
    $red_gender.on('change', function(){
        $red_promotion.empty();
        var promotions = ["UFC"];
        for (var i=0; i<promotions.length; i++) {
            $red_promotion.append('<option>' + promotions[i] + '</option>').selectpicker('refresh');
        }        
        if (($red_gender).val() == "Female") {
            $('#red_info_name').html("");
            $('#red_info_nickname').html("");
            $('#red_info_weight').html("");
            $('#red_info_record').html("");
            $('#red_img').attr("src", "../static/images/Body-1.png");                 
            $red_fighter.empty();
            $red_weight.empty();
            $blue_gender.empty();
            $blue_gender.append('<option>Female</option>');
            $blue_gender.append('<option disabled>Male</option>').selectpicker('refresh');
            $blue_gender.selectpicker('val', 'Female').change();
            $('#blue_corner').show();          
            // Modify weight class dropdown to only have female weight classes once gender is chosen
            var weight_classes = ["Strawweight", "Bantamweight"];
            for (var i=0; i<weight_classes.length; i++) {
                $red_weight.append('<option>' + weight_classes[i] + '</option>').selectpicker('refresh');
            }             
            for (var i=0; i<female.length; i++) {
                $red_fighter.append('<option>' + female[i].last_name + ", " + female[i].first_name +'</option>').selectpicker('refresh');
            }
            // Function to filter fighters by weight class selected
            $red_weight.on('change', function(){
                if (($red_weight).val() == "Strawweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<female_strawweight.length; i++) {
                        $red_fighter.append('<option>' + female_strawweight[i].last_name + ", " + female_strawweight[i].first_name +'</option>').selectpicker('refresh');
                    }
                }                      
                else if (($red_weight).val() == "Bantamweight") {
                    $('#red_info_name').html("");
                    $('#red_info_nickname').html("");
                    $('#red_info_weight').html("");
                    $('#red_info_record').html("");
                    $('#red_img').attr("src", "../static/images/Body-1.png");                    
                    $red_fighter.empty();
                    for (var i=0; i<female_bantamweight.length; i++) {
                        $red_fighter.append('<option>' + female_bantamweight[i].last_name + ", " + female_bantamweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
            });                        
        }
    });
    // Function loads fighter info on selection
    $red_fighter.on('change', function(){
        $('#red_info_name').html("");
        $('#red_info_nickname').html("");
        $('#red_info_weight').html("");
        $('#red_info_record').html("");
        var selected = $red_fighter.val();
        for (var i=0; i<fighterData.length; i++) {
            var data = fighterData[i];
            for (var i=0; i<data.length; i++) {
                var fighters = data[i];
                if (selected == (fighters.last_name + ", " + fighters.first_name)) {
                    $red_promotion.val(fighters.promotion);
                    $red_weight.val(fighters.weight);
                    $('#red_info_name').append(fighters.first_name + " " + fighters.last_name);
                    $('#red_info_nickname').append(fighters.nickname);
                    $('#red_info_weight').append(fighters.weight);
                    $('#red_info_record').append(fighters.win + "-" + fighters.loss + "-" + fighters.draw)
                    $('#red_img').attr("src", fighters.fighter_image);                                        
                }
            }
        }
    });

    $blue_gender.on('change', function(){
        $blue_promotion.empty();
        var promotions = ["UFC"];
        for (var i=0; i<promotions.length; i++) {
            $blue_promotion.append('<option>' + promotions[i] + '</option>').selectpicker('refresh');
        } 
        if (($blue_gender).val() == "Male") {
            $('#blue_info_name').html("");
            $('#blue_info_nickname').html("");
            $('#blue_info_weight').html("");
            $('#blue_info_record').html("");
            $('#blue_img').attr("src", "../static/images/Body-1.png");         
            $blue_fighter.empty();
            $blue_weight.empty();                                                      
            var weight_classes = ["Flyweight", "Bantamweight", "Featherweight", "Lightweight", 
                                    "Welterweight", "Middleweight", "Light Heavyweight", "Heavyweight"];                   
            for (var i=0; i<weight_classes.length; i++) {
                $blue_weight.append('<option>' + weight_classes[i] + '</option>').selectpicker('refresh');
            }                                              
            for (var i=0; i<male.length; i++) {
                $blue_fighter.append('<option>' + male[i].last_name + ", " + male[i].first_name +'</option>').selectpicker('refresh');
            }
            $blue_weight.on('change', function(){
                if (($blue_weight).val() == "Flyweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_flyweight.length; i++) {
                        $blue_fighter.append('<option>' + male_flyweight[i].last_name + ", " + male_flyweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($blue_weight).val() == "Bantamweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_bantamweight.length; i++) {
                        $blue_fighter.append('<option>' + male_bantamweight[i].last_name + ", " + male_bantamweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($blue_weight).val() == "Featherweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_featherweight.length; i++) {
                        $blue_fighter.append('<option>' + male_featherweight[i].last_name + ", " + male_featherweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($blue_weight).val() == "Lightweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_lightweight.length; i++) {
                        $blue_fighter.append('<option>' + male_lightweight[i].last_name + ", " + male_lightweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($blue_weight).val() == "Welterweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_welterweight.length; i++) {
                        $blue_fighter.append('<option>' + male_welterweight[i].last_name + ", " + male_welterweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($blue_weight).val() == "Middleweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_middleweight.length; i++) {
                        $blue_fighter.append('<option>' + male_middleweight[i].last_name + ", " + male_middleweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($blue_weight).val() == "Light Heavyweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_lhweight.length; i++) {
                        $blue_fighter.append('<option>' + male_lhweight[i].last_name + ", " + male_lhweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
                else if (($blue_weight).val() == "Heavyweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<male_heavyweight.length; i++) {
                        $blue_fighter.append('<option>' + male_heavyweight[i].last_name + ", " + male_heavyweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
            });            
        }
    });
    $blue_gender.on('change', function(){
        $blue_promotion.empty();
        var promotions = ["UFC"];
        for (var i=0; i<promotions.length; i++) {
            $blue_promotion.append('<option>' + promotions[i] + '</option>').selectpicker('refresh');
        }        
        if (($blue_gender).val() == "Female") {
            $('#blue_info_name').html("");
            $('#blue_info_nickname').html("");
            $('#blue_info_weight').html("");
            $('#blue_info_record').html("");
            $('#blue_img').attr("src", "../static/images/Body-1.png");             
            $blue_fighter.empty();
            $blue_weight.empty();                                                
            var weight_classes = ["Strawweight", "Bantamweight"];
            for (var i=0; i<weight_classes.length; i++) {
                $blue_weight.append('<option>' + weight_classes[i] + '</option>').selectpicker('refresh');
            }              
            for (var i=0; i<female.length; i++) {
                $blue_fighter.append('<option>' + female[i].last_name + ", " + female[i].first_name +'</option>').selectpicker('refresh');
            }
            $blue_weight.on('change', function(){
                if (($blue_weight).val() == "Strawweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<female_strawweight.length; i++) {
                        $blue_fighter.append('<option>' + female_strawweight[i].last_name + ", " + female_strawweight[i].first_name +'</option>').selectpicker('refresh');
                    }
                }                      
                else if (($blue_weight).val() == "Bantamweight") {
                    $('#blue_info_name').html("");
                    $('#blue_info_nickname').html("");
                    $('#blue_info_weight').html("");
                    $('#blue_info_record').html("");
                    $('#blue_img').attr("src", "../static/images/Body-1.png");                    
                    $blue_fighter.empty();
                    for (var i=0; i<female_bantamweight.length; i++) {
                        $blue_fighter.append('<option>' + female_bantamweight[i].last_name + ", " + female_bantamweight[i].first_name +'</option>').selectpicker('refresh');
                    }                            
                }
            });                        
        }
    });
    $blue_fighter.on('change', function(){
        $('#blue_info_name').html("");
        $('#blue_info_nickname').html("");
        $('#blue_info_weight').html("");
        $('#blue_info_record').html("");
        var selected = $blue_fighter.val();
        for (var i=0; i<fighterData.length; i++) {
            var data = fighterData[i];
            for (var i=0; i<data.length; i++) {
                var fighters = data[i];
                if (selected == (fighters.last_name + ", " + fighters.first_name)) {
                    $blue_promotion.val(fighters.promotion);
                    $blue_weight.val(fighters.weight);                    
                    $('#blue_info_name').append(fighters.first_name + " " + fighters.last_name);
                    $('#blue_info_nickname').append(fighters.nickname);
                    $('#blue_info_weight').append(fighters.weight);
                    $('#blue_info_record').append(fighters.win + "-" + fighters.loss + "-" + fighters.draw)
                    $('#blue_img').attr("src", fighters.fighter_image);                                           
                }
            }
        }
    });
});
</script>
