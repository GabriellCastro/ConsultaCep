//sitema de cep com ajax e jquery



function consultaCep(){
    var cep = document.getElementById("cep").value
    var url = "https://viacep.com.br/ws/"+ cep +"/json/"
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro) 
            $("#complemento").html(response.complemento)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            
        }
    })
}

            //essa e outra maneira de se fazer
            
            //document.getElementById("logradouro").innerHTML = response.logradouro
            // document.getElementById("complemento").innerHTML = response.complemento
            // document.getElementById("bairro").innerHTML = response.bairro
            // document.getElementById("localidade").innerHTML = response.localidade
            // document.getElementById("uf").innerHTML = response.uf
