import dbConnect from "../../../../utils/dbConnect";
import Sport from "../../../models/Sport";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const sport = await Sport.findById(id);
        if (!sport) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: sport });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "PUT":
      try {
        const body = req.body;
        const sport = await Sport.findByIdAndUpdate(id, body);

        if (!sport) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: sport });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "DELETE":
      try {
        const deleteSport = await Sport.deleteOne({ _id: id });

        if (!deleteSport) {
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
