let storedNum;
let currentNum = "";
let operator = '';
let answer;

$('.numbtn').click(function(){
    currentNum += this.textContent
    currentNum = currentNum.replace(/\s/g, '');
    $('#screen-num').text(currentNum);
});

//['divide', 'times', 'minus', 'plus']
$(".mathbtn").click(function(){
  operator = $(this).attr('id');
  if (currentNum == ""){
    console.log("No number to calculate");
  } else if(storedNum == undefined){
    storedNum = Number(currentNum);
  } else {
    currentNum = Number(currentNum);
    answer = calculate(storedNum, currentNum, operator);
    $("#screen-num").text(answer);
    storedNum = answer;
  }
  currentNum = "";
});

$(".equalsbtn").click(function(){
  currentNum = Number(currentNum);
  answer = calculate(storedNum, currentNum, operator);
  $("#screen-num").text(answer);
  storedNum = answer;
  currentNum = "";
});

$("#ac").click(function(){
  $("#screen-num").text('00');
});

$("#ce").click(function(){
  $("#screen-num").text('00');
  storedNum = undefined;
  operator = "";
});




function calculate(x, y, operator){
  switch (operator){
    case 'divide':
      return storedNum / currentNum;
    case 'times':
      return storedNum * currentNum;
    case 'minus':
      return storedNum - currentNum;
    case 'plus':
      return storedNum + currentNum;
  }
}
