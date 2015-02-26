/**
 * Created by Amitav Roy on 25/2/15.
 */
Meteor.publish("userCollection", function () {
    console.log('User collection published');
    return Meteor.users.find();
});