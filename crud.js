const readlineSync = require('readline-sync') 
let dados = [] 

function criarUsuario() {
    let Usuario = readlineSync.question('Digite o seu usuario: ') 
    let dataNasc = readlineSync.question('Digite sua data de nascimento: ') 
    let cidade = (readlineSync.question('Digite a cidade onde reside: ')) 
    let senha = (readlineSync.question('Digite sua senha: ')) 

    return {
        Usuario: Usuario, 
        dataNasc: dataNasc, 
        cidade: cidade, 
        senha: senha, 
    }
}

function registrarUser(usuario, categoriaResiduo, data, localDescarte) {
    usuario.categoriaResiduo.push(data) 
    console.log(usuario.categoriaResiduo + " realizou a ação: " + data) 
}

function exibirDetalhes(usuario) {
    console.log("--------------------------------------------------")
    console.log("| Nome                                       | " + usuario.nome)
    console.log("| Categoria do Resíduo                       | " + usuario.categoriaResiduo)
    console.log("| Data                                       | " + usuario.data)
    console.log("| Local de Descarte                          | " + usuario.localDescarte)

    if (usuario.categoriaResiduo.length > 0) {
        console.log("| Update     | " + usuario.categoriaResiduo.join(", "))
    } else {
        console.log("| Update     | Nenhum") 
    }

    console.log("--------------------------------------------------")
}

function adicionarUser(usuario) {
    usuario.push(usuario);
    console.log(usuario.nome + " foi adicionado com sucesso.") 
}

function buscarUser(nome) {
    for (let i = 0; i < usuario.length; i++) { 
        if (usuario[i].nome === nome) { 
            return usuario[i] 
        }
    }
    return null; 
}

function listarPersonagens() {
    console.log("--------------------------------------------------")
    console.log("| Usuario          | Categoria do resíduo       | Data | Local de descarte  ")
    console.log("--------------------------------------------------")
    for (let i = 0; i < usuario.length; i++) {
        const usuario = usuario[i]; 
        console.log("| " + usuario.nome + " | " + usuario.categoriaResiduo + " | " + usuario.data + " | " + usuario.localDescarte)
    }
    console.log("--------------------------------------------------")
}

function excluirUser(nome) {
    for (let i = 0; i < usuario.length; i++) { 
        if (usuario[i].nome === nome) { 
            usuario.splice(i, 1) 
            console.log(nome + "Seu usuário foi excluído com sucesso!") 
            return 
        }
    }
    console.log("Caso deseja reativar sua conta, siga os mesmos passos de antes.") 
}

function criarVariosPersonagens() {
    let numPersonagens = Number(readlineSync.question("Quantos personagens deseja criar meu senhor? ")) 
    for (let i = 0; i < numPersonagens; i++) { 
        let personagem = criarPersonagemComPrompt() 
        adicionarPersonagem(personagem) 
    }
}

function menu() {
    let opcao 
    do {
        opcao = readlineSync.question(
            'Meu precioso! Escolha uma opcao:\n1. Criar Personagem\n2. Listar Personagens\n3. Buscar Personagem\n4. Excluir Personagem\n5. Sair\n'
        )
        switch (opcao) { 
            case "1":
                criarVariosPersonagens() 
                break;
            case "2":
                listarPersonagens() 
                break;
            case "3":
                let nomeBusca = readlineSync.question("Digite o nome do personagem que deseja buscar meu senhor: ") 
                let personagem = buscarPersonagem(nomeBusca) 
                if (personagem) {
                    exibirDetalhes(personagem) 
                } else {
                    console.log("Ainda há esperança...Personagem não encontrado.") 
                }
                break;
            case "4":
                let nomeExclusao = readlineSync.question("Digite o nome do personagem que deseja excluir: ") 
                excluirPersonagem(nomeExclusao) 
                break;
            case "5":
                console.log("Eu não temo a morte.Saindo do sistema.") 
                break;
            default:
                console.log("Opção inválida.") 
                break;
        }
    } while (opcao !== "5") 
}

menu()



const readlineSync = require('readline-sync') 


let personagens = [] 


