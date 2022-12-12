module.exports = (sequelize, Sequelize) => {
    const Channels = sequelize.define("Channels", {
    
        nom: {
            type: Sequelize.STRING
        },
        typologie: {
            type: Sequelize.INTEGER
        },
        published: {
            type: Sequelize.BOOLEAN
          }
  });

  return Channels;
};
