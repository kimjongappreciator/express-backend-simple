const express = require("express");
const choreSchema = require("../models/chore");

const router = express.Router();

router.post("/chores", (req, res) =>{
    const chore = choreSchema(req.body);
    chore.save()
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}));
    }
);


router.get("/chores", (req, res) =>{
    choreSchema.find()
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}));
    }
);

router.get("/chores/:id", (req, res) =>{
    const {id} = req.params;
    choreSchema.findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}));
    }
);

router.delete("/chores/:id", (req, res) =>{
    const {id} = req.params;
    choreSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}));
    }
);

router.put("/chores/:id", (req, res) =>{
    const { id } = req.params;
    const { name, importance, description } = req.body;
    choreSchema.updateOne({_id: id}, {$set: { name, importance, description}})
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}));

});

module.exports = router;