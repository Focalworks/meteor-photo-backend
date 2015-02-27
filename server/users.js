/**
 * Created by Amitav Roy on 25/2/15.
 */
Meteor.publish("userCollection", function () {
    console.log('User collection published');
    return Meteor.users.find();
});

S3.config = {
    key: 'AKIAJR4ZPQFSL5XHB2HA',
    secret: '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',
    bucket: 'amitavunclickd'
};