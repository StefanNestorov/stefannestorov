$(function () {
    $('table tr:even').addClass("zebra");
});

$("#hidebutton").click(function () {
    
    $('#table1').slideToggle("slow", function () {
        $("#toggleButton").fadeOut();
    });
});

$('<input type="button" value="toggle" id="toggleButton">')
.insertAfter("#hidebutton");

$('<strong>START!</strong>').prependTo('#table1');
$('<strong>END!</strong>').appendTo('#table1');

$('<div>', {
    id: 'specialButton',
    text: 'Click Me!',
    click: function () {
        alert("Advanced jQuery!");
    }
}).insertBefore('#table1');

$('#table1 tr').hover(function () {
    $(this).addClass('zebraHover');
}, function () {
    $(this).removeClass('zebraHover');
});

$("#table1 tr").click(function () {
    $(this).toggleClass("zebraHover");
});

$('.spoiler').hide();
$('<input type="button" class="revealer" value="Tell Me!"/>')
.insertBefore('.spoiler');
$('.revealer').click(function () {
    $(this).hide();
    $(this).next().fadeIn();
});

$('p').animate({
    padding: '20px',
    fontSize: '30px'
}, 2000);

$("nav li").hover(function () {
    $(this).animate({ paddingLeft: '+=15px' }, 200);
}, function () {
    $(this).animate({ paddingLeft: '-=15px' }, 200);
});

$('table').animate({ 'backgroundColor': '#ff9f5f' }, 2000);

$("#bio > div").hide();
$("#bio > div:first").show();
$("#bio h3").click(function () {
    $(this).next().animate(
        { "height": "toggle" }, "slow", "easeOutBounce");
});

$('<div id="navigation_blob"></div>').css({
    width: 0,
    height: $("#nav li:first a").height() + 10
}).appendTo("#nav");

$('#navigation_blob').animate(
{
    width: $(this).width() + 10,
    left: $(this).position().left
},
{
    duration: 'slow',
    easing: 'easeOutCirc',
    queue: false
})

