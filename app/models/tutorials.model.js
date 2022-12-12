module.exports = (sequelize, Sequelize) => {
    const Tutorials = sequelize.define("Tutorials", {
        
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorials;
  };