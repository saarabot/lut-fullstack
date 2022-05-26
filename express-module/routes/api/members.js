const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');

// temp data
const members = require('../../data/Members');

// get all members
router.get('/', (req, res) => {
  res.json(members);
});

// get one member
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const member = members.filter((m) => m._id === id);

    if (member.length === 0) {
      res.status(400);
      res.send({ msg: 'member not found with id' });
    } else {
      res.status(200);
      res.send(member[0]);
    }
  } catch (err) {
    res.status(500);
    res.send({ msg: 'something went wrong on the server side :(' });
  }
});

// create member
router.post('/', (req, res) => {
  try {
    const { body } = req;

    const newMember = {
      ...body,
      _id: uuidv4(),
      status: 'active',
    };
    if (!newMember.name || !newMember.email) {
      res.status(400);
      res.send({ msg: 'Missing parameters' });
    } else {
      members.push(newMember);
      res.status(201);
      res.send(members);
    }
  } catch (err) {
    res.status(500);
    res.send({ msg: 'something went wrong on the server side :(' });
  }
});

// update member
router.put('/:id', (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const found = members.some((m) => m._id === id);

    if (found) {
      members.forEach((m) => {
        if (m._id === id) {
          m.email = body.email ? body.email : m.email;
          m.name = body.name ? body.name : m.name;
          m.active = body.active ? body.active : m.active;
        }
      });
      res.status(201);
      res.send({ msg: 'member updated' });
    } else {
      res.status(400);
      res.send({ msg: 'user not found' });
    }
  } catch (err) {
    res.status(500);
    res.send({ msg: 'something went wrong on the server side :(' });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const member = members.filter((m) => m._id === id);

    if (member.length === 0) {
      res.status(400);
      res.send({ msg: 'member not found with id' });
    } else {
      res.status(200);
      res.send({
        msg: 'member deleted',
        members: members.filter((m) => m._id !== id),
      });
    }
  } catch (err) {
    res.status(500);
    res.send({ msg: 'something went wrong on the server side :(' });
  }
});

module.exports = router;
