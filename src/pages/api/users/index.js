import dbConnect from "../../../../utils/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await dbConnect();

    switch (method) {
      case "GET":
        try {
          const users = await User.find({});
          res.status(200).json({ success: true, data: users });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      case "POST":
        try {
          const body = req.body;
          const user = await User.create(body);
          res.status(201).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
