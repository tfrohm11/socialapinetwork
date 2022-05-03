const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  addFriend,
  createUser,
  updateUser,
  deleteUser,
  removeFriend,
} = require("../../controllers/user-controller");

// get, post  /api/users
router.route("/").get(getAllUsers).post(createUser);

// get, add, and delete /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//delete and add the friends
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
