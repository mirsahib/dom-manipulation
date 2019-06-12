/* Task 1 */


/* Task 2 using plain JavaScript */



/* Task 4 using jQuery */
// Task 4a 
$('#addtext2').click(function(event){
    console.log('click')
    var paragraph = $('<p>').text('hello world')
    $('#task4a').append(paragraph)
})
// Task 4b
function changeBG(event){
    var color = event.target.innerText.toLowerCase()
    $('body').css('background-color',color)
}
// Task 4c
function ADD(event){
    //my implementation
    var a = $('#firstField').val();
    var b = $('#secondField').val();
    var total = parseInt(a,10)+parseInt(b,10)
    $('#showSum').text('The sum is '+total)
    //var sum = Number($('#num1').val())+Number($('#num2').val())
    //$('#showSum').text('The sum is '+sum)
}