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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule></Cors><DefaultServiceVersion>2013-08-15</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1cbf7bee-0001-000c-50ab-9e78f6000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:35 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '89a07390-0001-0020-73ab-9efacb000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '24e6f1f5-0002-0034-0cab-9e39af000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ca0ff97e-0002-001f-38ab-9e4d17000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '810e2458-0003-000b-36ab-9e8e73000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '63c7505d-0003-0033-0fab-9ecf2a000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>500</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>501</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>502</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET,PUT</AllowedMethods><AllowedOrigins>www.azure.com,www.microsoft.com</AllowedOrigins><AllowedHeaders>x-ms-meta-xyz,x-ms-meta-foo,x-ms-meta-data*,x-ms-meta-target*</AllowedHeaders><ExposedHeaders>x-ms-meta-abc,x-ms-meta-bcd,x-ms-meta-data*,x-ms-meta-source*</ExposedHeaders><MaxAgeInSeconds>503</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3c61c694-001a-0047-36ab-9e496c000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.put('/?comp=properties&restype=service', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a35f6662-001a-0046-0fab-9e4891000000',
  'x-ms-version': '2015-02-21',
  date: 'Thu, 04 Jun 2015 09:44:43 GMT' });
 return result; }]];