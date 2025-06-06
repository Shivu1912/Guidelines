
// import guidelineData from "../../Helper/Data/guideline.json";

// export default function GET(req, res) {
//     const data = guidelineData
//     console.log(data)

//   res.status(200).json(data);
// }

// pages/api/homepage.js
import recentlyAdded from '../../Helper/Data/recentlyAdded.json';
import mostlyViewed from '../../Helper/Data/mostlyViewed.json';
import allGuidelines from '../../Helper/Data/allGuidelines.json';

export default function handler(req, res) {
  res.status(200).json({
    recentlyAdded,
    mostlyViewed,
    allGuidelines,
    // allGuidelines: [...recentlyAdded, ...mostlyViewed], // You can customize this
  });
}
