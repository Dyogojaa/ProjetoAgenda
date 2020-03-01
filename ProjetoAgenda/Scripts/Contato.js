function SalvarContato()
{
    //debugger;

    //Nome
    var nome = $("#Nome").val();

    var token = $('input[name="__RequestVerificationToken"]').val();
    var tokenadr = $('form[action="/Pedido/Create"] input[name="__RequestVerificationToken"]').val();
    var headers = {};
    var headersadr = {};
    headers['__RequestVerificationToken'] = token;
    headersadr['__RequestVerificationToken'] = tokenadr;

    //Gravar
    var url = "/Contato/Create";

    $.ajax({
        url: url
        , type: "POST"
        , datatype: "json"
        , headers: headersadr
        , data: { Id: 0, Nome: nome, __RequestVerificationToken :token  }
        , success: function (data) {
            if (data.Resultado > 0) {
                ListarTelefones(data.Resultado);
                ListarEmails(data.Resultado);
            }
        }
    });

}
function ListarTelefones(idContato)
{
    var url = "/Telefones/ListarFones";

    $.ajax({
        url: url
        , type: "GET"
        , data: { id: idContato }
        , datatype: "html"
        , success: function (data) {
            var divTelefones = $("#Telefones");
            divTelefones.empty();
            divTelefones.show();
            divTelefones.html(data);
        }

    });

}

function ListarEmails(idContato) {
    var url = "/Emails/ListarEmails";

    $.ajax({
        url: url
        , type: "GET"
        , data: { id: idContato }
        , datatype: "html"
        , success: function (data) {
            var divEmails = $("#Emails");
            divEmails.empty();
            divEmails.show();
            divEmails.html(data);
        }

    });

}

function Salvar()
{
    var telefone = $("#Telefone").val();
    var idContato = $("#idContato").val();

    var url = "/Telefones/Salvar";

    $.ajax({
        url: url
        , data: { telefone: telefone, idContato: idContato }
        , type: "GET"
        , datatype: "html"
        , success: function (data) {
            if (data.Resultado > 0)
            {
                ListarTelefones(idContato);
            }
        }
    });

}

function SalvarEmail() {

    debugger;

    var email = $("#Email").val();
    var idContato = $("#idContato").val();

    var url = "/Emails/SalvarEmail";

    $.ajax({
        url: url
        , data: { Email: email, idContato: idContato }
        , type: "GET"
        , datatype: "html"
        , success: function (data) {
            if (data.Resultado > 0) {
                ListarEmails(idContato);
            }
        }
    });

}