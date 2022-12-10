const express = require("express")
const userController = require("../controller/user");
const router = express.Router()
router.post("/creatUser",userController.createUser)
router.get("/get",userController.getById)
router.put("/put",userController.updateById)
router.delete("/delete",userController.deleteById)
router.get("/update",userController.query)


//route 

module.exports = router 
