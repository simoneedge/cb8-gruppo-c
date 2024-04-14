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

        let match = await Match.findById(id);
        if (!match) {
          return res
            .status(404)
            .json({ success: false, error: "Match not found" });
        }

        // Ensure that team1 and team2 are initialized as arrays
        match.team1 = match.team1 || [];
        match.team2 = match.team2 || [];

        // Update team and inProgress fields
        if (team === "team1") {
          match.team1.push(playerName);
        } else {
          match.team2.push(playerName);
        }
        if (inProgress !== undefined) {
          match.inProgress = inProgress === "true";
        }

        // Save the updated match document
        match = await match.save();

        res.status(200).json({ success: true, data: match });
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
