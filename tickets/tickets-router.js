const router = require('express').Router();

const Tickets = require('./tickets-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Tickets.find()
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
  Tickets.findById(req.params.id)
    .then(ticket => {
      res.json(ticket);
    })
    .catch(err => res.send(err));
});

module.exports = router;
