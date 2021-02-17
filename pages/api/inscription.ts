import type { NextApiRequest, NextApiResponse } from "next";

// TODO define form fields with  interface and yup

type Confirmation = {
  status: string;
};

type ReqBody = {
  load: number;
};

export default (
  req: NextApiRequest,
  res: NextApiResponse<Confirmation | Error>
) => {
  if (req.method !== "POST") {
    res.status(400).json({ name: "unothirized method", message: "" });
    return;
  }

  res.status(200).json({ status: "ok" });
};
