/*Created by Hugo Fief*/

alert("Voici quiz qui porte sur le html/css et la culture générale de l'informatique je vous mêt au défis de faire 10/10")

function submitAnswers() {
    
        var total = 10;
        var score = 0;
    
        //Get user input
    
    
        var q1 = document.forms["csQuizForm"]["q1"].value;
        var q2 = document.forms["csQuizForm"]["q2"].value;
        var q3 = document.forms["csQuizForm"]["q3"].value;
        var q4 = document.forms["csQuizForm"]["q4"].value;
        var q5 = document.forms["csQuizForm"]["q5"].value;        
        var q6 = document.forms["csQuizForm"]["q6"].value;               
        var q7 = document.forms["csQuizForm"]["q7"].value;
        var q8 = document.forms["csQuizForm"]["q8"].value;
        var q9 = document.forms["csQuizForm"]["q9"].value;
        var q10 = document.forms["csQuizForm"]["q10"].value;
        
        //Validation
        
        
        for(var i = 1; i <= total; i++){
    
            if (eval('q' + i) == null || eval('q' + i) == '') {
                
   alert('Tu as oublié la question ' + i);
                return false;
            }
    
        }
    
        //Set correct answers
    var answers = 
    ["b", "b", "c", "c", "b","b", "c", "b", "b","c"];
    
        //Checking answers
    
        for( i = 1; i <= total; i++){
    
            if (eval('q' + i) == answers[i - 1]) {
    
                score++; 
                
           }           
        }
        //Display results
    
        var results = document.getElementById('results');
        
results.textContent = score + "/" + total;
        return false;
    
    }
    
 
 //Viewing results in results box
    $(document).ready(function () {
    
   $('.myLink').on('click', function() {
  $('form').slideToggle(500);
  $('.reset').css('display','initial');
        })
$('.myLink2').on('click', function() {
  $('form').slideToggle(0);
   $('.reset').css('display','none');
   $('input:radio:checked').prop('checked', false);
        })
        })