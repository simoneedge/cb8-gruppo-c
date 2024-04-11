import dbConnect from "../../../../utils/dbConnect";
import Match from "../../../models/Match";

export default async function handler(req, res) {
  const { method, query } = req;

  try {
    await dbConnect();
    switch (method) {
      case "GET":
        try {
          const { matchID } = query;
          if (!matchID) {
            return res
              .status(400)
              .json({ success: false, error: "Match ID is required" });
          }

          const match = await Match.findOne({ matchID });
          if (!match) {
            return res
              .status(404)
              .json({ success: false, error: "Match not found" });
          }
          res.status(200).json({ success: true, data: match });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;
      case "PUT":
        try {
          const { matchID } = query;
          if (!matchID) {
            return res
              .status(400)
              .json({ success: false, error: "Match ID is required" });
          }
          const updatedMatchData = req.body;

          const updatedMatch = await Match.findOneAndUpdate(
            { matchID },
            updatedMatchData,
            { new: true }
          );

          if (!updatedMatch) {
            return res
              .status(404)
              .json({ success: false, error: "Match not found" });
          }
          res.status(200).json({ success: true, data: updatedMatch });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}
