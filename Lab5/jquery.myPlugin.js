﻿(function( $ ) {
  var methods = {
    start : function () {
      var userChoice = null;
      var computerChoice = null;
      $(document).ready(
        function ()
        {
             $('#rock').click(function(){
                userChoice = "rock";
                newComputerChoice();
                computResult();
            });
            $('#paper').click(function(){
                userChoice = "paper";
                newComputerChoice ();
                computResult();
            });
            $('#scissors').click(function(){
                userChoice = "scissors";
                newComputerChoice ();
                computResult();
            });
        }
    );

    function newComputerChoice ()
    {
        computerChoice = Math.floor(Math.random() * 3) + 1;
        
        if (computerChoice == 1)
            {
                computerChoice = "rock";
            }
        else if (computerChoice == 2)
            {
                computerChoice = "paper";
            }
        else 
            {
                computerChoice = "scissors";
            }

    }
    function computResult()
    {
        var result; 
        if (userChoice == computerChoice){
            result="Ничья!";
        } else if (userChoice == "rock" && computerChoice == "scissors"){
            result=" <img src='https://i.gifer.com/6iDq.gif' width='200px'/>";
        } else if (userChoice == "paper" && computerChoice == "rock"){
            result=" <img src='https://i.gifer.com/6iDq.gif' width='200px' />";
        } else if (userChoice == "scissors" && computerChoice == "paper"){
            result=" <img src='https://i.gifer.com/6iDq.gif' width='200px' />";
        } else if (computerChoice == "rock" && userChoice == "scissors"){
            result=" <img src='https://i.gifer.com/49f1.gif' width='200px' />";
        } else if (computerChoice == "paper" && userChoice == "rock"){
            result=" <img src='https://i.gifer.com/49f1.gif' width='200px' />";
        } else if (computerChoice == "scissors" && userChoice == "paper"){
            result=" <img src='https://i.gifer.com/49f1.gif' width='200px' />";
        }
        var table=document.getElementById("result");
        var row=table.insertRow(table.rows.length);
        var cell=row.insertCell(row.cells.length);
        var img=document.createElement("img");
        img.src=document.getElementById(computerChoice).src;
        img.width=document.getElementById(computerChoice).width;
        $(cell).append(img);
        cell=row.insertCell(row.cells.length);
        img=document.createElement("img");
        img.src=document.getElementById(userChoice).src;
        img.width=document.getElementById(userChoice).width;
        $(cell).append(img);
        cell=row.insertCell(row.cells.length);
        cell.innerHTML=result;
    }
      
}}
   $.fn.myPlugin = function(method) { 
      if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
        } 
        return this.each(methods[start]);
        
      };
    })( jQuery );