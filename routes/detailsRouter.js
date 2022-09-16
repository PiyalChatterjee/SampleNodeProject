const express = require("express");

const routes = (Details) => {
  const detailsRouter = express.Router();

  detailsRouter
    .route("/details")
    .post((req, res) => {
      const detail = new Details({
        name: req.body.name,
        empId: req.body.empId,
        intId: req.body.intId,
      });
      detail.save();
      return res
        .status(201)

        .json(detail);
    })

    .get((req, res) => {
      const { query } = req;
      Details.find(query, (err, details) => {
        if (err) {
          return res.send(err);
        }
        return res.json(details);
      });
    });

  detailsRouter
    .route("/details/:id")

    .get((req, res) => {
      Details.findById(req.params.id, (err, details) => {
        if (err) {
          return res.send(err);
        }
        return res.json(details);
      });
    });
  return detailsRouter;
};

module.exports = routes;
