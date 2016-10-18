const parseRethinkDbUrl = require('parse-rethinkdb-url');
const options = parseRethinkDbUrl(process.env.RETHINKDB_URL);
const r = require('rethinkdbdash')(options);

const tableName = 'records';
const record = {
  id: Date.now(),
  test: true,
};

r.dbCreate(options.db).run().finally(() => {
  r.tableCreate(tableName).run().finally(() => {
    r.table(tableName).insert(record)
      .then(console.log)
      .catch(console.log);
  });
});
