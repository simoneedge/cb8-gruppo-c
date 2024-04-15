import dbConnect from "../../../../utils/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "PUT":
      try {
        const body = req.body;
        const existingUser = await User.findById(id);

        if (!existingUser) {
          return res
            .status(400)
            .json({ success: false, error: "User not found" });
        }

        // Compare the incoming data with the existing user data
        for (const key in body) {
          if (body.hasOwnProperty(key) && existingUser[key] !== body[key]) {
            existingUser[key] = body[key];
          }
        }

        // Save the updated user data
        const updatedUser = await existingUser.save();

        res.status(200).json({ success: true, data: updatedUser });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteUser = await User.deleteOne({ _id: id });

        if (!deleteUser) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
