import Application from 'emberjs-in-element-demo/app';
import config from 'emberjs-in-element-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
