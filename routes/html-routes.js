const path = require("path");

// i don't think these work because I had to use the controller page to actually show them, tried it this way first like in project 2
module.exports = function(app) {
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/index.html`))
})

app.get(`/exercise?`, (req, res) => {
  console.log(`clicked`)
  res.sendFile(path.join(__dirname, `../public/exercise.html`));
})

app.get(`/stats`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/stats.html`));
})
}
