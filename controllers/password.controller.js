const Password = require('../models/password')
const User = require('../models/user')
const ObjectId = require('mongoose').Types.ObjectId;

module.exports.getAll = async function(req, res) {
    try {
      let password = await Passsword.find({user: new ObjectId(req.params.userId)})
      res.json({data: password})
    } catch (error) {
      res.json({error: error})
    }
}

module.exports.getOne = async function(req, res) {
  try {
    let password = await Password.findOne({user: new ObjectId(req.params.userId), _id: new ObjectId(req.params.passwordId)})
    res.json({data: password})
  } catch (error) {
    res.end({error: error})
  }
}

module.exports.create = async function(req, res) {
        try {
  let password = new Password(req.body)
  let newPassword = await password.save()
  res.statusCode = 201
  res.json({data: {id: Password._id, message: "Password created"}})
      } catch (error) {
        console.log(error)
        res.end({error: error})
    }
}
