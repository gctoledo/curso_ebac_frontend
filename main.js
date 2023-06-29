$(document).ready(function() {
    $('form').submit(function(e){
        const novaTarefa = $('#nova-tarefa').val();
        e.preventDefault();
        $(`<li>${novaTarefa}</li>`).appendTo('ul');

        $('#nova-tarefa').val("");
    })

    $('ul').on('click','li',function(){
        $(this).toggleClass('riscado');
    })
})