

import recentlyAdded from '../../Helper/Data/recentlyAdded.json';
import mostlyViewed from '../../Helper/Data/mostlyViewed.json';
import allGuidelines from '../../Helper/Data/allGuidelines.json';

export default function GET(req, res) {
  res.status(200).json({
    recentlyAdded,
    mostlyViewed,
    allGuidelines,

  });
}
