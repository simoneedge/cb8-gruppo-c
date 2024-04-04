import dbConnect from "../../../../utils/dbConnect";
import Sport from "../../../models/Sport";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await dbConnect();
    switch (method) {
      case "GET":
        try {
          const sports = await Sport.find({});
          res.status(200).json({ success: true, data: sports });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;

      case "POST":
        try {
          const body = req.body;
          const sport = await Sport.create(body);
          res.status(201).json({ success: true, data: sport });
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