function criarPersonagemComPrompt() {
    let nome = readlineSync.question('Digite o nome do personagem: ') 
    let classe = readlineSync.question('Digite a classe do personagem: ') 
    let nivel = Number(readlineSync.question('Digite o nível do personagem: ')) 
    let hp = Number(readlineSync.question('Digite os pontos de vida (HP) do personagem: ')) 
    let habilidades = readlineSync.question('Digite as habilidades do personagem: ').split(',') 

    return {
        nome: nome, 
        classe: classe, 
        nivel: nivel, 
        hp: hp, 
        habilidades: habilidades, 
        historicoAcoes: [] 
}
}

function registrarAcao(personagem, acao) {
    personagem.historicoAcoes.push(acao) 
    console.log(personagem.nome + ' realizou a ação: ' + acao) 
}


function exibirDetalhes(personagem) {
    console.log('--------------------------------------------------')
    console.log('| Nome          | ' + personagem.nome)
    console.log('| Classe        | ' + personagem.classe)
    console.log('| Nível         | ' + personagem.nivel)
    console.log('| HP            | ' + personagem.hp)
    console.log('| Habilidades   | ' + personagem.habilidades.join(', '))

    if (personagem.historicoAcoes.length > 0) {
        console.log('| Histórico     | ' + personagem.historicoAcoes.join(', '))
    } else { 
        console.log('| Histórico     | Nenhum') 
    }

    console.log('--------------------------------------------------')
}


function adicionarPersonagem(personagem) {
    personagens.push(personagem) 
    console.log(personagem.nome + ' foi adicionado milorde.') 
}


function buscarPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) { 
        if (personagens[i].nome === nome) { 
            return personagens[i]
        }
    }
}
    return null 


function listarPersonagens() {
    console.log('---------------------------------------------------------------------')

    
    console.log('| Nome            | Classe        | Nível               | HP         |')


    console.log('----------------------------------------------------------------------')

   
    for (let i = 0; i < personagens.length; i++) {
        const personagem = personagens[i] 




        console.log(
            '| ' + personagem.nome + ' '.repeat(16 - personagem.nome.length) + 
            '| ' + personagem.classe + ' '.repeat(14 - personagem.classe.length) + 
            '| ' + personagem.nivel + ' '.repeat(20 - personagem.nivel.toString().length) + 
            '| ' + personagem.hp + ' '.repeat(14 - personagem.hp.toString().length) + '|'
        )
    }

    
    console.log('----------------------------------------------------------------------')
}





function excluirPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) { 
        if (personagens[i].nome === nome) { 
            personagens.splice(i, 1) 
            console.log(nome + ' O mestre nos traiu! Malvado, ardiloso, falso!.') 
            return 
        }
    }
    console.log('Ainda há esperanca....Personagem não encontrado.') 
}


function criarVariosPersonagens() {
    let numPersonagens = Number(readlineSync.question('Quantos personagens deseja criar meu senhor? '))
    for (let i = 0; i < numPersonagens; i++) { 
        let personagem = criarPersonagemComPrompt() 
        adicionarPersonagem(personagem) 
    }
}




function menu() {
    let opcao 
    do {
        opcao = readlineSync.question('Meu precioso! Escolha uma opcao:\n1. Criar Personagem\n2. Listar Personagens\n3. Buscar Personagem\n4. Excluir Personagem\n5. Sair\n') 
        
        switch (opcao) { 
            case '1':
                criarVariosPersonagens() 
                break
            case '2':
                listarPersonagens()
                break
            case '3':
                let nomeBusca = readlineSync.question('Digite o nome do personagem que deseja buscar meu senhor: ') 
                let personagem = buscarPersonagem(nomeBusca) 
                if (personagem) {
                    exibirDetalhes(personagem) 
                } else {
                    console.log('Ainda há esperança...Personagem não encontrado.') 
                }
                break
            case '4':
                let nomeExclusao = readlineSync.question('Digite o nome do personagem que deseja excluir: ')
                excluirPersonagem(nomeExclusao)
                break
            case '5':
                console.log('Eu não temo a morte.Saindo do sistema.') 
                break
            default:
                console.log('Opção inválida.')
                break
        }
    } while (opcao !== '5')
}


menu() 

/*
<<<<<<< HEAD:TRABALHO B/pers2.js


=======
>>>>>>> ec39ba23060cb709b9422dd508a22192323fd659:TRABALHO B/personagens.js
*/





