import dbConnect from "../../../utils/dbConnect";
import Cookies from "cookies";
import { clientPromise } from "../../../utils/dbConnect";
import { createHash } from "crypto";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password, name, surname, location, sports, email } =
      req.body;

    if (!username || !password) {
      res.redirect("/signup?msg=The two passwords don't match");
      return;
    }

    try {
      await dbConnect(); // Ensure database connection is established
      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME);
      const collection = db.collection("users");
      const existingUser = await collection.findOne({ username: username });
      if (existingUser) {
        res.redirect("/signup?msg=Username already exists");
        return;
      }

      const password_hash = createHash("sha256").update(password).digest("hex");
      const newUser = new User({
        username: username,
        password: password_hash,
        name: name,
        surname: surname,
        location: location,
        sports: sports,
        email: email,
      });

      await collection.insertOne(newUser);
      const cookies = new Cookies(req, res);
      cookies.set("username", username);
      res.redirect("/signIn");
    } catch (error) {
      res.status(400).json({ error: "An error occurred. Please try again." });
    }
  } else {
    res.redirect("/");
  }
}
