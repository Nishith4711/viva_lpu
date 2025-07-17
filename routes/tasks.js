const express = require("express");
const router = express.Router();
const verify = require("../middleware/verifyToken");
const {
    createTask,
    getTasks,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

router.post("/", verify, createTask);
router.get("/", verify, getTasks);
router.put("/:id", verify, updateTask);
router.delete("/:id", verify, deleteTask);

module.exports = router;
