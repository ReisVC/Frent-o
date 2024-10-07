/* 
            AQUI FOI FEITO APENAS COM O CONHECIMENTO QUE TENHO DOMÍNIO, SEM PESQUISAR NADA

<<OBSERVAÇÕES IMPORTANTES>>
Essa parte do código roda somente no console do navegador, sem interação com front ou localStorage

Para executar essa parte do código, é necessario chamar a função menu() no final do código, antes de entrar na área do projeto
com estudo ou no console.


<<ADICIONAIS>>

-Necessário ainda verificar as condições para que as propriedades sejam preenchidas de forma correta
como telefone ter formato de telefone, CNPJ, Email.
-Necessário implementar lógica que interaja com array vazio, caso não tenha nenhuma ONG registrada em funções como DELETE e UPDATE
*/


let register=[]

// CREATE
function create(){

    //Objeto que será salvo no array(REGISTER)
    let ong={
        id:0,
        name:'',
        cnpj:0,
        email:'',
        phone:0,
    }
    ong.name=prompt('qual o nome da sua ONG?')
    ong.cnpj=Number(prompt('qual seu cnpj?'))
    ong.email=prompt('qual seu email?')
    ong.phone=Number(prompt('qual seu telefone?'))

    //Gera um ID fixo para cada registro, útil para fazer implementação no front com botões
    //os ID's são grandes, mas na implementação é utilizado apenas 'id', cada ong recebe um id único 
    //independente da ordem que estejam no array, o ID permanece o mesmo
    ong.id=Date.now()

    register.push(ong)
    alert('ONG registrada')
}

// READ
function read(array){

    //apenas apresenta a lista de ONG's registradas com o número do índice começando em 1
    array.forEach((i, index)=>{
        console.table(`[${index+1}]-Instituição:${i.name}\n    CNPJ: ${i.cnpj}\n    E-Mail: ${i.email}\n    Telefone: ${i.phone}`)
    })

}

// UPDATE
function update(array){
    read(array)

    //edita os valores de cada propriedade do objeto, não é o melhor jeito de fazer, inclusive achei burro
    //quero fazer um modo para apresentar as propriedades e perguntar ao usuário qual ele deseja editar
    //em vez de fazer ele editar todas elas a cada edição
    esc=Number(prompt('Qual ONG deseja editar?'))
    array[esc-1].nome=prompt('Qual o novo nome?')
    array[esc-1].cnpj=prompt('Qual o novo cnpj?')
    array[esc-1].email=prompt('Qual o novo email?')
    array[esc-1].phone=prompt('Qual o novo telefone?')
    alert('ONG editada')
}

// DELETE
function delet (array){
    read(array)

    //apaga o índice selecionado de dentro do array
    esc=Number(prompt('Qual ONG deseja deletar?'))
    array.splice(esc-1,1)
    alert('ONG deletada')

}

// Menu para interagir entre as funções 
function menu(){

    //Apresenta no console as opções do menu
    console.log('[1]-ADICIONAR ONG\n[2]-LISTAR ONG\n[3]-EDITAR ONG\n[4]-DELETAR ONG\n[5]-SAIR')

    //prompt antes do loop para entrar no WHILE
    esc=Number(prompt('Escolha uma opção:'))
    
    //Loop de permanencia no menu
    while(esc!==5){
        switch(esc){
            case 1: create();
            break
            case 2: read(register);
            break
            case 3: update(register);
            break
            case 4: delet(register);
            break
        }

        //prompt dentro do Loop para continuar decidindo entre as opções até a opção [5]-SAIR seja escolhida
        esc=Number(prompt('Escolha uma opção:'))

    }
}
//                      <<<< CHAMAR menu() AQUI >>>>

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
/*         A partir daqui foi feito com estudo na internet com tutoriais          */
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

//INTERATIVIDADE DO MODAL E FUNCIONALIDADES DOS BOTÕES 
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const btnSalvar = document.querySelector('#btnSalvar')
const sName = document.querySelector('#name')
const sCnpj = document.querySelector('#cnpj')
const sEmail = document.querySelector('#email')
const sPhone = document.querySelector('#phone')

