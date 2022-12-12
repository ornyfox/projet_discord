const { channels } = require("../models");
const db = require("../models");
const Messages = db.messages;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const messages = {
    text: req.body.text,
    channel_id: req.body.idc,
    user_id: req.body.idu,
    published: req.body.published ? req.body.published : false
  };

  Messages.create(messages)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Messages."
      });
    });
};

exports.findAll = (req, res) => {
  const id = Messages.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Messages.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Messages."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Messages.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Message with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Message with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Messages.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Messages was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Messages with id=${id}. Maybe Messages was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Message with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Messages.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Message with id=${id}. Maybe Message was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Message with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Messages.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Messages were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all messages."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Messages.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages."
      });
    });
};
