const { Post, User } = require("../../models");


module.exports = ( async (req, res) => {
    try {
        const { postContent, userId, postTitle } = req.body;
        
        //TODO: 토큰받고 디코딩 후 해당 정보에 들어있는 userEmail 로 findOne 해야함
        // const row = await User.findOne({ where: { userEmail } });
        const post = await Post.create({ postContent, userId, postTitle });
        // const post = await Post.create({ postContent, userId: row.userId });
        console.log('post POST CREATE', post);

        res.status(200).json(post);
    } catch (error) {
        console.log('POST error =>', error);
        res.status(400).send({
            message: error,
            data: null
        })
    }
});