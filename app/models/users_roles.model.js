module.exports = (sequelize, Sequelize) => {
    const User_Roles = sequelize.define("Users_Roles", {
        
        User_id: {
            type: Sequelize.INTEGER,
            references:{
                model:'Users',
                key: 'id'
            }
        },
        role_id: {
            type: Sequelize.INTEGER,
            references:{
                model:'Roles',
                key: 'id'
            }
        },
        published: {
            type: Sequelize.BOOLEAN
          }
  });

  return User_Roles;
};
