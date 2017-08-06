<!DOCTYPE php>
<html lang="en">
   <head>
       <title>card stack</title>
       
       <meta charset=utf-8>
       <meta name=viewport content="width=device-width, initial-scale=1">
       
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
       <script src="js/draggable.js"></script>
       <script src="js/cardSorter.js"></script>
       
       <style>
           *, *:after, *:b\efore {
               -webkit-box-sizing: border-box;
               -moz-box-sizing: border-box;
               box-sizing: border-box;
           }
           
           .drag {

           }

           .flex {
               display: flex;
               flex-wrap: wrap;
           }

           .card {
               border: 2px solid blue;
               color: blue;
               border-radius: 10px;
               font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
               font-size: 3em;
               padding: 2em;
               background: white;
               width: 3cm;
               height: 5cm;
               position: fixed;
               cursor: move;
           }
           
           .forty {
               transform: rotate(45deg);
           }


       </style>
   </head>
   <body>
       <p>
           <?php
            $cards = array(
                "Anti-aircraft Alpaca",
                "Battleship Bat",
                "Duelist Dugong",
                "Explosive	Elephant",
                "Firefight Fish",
                "Karate Kangaroo",
                "Karate Komodo dragon",
                "Landmine Leopard",
                "Napalm Newt",
                "Psycho	Penguin",
                "Rage Raccoon",
                "Slayer Seahorse",
                "Tsunami Tiger",
                "Violent Vulture",
                "Warlord Wolverine");
            
            foreach ($cards as $card) {
                echo "<div class='card drag'><div class='forty'>" . $card . "</div></div>";
            }
           ?> 
       </p>
       <div class='flex'>
            <div class='card drag'><div class='forty'>Oh boy!</div></div>
       </div>
   </body>
</html>