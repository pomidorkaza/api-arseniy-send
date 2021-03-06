module.exports = (sequelize, Sequelize) => {
  const Coach = sequelize.define("coaches", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    name: {
      type: Sequelize.STRING,
    },
    login: {
      type: Sequelize.TEXT,
    },
    timeZone: {
      type: Sequelize.TEXT
    }
  },
  );

  return Coach;
};