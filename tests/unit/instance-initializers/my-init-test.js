import Application from '@ember/application';
import { run } from '@ember/runloop';
import Service from '@ember/service';
import { initialize } from 'test-for-instance-initializer/instance-initializers/my-init';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Instance Initializer | my init', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  this.appInstance.register('service:logger', Service.extend({ enabled: true }));
  assert.ok(initialize(this.appInstance));
});
