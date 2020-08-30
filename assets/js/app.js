CEPinput.oninput = () => {

    if (CEPinput.value.length != 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${CEPinput.value}/json/`)
        .then((resposta) => resposta.json())
        .then((dados) => {
            ruainput.value = dados.logradouro;
            bairroinput.value = dados.bairro;
            UFinput.value = dados.uf;
            CEPinput.value = dados.cep;
        })
};