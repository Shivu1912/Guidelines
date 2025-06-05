
import guidelineData from "../../Helper/Data/guideline.json";

export default function GET(req, res) {
    const data = guidelineData
    console.log(data)

  res.status(200).json(data);
}
