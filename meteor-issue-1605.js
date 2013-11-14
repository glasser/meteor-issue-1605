if (Meteor.isClient) {
  Template.hello.someElements = function () {
    console.log("some", Deps.active)
    return [
      {_id: "Y", text: Session.get("y")}
    ];
  };
  Template.hello.events({
    'click button': function () {
      Session.set("y", Random.id());
    }
  });
}
