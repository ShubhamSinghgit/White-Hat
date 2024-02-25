var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var userScores = userData.scores.map(Number); // Convert scores to numbers

    var bestMatch = null;
    var minDifference = Infinity;

    for (var i = 0; i < friends.length; i++) {
      var friendScores = friends[i].scores;
      var totalDifference = calculateDifference(userScores, friendScores);

      if (totalDifference < minDifference) {
        minDifference = totalDifference;
        bestMatch = friends[i];
      }
    }

    friends.push(userData); // Add the new user to the list of friends

    res.json(bestMatch); // Send the best match as the response
  });
};

// Function to calculate the difference between two arrays of scores
function calculateDifference(scores1, scores2) {
  var totalDifference = 0;
  for (var i = 0; i < scores1.length; i++) {
    totalDifference += Math.abs(scores1[i] - scores2[i]);
  }
  return totalDifference;
}
