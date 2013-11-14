C = new Meteor.Collection("c");

if (Meteor.isClient) {
  Template.hello.someElements = function () {
    return _.map(["X", "Y"], function (id) {
      return C.findOne(id) || {_id: id};
    });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    C.remove({});
    C.insert({_id: "Y", text: "foo"});
  });
}
