// controllers/dummyController.js

const dummyResponses = [
  {
    text_response: "Your website had a total of 5,432 sessions this month.",
    query_results: `Date,Sessions
2023-10-01,1200
2023-10-05,1023
2023-10-10,856
2023-10-15,2000
2023-10-20,876
2023-10-25,723
2023-10-30,2232`,
  },
  {
    text_response:
      "The average session duration last week was 3 minutes and 45 seconds.",
    query_results: `Date,Avg Session Duration
2023-10-24,3:20
2023-10-25,3:50
2023-10-26,3:45
2023-10-27,3:47
2023-10-28,4:00
2023-10-29,3:40
2023-10-30,3:55`,
  },
  {
    text_response:
      "Bounce rate this month shows a 5% improvement over last month.",
    query_results: `Month,Bounce Rate
2023-09,55%
2023-10,50%
2023-10-01,53%
2023-10-10,52%
2023-10-20,51%
2023-10-25,50%
2023-10-30,50%`,
  },
  {
    text_response: "Top 6 pages visited this week are shown below.",
    query_results: `Page,Views
Homepage,1500
Blog,900
Contact Us,400
About Us,350
Services,600
FAQ,300
Pricing,250`,
  },
  {
    text_response:
      "There was a 30% increase in new users compared to the previous week.",
    query_results: `Week,New Users
2023-10-16,500
2023-10-17,520
2023-10-18,530
2023-10-19,600
2023-10-20,630
2023-10-23,650
2023-10-24,680`,
  },
  {
    text_response:
      "Your highest traffic source this month is Organic Search with 2,345 sessions.",
    query_results: `Source,Sessions
Organic Search,2345
Direct,1250
Social,600
Referral,340
Email,275
Paid Search,800
Display Ads,190`,
  },
];

const generateDummyResponse = async (req, res) => {
  const { prompt } = req.body;
  // Pick a random response from the array
  const randomIndex = Math.floor(Math.random() * dummyResponses.length);
  const response = dummyResponses[randomIndex];

  // Return the randomly selected response
  res.json(response);
};

export { generateDummyResponse };
