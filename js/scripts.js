$(function(){

  $('#wordPlay').submit(function(event){
    event.preventDefault();

    var userItem1 = $('#item1').val();
    var splitWords=userItem1.split(",");
    var newWords = [];
    var wordFilter=splitWords.map(function(splitWord){
      if (splitWord.length>=3){
        newWords.push(splitWord);
      }
    });
    newWords.reverse();
    newWords = newWords.join();
    alert(newWords + ' length:' + newWords.length);



    //alert(userItem1 + ' ' + userItem2 + ' ' + userItem3);

  });

});
