// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'd05f4e58-b80d-4ebd-a6d7-c9cac216cd39',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_POWERBIEMBEDDED_TEST_LOCATION'] = 'southcentralus';
  process.env['AZURE_POWERBIEMBEDDED_TEST_SKU'] = 'S1';
  process.env['AZURE_POWERBIEMBEDDED_TEST_TIER'] = 'Standard';
};

exports.scopes = [];

 exports.randomTestIdsGenerated = function() { return ['azureXplatCliTestResourceGroup9807'];};