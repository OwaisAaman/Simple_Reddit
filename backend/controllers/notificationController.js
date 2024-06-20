const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user_id: req.user.userId }).sort({ created_at: -1 });
    res.send(notifications);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createNotification = async (data) => {
  const { user_id, type, content, link } = data;
  try {
    const notification = new Notification({ user_id, type, content, link });
    await notification.save();
  } catch (error) {
    console.error('Error creating notification', error);
  }
};
