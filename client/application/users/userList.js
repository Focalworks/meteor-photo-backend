/**
 * Created by Amitav Roy on 25/2/15.
 */

Meteor.subscribe('userCollection');

Template.userList.helpers({
    users: function() {
        console.log(Meteor.user());
        return Meteor.users.find();
    }
});