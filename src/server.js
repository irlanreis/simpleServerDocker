const app = require('./app');
const sequelize = require('./config/database');
const User = require('./models/userModel');

User.initModel(sequelize);

sequelize.sync()
  .then(() => {
    console.log('Banco sincronizado!');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no banco:', err);
  });
