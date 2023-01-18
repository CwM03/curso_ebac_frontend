$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        
        $('p').click(function() {
            $(this).css({textDecoration: "line-through"});
        })
    })
})