let itens//serve para receber o array de objetos do localStorage
let id

//essa const é para uso do local storage, get recebe uma string e transforma em objeto pelo
//argumento JSON.parce que recebe o endereço localStorage.getItem e a key armazenamento q serve para encontrar
//o array com as ONG's cadastradas  
const getItensBD = () => JSON.parse(localStorage.getItem('armazenamento')) ?? []//o argumento ?? serve para que caso não exista o endereço, retorne um array vazio

//essa parte faz meio q o contrario, ele converte o objeto em uma string usando JSON.stringify e envia para o localStorage
const setItensBD = () => localStorage.setItem('armazenamento', JSON.stringify(itens))

//Função para abrir o Modal
//edit é um valor booleano de padrão false e o index é 0
//esses valores serão reatribuídos depois
function openModal(edit = false, index = 0) {

    //Quando chamado, adiciona 'active' no classList CSS
    //que deve mudar o display de none para flex
    modal.classList.add('active')
  
    //no click 'e' representa o evento de click
    modal.onclick = e => {

        //target representa o botão que foi clicado  
        //.className.indexOf procura dentro da className do botão o indexOf de tipo string
        //com conteúdo 'modal-container'; se não existir, retorna -1.
        //a condição é; se for o contrario de -1, remove 'active' que fecha o modal
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
   
    //como o padrão de edit é falso, caso for verdadeiro, realiza a função de edição
    if (edit) {

        //substituições simples de valores 
        //editar Nome, CNPJ, Email, telefone 
      sName.value = itens[index].name
      sCnpj.value = itens[index].cnpj
      sEmail.value = itens[index].email
      sPhone.value = itens[index].phone
      id = index
    } else {
        sName.value = ''
        sCnpj.value = ''
        sEmail.value = ''
        sPhone.value = ''
    }
    
  }

function editItem(index) {

    //quando chama função openModal recebe os valores de entrada
    //reatribuição q comentei na criação da função
    openModal(true, index)
  }

  //função para carregar os cadastros e apresentar no tbody do HTML
function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''

    //forEach para criar uma tr para cada ong cadastrada no array de objeto do localStorage no HTML 
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
  
  }

  //função de delete simples, recebe o índice do array do localStorage e deleta o índice selecionado 
function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    //load no final das funções para sempre atualizar a lista
    loadItens()
  }

  //função para inserir item
function insertItem(item, index) {

    //Cria uma TR no HTML com o argumento .createElement
    let tr = document.createElement('tr')
    
    //insere dentro da tr as td, serve para listar as ongs cadastradas no HTML para que sejam apresentadas
    //foi adicionado também as funções de editItem e deleteItem e botões como texto, mas quando estiverem no HTML
    //serão representadas da forma que devem, um jeito inteligente de adicionar todas as interações junto com a lista
    //de ongs cadastradas
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.cnpj}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `//a cima foi utilizado bx bx do link de icones importados no HTML

    //serve para adicionar essa tr que foi criada como filha de tbody
    //que no HTML está vazia, porque é criada por aqui
    tbody.appendChild(tr)
  }

  //botão para salvar
  btnSalvar.onclick = e => {
    
    //se as variaveis estiverem sem preenchimento, não realiza atualização
    if (sName.value == '' || sCnpj.value == '' || sEmail.value == ''|| sPhone.value == '') {
      return
    }
    
    //serve para evitar que o envio do formulário recarregue a página
    e.preventDefault();
  
    //se o índice tiver qualquer número, atualiza o array de objeto no índice 'id' que é onde foi salvo o índice no começo do código
    if (id !== undefined) {
      itens[id].name = sName.value
      itens[id].cnpj = sCnpj.value
      itens[id].email = sEmail.value
      itens[id].phone = sPhone.value
    } else {
        //do contrario, só mantem os valores originais
      itens.push({'name': sName.value, 'cnpj': sCnpj.value, 'email': sEmail.value, 'phone': sPhone.value})
    }
    
    //envia para o localStorage
    setItensBD()
  
    //fecha o modal
    modal.classList.remove('active')
    //atualiza a lista
    loadItens()
    //seta o id como undefined 
    id = undefined
  }

  loadItens()