import DS from 'ember-data';

export default DS.Model.extend({
  myNumber: DS.attr('number'),
  myString: DS.attr('string')
});
