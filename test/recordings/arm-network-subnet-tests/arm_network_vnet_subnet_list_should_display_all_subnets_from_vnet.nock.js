// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet/subnets?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestSubnet\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\",\r\n      \"etag\": \"W/\\\"5bc2945a-db0d-4cd5-a5c1-11992f209670\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/networkSecurityGroups/undefined\"\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cec15411-8fe4-4ea7-94dd-a961e903cc8d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-correlation-request-id': '09fdbdb7-1d8f-4f55-98f1-e127b5774293',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121445Z:09fdbdb7-1d8f-4f55-98f1-e127b5774293',
  date: 'Wed, 29 Apr 2015 12:14:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet/subnets?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestSubnet\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\",\r\n      \"etag\": \"W/\\\"5bc2945a-db0d-4cd5-a5c1-11992f209670\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/networkSecurityGroups/undefined\"\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cec15411-8fe4-4ea7-94dd-a961e903cc8d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-correlation-request-id': '09fdbdb7-1d8f-4f55-98f1-e127b5774293',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150429T121445Z:09fdbdb7-1d8f-4f55-98f1-e127b5774293',
  date: 'Wed, 29 Apr 2015 12:14:45 GMT',
  connection: 'close' });
 return result; }]];