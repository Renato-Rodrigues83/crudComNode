import { sql } from './db.js'

//Command to erase tables if needed
/*sql `DROP TABLE IF EXISTS videos;`.then(() =>{
    console.log('Tabela Apaga')
})*/

sql `
CREATE TABLE videos(
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
);
`.then(() => console.log('Tabela Criada'))