/**
 * Created by Amitav Roy on 24/2/15.
 */
Router.route('/photo-sets', {
    controller: 'AdminController',
    template: 'photoSets'
});

Router.route('/photo-sets/:_id', {
    controller: 'AdminController',
    template: 'photoSetDetails',
    data: function () {
        var photoSetId = this.params._id;
        var ThisPhotoSet = PhotoSet.findOne({_id: photoSetId});
        return {
            photoSet: ThisPhotoSet
        }
    }
});

Router.route('/add-photo-set', function () {
    body = this.request.body;

    var name, createdBy, displayName, groupId;
    name = body.name;
    createdBy = body.createdBy;
    displayName = body.displayName;
    distListId = body.distListId;

    var photoSetId = Meteor.call('createPhotoSet', name, createdBy, displayName, distListId);

    this.response.end(photoSetId);
}, {where: 'server'});