const readlineSync = require('readline-sync');
let dados = [];

function criarUsuario() {
  let Usuario = readlineSync.question('Digite o seu usuario: ');
  let dataNasc = readlineSync.question('Digite sua data de nascimento: ');
  let cidade = readlineSync.question('Digite a cidade onde reside: ');
  let senha = readlineSync.question('Digite sua senha: ');

  return {
    Usuario: Usuario,
    dataNasc: dataNasc,
    cidade: cidade,
    senha: senha,
  };
}

function registrarUser(usuario, categoriaResiduo, data, localDescarte) {
  usuario.categoriaResiduo.push(data);
  console.log(usuario.categoriaResiduo + ' realizou a ação: ' + data);
}

function exibirDetalhes(usuario) {
  console.log('--------------------------------------------------');
  console.log('| Nome                                       | ' + usuario.nome);
  console.log(
    '| Categoria do Resíduo                       | ' + usuario.categoriaResiduo
  );
  console.log('| Data                                       | ' + usuario.data);
  console.log(
    '| Local de Descarte                          | ' + usuario.localDescarte
  );

  if (usuario.categoriaResiduo.length > 0) {
    console.log('| Update     | ' + usuario.categoriaResiduo.join(', '));
  } else {
    console.log('| Update     | Nenhum');
  }

  console.log('--------------------------------------------------');
}

function adicionarUser(usuario) {
  usuario.push(usuario);
  console.log(usuario.nome + ' foi adicionado com sucesso.');
}

function buscarUser(nome) {
  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i].nome === nome) {
      return usuario[i];
    }
  }
  return null;
}

function listarUser() {
  console.log('--------------------------------------------------');
  console.log(
    '| Usuario          | Categoria do resíduo       | Data | Local de descarte  '
  );
  console.log('--------------------------------------------------');
  for (let i = 0; i < usuario.length; i++) {
    const usuario = usuario[i];
    console.log(
      '| ' +
        usuario.nome +
        ' | ' +
        usuario.categoriaResiduo +
        ' | ' +
        usuario.data +
        ' | ' +
        usuario.localDescarte
    );
  }
  console.log('--------------------------------------------------');
}

function excluirUser(nome) {
  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i].nome === nome) {
      usuario.splice(i, 1);
      console.log(nome + 'Seu usuário foi excluído com sucesso!');
      return;
    }
  }
  console.log(
    'Caso deseja reativar sua conta, siga os mesmos passos de antes.'
  );
}
