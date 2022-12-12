module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define("Roles", {
        
        nom: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
          }
  });

  return Roles;
};
