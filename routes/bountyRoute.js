const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty")

bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})


bountyRouter.get("/:_id", (req, res, next) => {
    Bounty.findById(req.params._id, (err, bounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        
        return res.status(200).send(bounty)
    })
})

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, newBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        
        return res.status(200).send(newBounty)
    })
    
})

bountyRouter.delete("/:_id", (req, res, next) => {
    Bounty.findByIdAndRemove(req.params._id, (err, bounty) => {
        if (err) {
            res.status(500)
            return next("Error While Trying to Remove")
        }
        
        return res.status(200).send(bounty)
    })
})

bountyRouter.put("/:_id", (req, res, next) => {
    Bounty.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
        (err, bounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounty)
        }
    )
})


module.exports = bountyRouter