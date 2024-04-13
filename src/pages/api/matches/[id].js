import dbConnect from "../../../../utils/dbConnect";
import Match from "../../../models/Match";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const match = await Match.findById(id);

        if (!match) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: match });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "PUT":
      try {
        const { team, inProgress } = req.query;
        if (!team || (team !== "team1" && team !== "team2")) {
          return res
            .status(400)
            .json({ success: false, error: "Invalid team specified" });
        }
        const { playerName } = req.body;
        if (!playerName) {
          return res
            .status(400)
            .json({ success: false, error: "Player name is required" });
        }

        let updateQuery = {};
        updateQuery[team] = playerName;

        // Check and set inProgress if provided
        if (inProgress !== undefined) {
          updateQuery.inProgress = inProgress === "true";
        }

        const updatedMatch = await Match.findByIdAndUpdate(id, updateQuery, {
          new: true,
        });

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
    case "DELETE":
      try {
        const deleteMatch = await Match.deleteOne({ _id: id });

        if (!deleteMatch) {
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
