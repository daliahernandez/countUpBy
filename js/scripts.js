$(document).ready(function(){
  $('#userInput').submit(function(event){
    var countTo = $('input#countTo').val();
    var countBy = $('input#countBy').val();
    var numCountBy = []

    for(var index = 1; index <= countTo; index ++){
      if(index % countBy == 0){
        numCountBy.push(index)
      }
    }

    $('.output').text(`Count up to: ${countTo} Results: ${numCountBy}`)
    event.preventDefault();
  });
});
