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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestvpngateway\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway\",\r\n      \"etag\": \"W/\\\"e14ac49c-b51a-48f6-acc3-fa65694fb97a\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Failed\",\r\n        \"resourceGuid\": \"120b4f8a-8147-4f11-9279-e14f1af6cd33\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"ip-config\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway/ipConfigurations/ip-config\",\r\n            \"etag\": \"W/\\\"e14ac49c-b51a-48f6-acc3-fa65694fb97a\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Failed\",\r\n              \"privateIPAddress\": \"10.0.0.11\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/publicIPAddresses/xplatTestIpGateway\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworks/xplatTestVnetGateway/subnets/GatewaySubnet\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"gatewayType\": \"Vpn\",\r\n        \"vpnType\": \"RouteBased\",\r\n        \"enableBgp\": true\r\n      },\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"val1\"\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a65ff1cc-65c3-4f27-9fa5-932fc8e3e8d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': 'b694d586-73d1-4dd7-a259-c556389fceb7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150903T073509Z:b694d586-73d1-4dd7-a259-c556389fceb7',
  date: 'Thu, 03 Sep 2015 07:35:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestvpngateway\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway\",\r\n      \"etag\": \"W/\\\"e14ac49c-b51a-48f6-acc3-fa65694fb97a\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Failed\",\r\n        \"resourceGuid\": \"120b4f8a-8147-4f11-9279-e14f1af6cd33\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"ip-config\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworkGateways/xplatTestvpngateway/ipConfigurations/ip-config\",\r\n            \"etag\": \"W/\\\"e14ac49c-b51a-48f6-acc3-fa65694fb97a\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Failed\",\r\n              \"privateIPAddress\": \"10.0.0.11\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/publicIPAddresses/xplatTestIpGateway\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGroupVnetGateway2/providers/Microsoft.Network/virtualNetworks/xplatTestVnetGateway/subnets/GatewaySubnet\"\r\n              }\r\n            }\r\n          }\r\n        ],\r\n        \"gatewayType\": \"Vpn\",\r\n        \"vpnType\": \"RouteBased\",\r\n        \"enableBgp\": true\r\n      },\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"val1\"\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1709',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a65ff1cc-65c3-4f27-9fa5-932fc8e3e8d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': 'b694d586-73d1-4dd7-a259-c556389fceb7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150903T073509Z:b694d586-73d1-4dd7-a259-c556389fceb7',
  date: 'Thu, 03 Sep 2015 07:35:08 GMT',
  connection: 'close' });
 return result; }]];