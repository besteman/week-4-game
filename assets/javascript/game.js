// Pass in Value = PIV
// After Value = AV


$(document).ready(function() {

// Create grobal variables for the hellos attributes 

  var hero_img = new Array();
  hero_img[0] = new Image();
  hero_img[0].src = 'assets/images/link.png';
  hero_img[0].id = 'image';

  hero_img[1] = new Image();
  hero_img[1].src = 'assets/images/bongo.png';
  hero_img[1].id = 'image';

  hero_img[2] = new Image();
  hero_img[2].src = 'assets/images/gandondorf.jpg';
  hero_img[2].id = 'image';

  hero_img[3] = new Image();
  hero_img[3].src = 'assets/images/queen.png';
  hero_img[3].id = 'image';

  hero_img[4] = new Image();
  hero_img[4].src = 'assets/images/volvagia.png';
  hero_img[4].id = 'image';

  hero_img[5] = new Image();
  hero_img[5].src = 'assets/images/phantom.png';
  hero_img[5].id = 'image';

  hero_img[6] = new Image();
  hero_img[6].src = 'assets/images/twin.png';
  hero_img[6].id = 'image';

  hero_img[7] = new Image();
  hero_img[7].src = 'assets/images/morpha.png';
  hero_img[7].id = 'image';

  hero_img[8] = new Image();
  hero_img[8].src = 'assets/images/barinade.png';
  hero_img[8].id = 'image';

  hero_img[9] = new Image();
  hero_img[9].src = 'assets/images/king.png';
  hero_img[9].id = 'image';

  var choices_name = ["Link", "Bongo Bongo", "Gandondorf", "Queen Gohma","Volvagia","Phantom Ganon","Twinirova","Morpha","Barinade" , "King Dodongo"]
  var choices_hp = [150, 110, 130, 75,110,100,130,105,95,85];
  var choices_ap = [];
  var choices_cp = [];

  var choices_data = ["He is usually depicted as a courageous young boy or teenager in green clothing who leaves his home and any relatives to pursue his destiny: fighting the evil forces threatening the land. Over the course of his adventure, Link defeats legions of evil monsters, explores vasts lands, helps anyone he meets struggling, navigates deadly dungeons, and collects mythical items while pursuing his quest for justice and peace. In the end, he gains the power needed to thwart his main enemy and becomes a legendary hero. He is considered an iconic character in video gaming and the very symbol of the Zelda franchise, and remains one of the most popular video game protagonists.",
   "Bongo Bongo is a gargantuan, invisible, and evil spirit, appearing as a one-eyed monster with disembodied hands and a black-purpleish colorization. Prior to the game's events, it was sealed away by Impa in the bottom of the Well of Three Features in Kakariko Village. However, when Ganondorf assumes power, Bongo Bongo eventually breaks the seal placed on it and sets Kakariko Village on fire. Link arrives just as Bongo Bongo escapes, but fails to stop it from traveling to the Shadow Temple.", 
   "Great King of Evil or the Dark Lord Ganondorf was born a member of the Gerudo; as the only male member to be born in a hundred years, Ganondorf is made either the King of the Gerudo or the Guardian of the Desert, depending on the game. Gifted with powerful magic, Ganondorf often seeks the omnipotent Triforce to grant his wish of conquering the entire world. He frequently wields the Triforce of Power, and stages coups against the Royal Family of Hyrule to take the Hyrulean Throne by force."
   , "Parasitic Armored Arachnid Queen Gohma is the 'curse' that was placed on the Great Deku Tree by Ganondorf. A spider-like creature, she can hatch Gohma Larvae to help her defeat Link. nterestingly, Queen Gohma's boss title labels her only as 'Gohma' The term 'Queen Gohma' is only used in-game by the Deku Scrub Brothers outside her lair."
   ,"Scorching Hot Cave Dwelling Dragon  Boss of the Fire Temple, the second dungeon in the adult portion of The Legend of Zelda: Ocarina of Time, and the fifth dungeon overall. Volvagia is a monstrous dragon and was a blight upon Hyrule, specifically Death Mountain, for many years prior to the events of the game. He flies through the air in a blaze of fire and dives through pools of molten lava, unharmed despite their intense heat. Volvagia is infamous among the Gorons for devouring their kind alive, but was eventually defeated and slain by the Hero of the Gorons, who wielded the Megaton Hammer."
   ,"Evil Spirit of Another Dimension  Boss of the Forest Temple, the first dungeon in the adult portion of The Legend of Zelda: Ocarina of Time, and the fourth dungeon overall. Created by Ganondorf to hold Saria captive, he is depicted as being nearly identical to Ganondorf, with the only exception being his skull-like face."
   ,"Twin Sorceresses  Bosses from The Legend of Zelda: Ocarina of Time. They can be found in the Spirit Temple, the fifth dungeon in the adult portion of the game and the ninth dungeon overall. Twinrova is fought both as two separate entities, and one singular unit. Koume controls fire, while Kotake controls ice."
   ,"Aquatic Cell Nucleus  Boss of the Water Temple, the sixth dungeon in The Legend of Zelda: Ocarina of Time. It is a large, amoebic creature consisting of a main nucleus surrounded by blue cytoplasm. The nucleus is able to manipulate the water in a pool, allowing it to grab, constrict, or strike Link."
   ,"Electric Rotating Intestinal Worm Boss of Inside Jabu-Jabu's Belly, the third dungeon in The Legend of Zelda: Ocarina of Time. This parasitic organism is revealed to be the cause of Lord Jabu-Jabu's gastrointestinal distress. It appears to have a symbiotic relationship of some sort with Bari. It also bears some resemblance to Kalle Demos."
   ,"Infernal Dinosaur King Dodongo is the leader of the Dodongo sent to the cavern by Ganondorf. This is problematic for the Gorons, as King Dodongo loves to eat them. Interestingly, even though the size of King Dodongo is impressive, he is apparently not the largest one of his kind, as the entrance to his lair is adorned with what appears to be the skull of a Dodongo even bigger than him."]



/*  var young_hero = ["Link", "Bongo Bongo", "Gandondorf", "Queen Gohma"];
  var health = [100, 90, 120, 75];
  var attack_power = [];
  var counter_power = [];*/

  var young_hero = [];
  var health = [];
  var attack_power = [];
  var counter_power = [];
  var hero_image = [];
  var hero_bio = [];

  var game_name = [choices_name[Math.floor(Math.random()*9)]];

  console.log(game_name);

  var enemy_select;
  var hero_select;
  var num_players = 4;

  // PIV: attack_ power , counter_power
  // AV: Random numbers generated 
  // Purpose: Populate the attack_power and counter_power with four
  // random number
  function generate_full_power(){

    for (var i = 0; i < choices_name.length; i++) {

    var x = Math.floor(Math.random()*20) + 3;
    var y = Math.floor(Math.random()*10) + 3;
    choices_ap.push(x);
    choices_cp.push(y);

    }
  }

  //PIV: Takes in the names,hp,cp,ap,image,bio of the character
  //AV: Populates the arrays of the character attributies 
  //: Allows the user a 
  function roster(){

    for (var i = 0; i < num_players; i++) {

      var random_num = Math.floor(Math.random()*choices_name.length);

      young_hero.push([choices_name[random_num]]);
      health.push([choices_hp[random_num]]);
      attack_power.push([choices_ap[random_num]]);
      counter_power.push([choices_cp[random_num]]);
      hero_image.push([hero_img[random_num]]);
      hero_bio.push([choices_data[random_num]]);

      choices_name.splice(random_num,1);
      choices_hp.splice(random_num,1);
      choices_ap.splice(random_num,1);
      choices_cp.splice(random_num,1);
      hero_img.splice(random_num,1);
      choices_data.splice(random_num,1);

      console.log(young_hero);


    }

  }

  // PIV: attack_ power , counter_power
  // AV: Random numbers generated 
  // Purpose: Populate the attack_power and counter_power with four
  // random number
  function it_is_over_9000(){

    for (var i = 0; i < young_hero.length; i++) {

        var x = Math.floor(Math.random()*20) + 3;
        var y = Math.floor(Math.random()*10) + 3;
        attack_power.push(x);
        counter_power.push(y);

    }
  }

  // PIV: All the grobal variables
  // AV: Will set the heros are button with classes and data-value
  // Purpose: To create dynamic button that will be appended to the html
  // in the buttons div
  // Also serves are the reset of the game
  // Must run first and for most
  function ready_board(){
     
      it_is_over_9000();
      
      for (var i = 0; i < young_hero.length; i++) {

          var hero_btns = $("<button>");
          hero_btns.addClass("hero hero_button");
          hero_btns.attr({
              "data-name": young_hero[i],
              "data-health": health[i],
              "data-image": hero_image[i],
              "data-attack": attack_power[i],
              "data-counter": counter_power[i],
              "data-index": i,
              "data-bio": hero_bio[i]
          });

          hero_btns.text(young_hero[i]);
          hero_btns.append(hero_image[i]);
          hero_btns.append(health[i]);
          //$("#buttons").append(hero_btns).fadeIn("slow");
          $("#buttons").append(hero_btns);

      }
  }

  // PIV: Grobal variables and the ready_board function
  // AV: Generates the hero and the enemies of the hero
  // Purpose: To create a hero by letting the user click on the 
  // four buttons 
  // Special: Has to run after the ready_board function
  // Will move to the defend() immediately
  function char(){

      $(".hero_button").on("click", function() {

        $(".info").remove();
          
        var hero = $(this);
        hero_select = hero.data('index');

        for (var i = 0; i < young_hero.length; i++) {
           
            if (i != hero_select){

                var enemies = $("<button>");
                enemies.addClass("hero enemy btn-danger");
                enemies.attr({
                    "data-name": young_hero[i],
                    "data-health": health[i],
                    "data-image": hero_image[i],
                    "data-attack": attack_power[i],
                    "data-counter": counter_power[i],
                    "data-index": i,
                    "data-bio": hero_bio[i]
                });

                enemies.text(young_hero[i]);
                enemies.append(hero_image[i]);
                enemies.append(health[i]);
                $("#battle").append(enemies);

            }
        }

        $("#buttons").html($(this).data('name','health','image'));
        $("#inst").html("<h4 class = 'text-center'>Instructions</h4><hr><p class = 'text-center'>Choose from the red enemies who you want to fight</p>");

        defender();

      });
  }

  // PIV: grabal variables and char function
  // AV: Creates the one on one fight between the hero and the defend
  // Purpose: To allow the user to choose an enemy to battle
  // Special: Must be run after the char function
  function defender(){

      $(".enemy").on("click", function() {

        if ($("#defend").is(":empty")) {

          $("#inst").html("<p>Attack</p>");

          var enemy = $(this);
          enemy_select = enemy.data("index"); 

          for (var i = 0; i < young_hero.length; i++) {

            if (i == enemy_select) {

                var defender = $("<button>");
                defender.addClass("hero defender btn-danger");
                defender.attr({
                    "data-name": young_hero[i],
                    "data-health": health[i],
                    "data-image": hero_image[i],
                    "data-attack": attack_power[i],
                    "data-counter": counter_power[i],
                    "data-index": i,
                    "data-bio": hero_bio[i]
                });

                defender.text(young_hero[i]);
                defender.append(hero_image[i]);
                defender.append(health[i]);

                $("#defend").append(defender);
                $(this).remove();
            }
          }

        $("#inst").html("<h4 class = 'text-center'>Instructions</h4><hr><p class = 'text-center'>Click defend to fight</p>");

        }
      });
  }


  // PIV: Defender and Hero
  // AV: Result of the battle
  // Purpose: To allow the user to click the defend button to attack
  // The defend
  // Special: PAIN IN MY ASS
  // Must be run last
  $(".defend_button").on("click" , function() {

     if ($("#defend").is(":empty") != true) {
   
      console.log("Hero counter points: "+$(".hero_button").data("counter"));
      console.log("Hero attack points: "+$(".hero_button").data("attack"));
    
      console.log("Defender counter points: "+$(".defender").data("counter"));
      console.log("Defender attack points: "+$(".defender").data("attack"));

      console.log(attack_power);
      console.log(counter_power);

      var hero_health = $(".hero_button").data("health") - $(".defender").data("attack");
      var defender_health = $(".defender").data("health") - $(".hero_button").data("counter");
      var hero_counter = $(".hero_button").data("counter") + 10;

      console.log(hero_health);
      console.log(defender_health);

    $(".hero_button").data({
        "health":  hero_health,
        "counter": hero_counter
    });
        
    $(".defender").data({
            "health":  defender_health
    });
        
    var new_health_defender = $(".defender").data("health");
    var new_health_hero = $(".hero_button").data("health");
    var new_hero_counter = $(".hero_button").data("counter");
    
    var update_defender = $("<button>");

        update_defender.addClass("hero defender");
        update_defender.attr({
            "data-name": young_hero[enemy_select],
            "data-health": new_health_defender,  
            "data-image": hero_image[enemy_select],
            "data-attack": attack_power[enemy_select],
            "data-counter": counter_power[enemy_select],
            "data-index": enemy_select
        });

        update_defender.text(young_hero[enemy_select]);
        update_defender.append(hero_image[enemy_select]);
        update_defender.append(new_health_defender);
      
      $("#defend").html(update_defender.data('name','health','image'));

        var update_hero = $("<button>");

        update_hero.addClass("hero hero_button");
        update_hero.attr({
            "data-name": young_hero[hero_select],
            "data-health": new_health_hero,  
            "data-image": hero_image[hero_select],
            "data-attack": attack_power[hero_select],
            "data-counter": new_hero_counter,
            "data-index": hero_select
        });

        update_hero.text(young_hero[hero_select]);
        update_hero.append(hero_image[hero_select]);
        update_hero.append(new_health_hero);
      
      $("#buttons").html(update_hero.data('name','health','image'));

   
        if($(".defender").data("health") < 0){
          $(".defender").remove();
        $("#inst").html("<h4 class = 'text-center'>Instructions</h4><hr><p class = 'text-center'>One down, choose another</p>");


        }
         
        if($(".hero_button").data("health") < 0){
          $(".hero_button").remove();
          $("#inst").html("<p class = 'text-center'>You Lost</p><p>If you want to play again hit Reset</p>");
        }

        if ($("#battle").is(":empty") != false) {
          $("#inst").html("<p class = 'text-center'>You Won</p><p>If you want to play again hit Reset</p>");
        }

     } 
});


  // PIV: None
  // AV: Complete reset
  // Purpose: To allow the user to choose to start over
  $(".reset_button").on("click",function(){

    location.reload();

  });

    generate_full_power();
    roster();
    ready_board();
    char();

// PIV: Bios, name
// AV: Populates the user bios
// Allows the user to read the character's
$(".hero_button")
    .mouseover(function(){
      

        var user_select = $(this);
        var user_name = $(this);
        user_select = user_select.data('bio');
        user_name = user_name.data('name');
        $(".info").addClass("panel col-md-6 pull-right panel panel-default");
        $(".info").html("<h3 class='text-center'>" + user_name + " Bio</h3><hr>" + "<p class = 'text-center'>" + user_select + "</p>");

    })
    .mouseout(function(){

      $(".info").html("");
      $(".info").removeClass("panel panel-default");
    });


});
