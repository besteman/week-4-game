// Pass in Value = PIV
// After Value = AV


$(document).ready(function() {

// Create grobal variables for the hellos attributes 

  var hero_image = new Array();
  hero_image[0] = new Image();
  hero_image[0].src = 'assets/images/link.png';
  hero_image[0].id = 'image';

  hero_image[1] = new Image();
  hero_image[1].src = 'assets/images/bongo.png';
  hero_image[1].id = 'image';

  hero_image[2] = new Image();
  hero_image[2].src = 'assets/images/gandondorf.jpg';
  hero_image[2].id = 'image';

  hero_image[3] = new Image();
  hero_image[3].src = 'assets/images/queen.png';
  hero_image[3].id = 'image';

  var young_hero = ["Link", "Bongo Bongo", "Gandondorf", "Queen Gohma"];
  var health = [100, 70, 120, 50];
  var attack_power = [];
  var counter_power = [];

  var enemy_select;
  var hero_select;

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
              "data-index": i
          });

          hero_btns.text(young_hero[i]);
          hero_btns.append(hero_image[i]);
          hero_btns.append(health[i]);
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
                    "data-index": i
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
                defender.addClass("hero defender ");
                defender.attr({
                    "data-name": young_hero[i],
                    "data-health": health[i],
                    "data-image": hero_image[i],
                    "data-attack": attack_power[i],
                    "data-counter": counter_power[i],
                    "data-index": i
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


/*    var count = young_hero.length - 1;
    console.log(count);

    function winner_winner_chickdinner(){
      console.log("hey");
      var winner_name = $(".hero_button").data("name")
      $("#buttons").append(winner_name);
    }*/


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
          $("#inst").html("<p class = 'text-center'>You Lost</p>");
        }

        if ($("#battle").is(":empty") != false) {
          $("#inst").html("<p class = 'text-center'>You Won</p>");
        }

     } 
});

  // PIV: None
  // AV: Complete reset
  // Purpose: To allow the user to choose to start over
  $(".reset_button").on("click",function(){

    location.reload();

  });

    ready_board();
    char();

});
