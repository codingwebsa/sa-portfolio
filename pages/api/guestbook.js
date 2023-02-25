import { getSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(403).send("Unauthorized");
  }

  const email = session.user.email;
  const name = session.user.name;

  if (req.method === "POST") {
    const { error } = await supabase.from("comments").insert({
      name,
      email,
      comment: (req.body.body || "").slice(0, 500),
    });

    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(200).json({ error: null });
  }
  return res.send("Method not allowed.");
}
