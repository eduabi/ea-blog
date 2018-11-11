let express = require('express');
let router = express.Router();
router.get('/tinyBlog', (req,res,next) => {
    res.render('index')
})


module.exports = router;