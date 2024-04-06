import dbConnect from "../../../../utils/dbConnect";
import Match from "../../../models/Match";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await dbConnect();
    switch (method) {
      case "GET":
        try {
          const matches = await Match.find({});
          res.status(200).json({ success: true, data: matches });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      case "POST":
        try {
          const body = req.body;
          const match = await Match.create(body);
          res.status(201).json({ success: true, data: match });
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
