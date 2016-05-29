import Ember from 'ember';
import LocalDbInitializer from 'streetpass-tips/initializers/local-db';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | local db', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  LocalDbInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
