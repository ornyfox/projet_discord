module.exports = (sequelize, Sequelize) => {
    const Channels_Roles = sequelize.define("Channel_Roles", {
          
        idRole: {
            type: Sequelize.INTEGER,
            references:{
                model: 'Roles',
                key: 'id'
            }
        },
        idChannel: {
            type: Sequelize.INTEGER,
            references:{
                model: 'Channels',
                key: 'id'
            }
        },
        published: {
            type: Sequelize.BOOLEAN
          }
  });

  return Channels_Roles;
};
