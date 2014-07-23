$(function() {

    var questions = $('#accordeon');

    questions.on('click', function(event) {
        var target = $(event.target);

        target.parent('li').toggleClass('opened');
    })

})