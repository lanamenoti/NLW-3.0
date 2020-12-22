const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  //inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: '-30.0054701',
  //   lng: '-51.1593385',
  //   name: 'Lar dos meninos',
  //   about: 'Presta assistencia a crianças',
  //   whatsapp: '999999999',
  //   images: [
  //     'https://images.unsplash.com/photo-1603138461811-12e7b38580e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080',
  //     'https://images.unsplash.com/photo-1597095536985-21c85eb8c65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080',
  //   ].toString(),
  //   instructions:
  //     'Venha caso se sentir a vontade e traga muito amor e paciência para dar',
  //   opening_hours: 'Horários de visitas das 8h as 18h',
  //   open_on_weekends: '1',
  // });

  //consultar dados da tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  //consultar somente um orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  // console.log(orphanage);

  //deletar um dado da tabela
  // "DELETE FROM orphanages" - deleta tudos que tem na tabela orphanages
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});
