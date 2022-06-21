import {openDb} from './configBD.js';


//criar tabela
export async function creatingTable() {
    openDb().then(db =>{
        db.exec('CREATE TABLE IF NOT EXISTS Curr (id INTEGER PRIMARY KEY, Instituicao TEXT, Curso TEXT)');
    })

}
//inserir dados
export async function insertUser(user) {
    openDb().then(db =>{
        db.run('INSERT INTO Curr (Instituicao, Curso) VALUES (?,?,?)', [user.nome, user.curso, user.semestre]);
    })

}
//update de dados
export async function updateUser(user) {
    openDb().then(db =>{
        db.run('UPDATE Curr SET Instituicao = ?, Curso = ? WHERE id = ?', [user.Instituicao, user.Curso, user.Id]);
    })
}