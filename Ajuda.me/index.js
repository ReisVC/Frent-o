/* 
Necessário ainda verificar as condições para que as propriedades sejam preenchidas de forma correta
como telefone ter formato de telefone, CNPJ, Email.

Necessário implementar lógica que interaja com array vazio, caso não tenha nenhuma ONG registrada em funções como DELETE e UPDATE


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

    //apenas apresenta a lista de ONG's registradas com o número do indice começando em 1
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

    //apaga o indice selecionado de dentro do array
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
//--------------------------------------------------------------------------------------------------------------------
//INTERATIVIDADE DO MODAL E FUNCIONALIDADES DOS BOTÕES 
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')


//Função para abrir o Modal
//edit é um valor booleano de padrão false e index é 0
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
      sNome.value = itens[index].nome
      sFuncao.value = itens[index].funcao
      sSalario.value = itens[index].salario
      id = index
    } else {
      sNome.value = ''
      sFuncao.value = ''
      sSalario.value = ''
    }
    
  }
  
