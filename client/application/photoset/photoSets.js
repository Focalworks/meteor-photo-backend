/**
 * Created by Amitav Roy on 24/2/15.
 */

Template.photoSets.helpers({
    photosets: function () {
        return PhotoSet.find({}, {sort: {created: -1}});
    }
});

Template.photoSets.events({
    'click .delete': function () {
        var photoSet = $(this);
        var r = confirm("Are you sure you want to delete?");

        if (r == true) {
            Meteor.call('removePhotoSetById', photoSet[0]._id);
        } else {
            console.log("Dont delete");
        }

        return false;
    }
});