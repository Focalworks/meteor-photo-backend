/**
 * Created by Amitav Roy on 24/2/15.
 */
Meteor.publish("photoset", function () {
    console.log('Photo set published');
    return PhotoSet.find({}, {sort: {created: -1}});
});

Meteor.methods({
    createPhotoSet: function (name, createdBy, displayName, distListId) {
        var photoSetId = PhotoSet.insert({
            name: name,
            createdBy: createdBy,
            displayName: displayName,
            distListId: distListId,
            created: new Date()
        });

        return photoSetId;
    },
    updatePhotoSetImages: function (photoSetId, urls) {
        PhotoSet.update({_id: photoSetId}, {$set: {urls: urls}});
        PhotoSet.update({_id: photoSetId}, {$set: {updated: new Date()}});
    },
    removePhotoSetById: function(id) {
        if (Meteor.user()) {
            PhotoSet.remove(id);
        }
    }
});