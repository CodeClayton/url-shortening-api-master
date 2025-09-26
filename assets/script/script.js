const input = document.querySelector('#inputLink')
const form = document.querySelector('#form')



form.addEventListener('submit',async (e) => {
  e.preventDefault();
    console.log(input.value)
    await shortLink();
})

async function shortLink(){
    let formData = new FormData();
    let urlN = input.value;
    formData.append("url", urlN); // CORRETO para adicionar ao formData

    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: 'POST', 
        body: formData // Não defina o Content-Type aqui
    });

    const data = await response.json();
    console.log(data); // Ver o link encurtado
}
