function consultaCep(){
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/"${cep}"/json/`;
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#logradouro").html(response.logradouro) 
            $("#complemento").html(response.complemento)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
        }
    })
}
            //essa e outra maneira de se fazer
            
            // document.getElementById("logradouro").innerHTML = response.logradouro
            // document.getElementById("complemento").innerHTML = response.complemento
            // document.getElementById("bairro").innerHTML = response.bairro
            // document.getElementById("localidade").innerHTML = response.localidade
            // document.getElementById("uf").innerHTML = response.uf
