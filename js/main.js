$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })
    $('#cep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: 'Insira um email valido',
            telefone: 'Insira um telefone valido',
            cpf: 'Insira um CPF valido',
            cep: 'Insira um CEP valido',
            endereço: 'Insira um endereço valido',
        },

        errorPlacement: function(error, element) {
            error.insertAfter(element.prev('label')); // Insere a mensagem de erro após o elemento
        }

    })

})