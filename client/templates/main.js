Template.body.helpers({
  ideas:function(){
    return Ideas.find();
  }
});

Template.body.events({
  'submit #idea-form': function(){
    // get input value
    const target = event.target;
    const text = target.text.value;
    // insert idea
    Ideas.insert({
      text,
      createdAt: new Date()
    });
    // clear form
    target.text.value = '';
    return false;
  },
  'click .toggle-checked': function(){
    Ideas.update(this._id, {
      $set: {checked: !this.checked}
    });
  },
  'click .delete': function(){
    Ideas.remove(this._id);
  }
});