const app = require('./app');
const sequelize = require('./config/database');
const User = require('./models/userModel');

User.initModel(sequelize);

const PORT = process.env.PORT;

sequelize.sync()
  .then(() => {
    console.log('Banco sincronizado!');
    app.listen(PORT, () => {
      console.log('Server is running on', PORT);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no banco:', err);
  });
