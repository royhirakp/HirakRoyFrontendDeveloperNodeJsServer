const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/capsules", async (req, res) => {
  try {
    let allCapsules = await axios.get("https://api.spacexdata.com/v3/capsules");
    return res.status(200).send(allCapsules.data);
  } catch (error) {
    res.status(500).json({
      status: "errorvvvv",
      messege: error,
    });
  }
});

router.get("/capsules/findOne", async (req, res) => {
  const { capsule_serial } = req.body;
  try {
    let Capsules = await axios.get(
      `https://api.spacexdata.com/v3/capsules/${capsule_serial}`
    );
    return res.status(200).send(Capsules.data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      messege: error,
    });
  }
});

router.get("/capsules/upcomming", async (req, res) => {
  const { capsule_serial } = req.body;
  try {
    let Capsules = await axios.get(
      `https://api.spacexdata.com/v3/capsules/upcoming`
    );
    return res.status(200).send(Capsules.data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      messege: error,
    });
  }
});

router.get("/capsules/past", async (req, res) => {
  const { capsule_serial } = req.body;
  try {
    let Capsules = await axios.get(
      `https://api.spacexdata.com/v3/capsules/past`
    );
    return res.status(200).send(Capsules.data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      messege: error,
    });
  }
});

module.exports = router;
