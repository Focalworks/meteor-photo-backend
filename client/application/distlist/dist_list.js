/**
 * Created by Amitav Roy on 24/2/15.
 */
Template.distListListing.helpers({
    distLists: function() {
        return DistributionList.find({}, {sort: {created: -1}});
    }
});

Template.distListListing.events({
    'click .delete': function () {
        var distList = $(this);
        var r = confirm("Are you sure you want to delete?");

        if (r == true) {
            Meteor.call('removeDistListById', distList[0]._id);
        } else {
            console.log("Dont delete");
        }

        return false;
    }
});