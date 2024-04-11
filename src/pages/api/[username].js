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

          const updatedUserData = req.body;

          const updatedUser = await User.findOneAndUpdate(
            { username },
            updatedUserData,
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
