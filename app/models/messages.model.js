module.exports = (sequelize, Sequelize) => {
    const Messages = sequelize.define("Messages", {
        
        text: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER,
            references:{
                model: 'Users',
                key: 'id'
            }
        },
        channel_id:{
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

  return Messages;
};
