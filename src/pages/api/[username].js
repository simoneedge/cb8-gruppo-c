import dbConnect from "../../../utils/dbConnect";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method, query } = req;

  try {
    await dbConnect();
    switch (method) {
      case "GET":
        try {
          const { username } = query;
          if (!username) {
            return res
              .status(400)
              .json({ success: false, error: "Username is required" });
          }

          const user = await User.findOne({ username });
          if (!user) {
            return res
              .status(404)
              .json({ success: false, error: "User not found" });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;
      case "PUT":
        try {
          const { username } = query;
          if (!username) {
            return res
              .status(400)
              .json({ success: false, error: "Username is required" });
          }

          const { newFriends, newRatings, ...updatedUserData } = req.body; // Extracting newFriends and newRatings from the request body

          const updateFields = { ...updatedUserData }; // Initialize updateFields with updatedUserData

          if (Array.isArray(newFriends) && newFriends.length > 0) {
            console.log("Adding new friends:", newFriends);
            // Ensure that updatedUserData includes the friends field
            if (!updatedUserData.hasOwnProperty("friends")) {
              updatedUserData.friends = [];
            }

            updateFields.$addToSet = { friends: { $each: newFriends } }; // Add new friends to the existing array without duplicates
          }

          if (Array.isArray(newRatings) && newRatings.length > 0) {
            updateFields.$push = { ratingGames: { $each: newRatings } }; // Pushing new ratings to the existing array
          }

          const updatedUser = await User.findOneAndUpdate(
            { username },
            updateFields,
            { new: true }
          );

          if (!updatedUser) {
            return res
              .status(404)
              .json({ success: false, error: "User not found" });
          }

          res.status(200).json({ success: true, data: updatedUser });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
