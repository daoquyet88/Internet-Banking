var db = require('../fn/mysql-db');

exports.loadAll = function() {
    var sql = 'select * from customer';
    return db.load(sql);
}

exports.loadAllWithDetails = function() {
    var sql = `
		select *
		from customer`;
    return db.load(sql);
}

exports.load = function(id) {
    var sql = `select * from categories where CatID = ${id}`;
    return db.load(sql);
}

exports.add = function(poco) {
    // poco = {
    // 	CatID: 1,
    // 	CatName: 'new name'
    // }

    var sql = `insert into categories(CatName) values('${poco.CatName}')`;
    return db.insert(sql);
}

exports.delete = function(id) {
        var sql = `delete from categories where CatID = ${id}`;
        return db.delete(sql);
    }
    //Update an employees

exports.update = function(po, id) {
    // poco = {
    // 	CatID: 1,
    // 	CatName: 'new name'
    // }

    var sql = `update categories set CatName='${po.CatName}' where CatID=${id}`;
    return db.update(sql);
}