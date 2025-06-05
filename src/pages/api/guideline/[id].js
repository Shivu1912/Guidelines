import guidelineData from '../../../Helper/Data/guideline.json';

export default function handler(req, res) {
  const { id } = req.query;
  const guideline = guidelineData.filter((item) => item.id === id);

  if (guideline) {
    res.status(200).json({ result: guideline, success: true });
  } else {
    res.status(404).json({ result: null, success: false });
  }
}
