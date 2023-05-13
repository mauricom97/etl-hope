const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('dados.csv')
  .pipe(csv({ separator: '\t' }))
  .on('data', (data) => {
    // Transforme os dados conforme necessário
    const newData = {
      data_cadastro: data.data_cadastro,
      nome_completo: data.nome_completo,
      data_aniversario: data.data_aniversario,
      endereco: data.endereco,
      bairro: data.bairro,
      cpf: data.cpf,
      telefone: data.telefone,
      estado_civil: data.estado_civil,
      quantidade_moradores: parseInt(data['Quantos moradores tem hoje na sua atual residência?']),
      quantidade_moradores_renda_fixa: parseInt(data['Quantos moradores do domicílio com renda fixa?']),
      possui_filhos: data['Possui filhos?'] === 'Sim',
      idade_filhos: data['Quantos e qual idade?'],
      possui_deficiencia: data['Algum deles possui alguma deficiência ou necessidade especial?'] === 'Sim',
      tipo_deficiencia: data['Se sim, qual?'],
      participou_onda_dura: data['Já participou de algum culto da Onda Dura?'] === 'Sim',
      continuou_frequentando: data['Se sim, continuou frequentando?'] === 'Sim',
      frequenta_gp: data['Frequenta GP?'] === 'Sim',
      nome_apascentador: data['Qual o nome do seu apascentador?'],
      situacao_profissional: data['Situação Profissional:'],
      escolaridade: data['Escolaridade'],
      vitima_violencia_domestica: data['Já foi vítima de violência doméstica ou conhece alguém que foi?'] === 'Sim',
      cadastro_cras: data['Tem cadastro no CRAS?'] === 'Sim',
      dependente_quimico: data['Já foi dependente químico ou algum familiar dependente químico? Se sim, quem?'] === 'Sim',
      data_atual: data['Data de hoje'],
      obter_ajuda: data['Obter ajuda com:']
    };
    console.log(newData);
    results.push(newData);
  })
  .on('end', () => {
    // Faça algo com os dados transformados
    //console.log(results);
    
  });
