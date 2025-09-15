/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'Green Pledge Tracker' });
};
module.exports={
    index
};