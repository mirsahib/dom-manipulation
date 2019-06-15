/* Task 1 */
var heading= document.getElementById('heading')
console.log(heading.innerText)
heading.innerText="This is new"


/* Task 2 using plain JavaScript */

//Task 2a
var textBtn= document.getElementById('addtext1')
textBtn.addEventListener('click', function(event){

    var task2= document.getElementById('task2a')
    var paragraph=document.createElement('p')
    paragraph.innerText="Hello World"
    task2.appendChild(paragraph)
})

//Task 2b

function changeBGcolor(event){
    //console.log(event.target.innerText)

var body=document.getElementsByTagName('body')[0]
body.style.backgroundColor = event.target.innerText.toLowerCase()

}


//Task 2c

function redirectToGoogle(event){
    window.location.assign("https://www.google.com/")
}




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