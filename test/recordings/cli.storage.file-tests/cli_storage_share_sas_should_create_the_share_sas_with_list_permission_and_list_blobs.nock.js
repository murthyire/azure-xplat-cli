// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;TableEndpoint=http://yaxiatest.table.testrr1.xstore-test.windows-int.net/;QueueEndpoint=http://yaxiatest.queue.testrr1.xstore-test.windows-int.net/;FileEndpoint=http://yaxiatest.file.testrr1.xstore-test.windows-int.net/;BlobEndpoint=https://yaxiatest.blob.testrr1.xstore-test.windows-int.net/;AccountName=yaxiatest;AccountKey=null';
};

exports.scopes = [[]];