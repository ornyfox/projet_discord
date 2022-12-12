const { channels } = require("../models");
const db = require("../models");
const Channels_Roles = db.Channels_Roles;
const Op = db.Sequelize.Op;

// Create and Save a new Channel_Role
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Channel
  const channels_roles = {
    id_roles: req.body.idr,
    id_channels: req.body.idc,
    published: req.body.published ? req.body.published : false
  };

  // Save Channel in the database
  Channels_Roles.create(channels)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Channel_Roles."
      });
    });
};

// Retrieve all Channels from the database.
exports.findAll = (req, res) => {
  const id = req.query.nom;
  var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;

  Channels_Roles.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving channels_roles."
      });
    });
};

// Find a single Channel with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Channels.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Channel with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Channel with id=" + id
      });
    });
};

// Update a Channel by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Channels.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Channels was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Channels with id=${id}. Maybe Channels was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Channel with id=" + id
      });
    });
};

// Delete a Channel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Channels.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Channel was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Channel with id=${id}. Maybe Channel was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Channel with id=" + id
      });
    });
};

// Delete all Channels from the database.
exports.deleteAll = (req, res) => {
  Channels.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Channels were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all channels."
      });
    });
};

// find all published Channel
exports.findAllPublished = (req, res) => {
  Channels.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving channels."
      });
    });
};
