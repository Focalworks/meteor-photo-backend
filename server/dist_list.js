/**
 * Created by Amitav Roy on 24/2/15.
 */

Meteor.publish("distributionList", function () {
    return DistributionList.find();
});

Meteor.methods({
    createNewDistList: function(name, creator, displayName, members) {

        var distList = DistributionList.insert({
            name: name,
            creator: creator,
            members: members,
            displayName: displayName,
            created: new Date()
        });

        return distList;
    },
    removeDistListById: function(id) {
        if (Meteor.user()) {
            DistributionList.remove(id);
        }
    }
});