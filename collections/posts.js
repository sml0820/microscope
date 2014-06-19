Posts = new Meteor.Collection('posts');
Posts.allow({
  insert: function(userID, doc) {
    // only allow posting if you are logged in
    return !! userID;
  }
});