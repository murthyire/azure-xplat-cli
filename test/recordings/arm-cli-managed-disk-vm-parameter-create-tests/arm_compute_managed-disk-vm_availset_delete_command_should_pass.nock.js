// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate2929/providers/Microsoft.Compute/availabilitySets/xplattestavs7?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 2,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate2929/providers/Microsoft.Compute/availabilitySets/xplattestavs7\",\r\n  \"name\": \"xplattestavs7\",\r\n  \"sku\": {\r\n    \"name\": \"Aligned\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '432',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131298449797568712',
  'x-ms-request-id': '27f98898-8b0f-4bba-8146-7b08ada8cacc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '235cf429-a77c-480e-b7a9-2a07c18d299e',
  'x-ms-routing-request-id': 'CENTRALUS:20170216T074038Z:235cf429-a77c-480e-b7a9-2a07c18d299e',
  date: 'Thu, 16 Feb 2017 07:40:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate2929/providers/Microsoft.Compute/availabilitySets/xplattestavs7?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 3,\r\n    \"platformFaultDomainCount\": 2,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"westus\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate2929/providers/Microsoft.Compute/availabilitySets/xplattestavs7\",\r\n  \"name\": \"xplattestavs7\",\r\n  \"sku\": {\r\n    \"name\": \"Aligned\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '432',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131298449797568712',
  'x-ms-request-id': '27f98898-8b0f-4bba-8146-7b08ada8cacc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '235cf429-a77c-480e-b7a9-2a07c18d299e',
  'x-ms-routing-request-id': 'CENTRALUS:20170216T074038Z:235cf429-a77c-480e-b7a9-2a07c18d299e',
  date: 'Thu, 16 Feb 2017 07:40:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate2929/providers/Microsoft.Compute/availabilitySets/xplattestavs7?api-version=2016-04-30-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131298449797568712',
  'x-ms-request-id': 'd18b8171-006a-4520-9e82-24c3a9dfd382',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c732f588-b4ad-4999-a3be-197473666827',
  'x-ms-routing-request-id': 'CENTRALUS:20170216T074039Z:c732f588-b4ad-4999-a3be-197473666827',
  date: 'Thu, 16 Feb 2017 07:40:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate2929/providers/Microsoft.Compute/availabilitySets/xplattestavs7?api-version=2016-04-30-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131298449797568712',
  'x-ms-request-id': 'd18b8171-006a-4520-9e82-24c3a9dfd382',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'c732f588-b4ad-4999-a3be-197473666827',
  'x-ms-routing-request-id': 'CENTRALUS:20170216T074039Z:c732f588-b4ad-4999-a3be-197473666827',
  date: 'Thu, 16 Feb 2017 07:40:39 GMT',
  connection: 'close' });
 return result; }]];