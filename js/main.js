$(document).ready(function() {
    $('.cdt-button button').click(function() {
        $('#cadastro').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000' 
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#cadastro').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome!',
            email: 'Por favor, insira seu e-mail!',
            telefone: 'Por favor, insira seu telefone!',
            cpf: 'Por favor, insira seu cpf!',
            endereco: 'Por favor, insira seu endereco!',
            cep: 'Por favor, insira seu cep!'
        },

        invalidHandler: function(event, validator) {
            const validate = validator.numberOfInvalids();
            if(validate) {
                alert(`O formulário possui ${validate} campos inválidos!`);
            }
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    })
})