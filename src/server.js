const app = require('./app');
const sequelize = require('./config/database');
const User = require('./models/userModel');

User.initModel(sequelize);

const PORT = process.env.PORT || 3306;

sequelize.sync()
  .then(() => {
    console.log('Banco sincronizado!');
    app.listen(PORT, () => {
      console.log('Server is running!');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no banco:', err);
  });
