document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems,{});
  });


  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });

  
  $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
 
          