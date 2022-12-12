module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("Users", {
    
    mdp: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }

  });

  return Users;
};

// project = await Users.findByPk(1);
// if (project === null) {
//   console.log('Not found!');
// } else {
//   console.log(project instanceof Users); // true
//   // Its primary key is 1
// }
