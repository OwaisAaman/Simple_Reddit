exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .populate('subscribedSubreddits')
            .exec();
        const upvotesReceived = await Post.find({ user: user._id }).select('upvotes');
        const totalUpvotes = upvotesReceived.reduce((acc, post) => acc + post.upvotes, 0);
        res.status(200).send({ user, totalUpvotes });
    } catch (error) {
        res.status(400).send(error);
    }
};


