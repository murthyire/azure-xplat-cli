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
  .put('/storageclitest?restype=container&comp=acl')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 01 Jul 2015 06:33:25 GMT',
  etag: '"0x8D281DEF7F24D31"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f45ddd57-0001-0048-1ac7-b3a49a000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 01 Jul 2015 06:33:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 01 Jul 2015 06:33:25 GMT',
  etag: '"0x8D281DEF7F24D31"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '51fe4536-0001-001c-67c7-b34e10000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Wed, 01 Jul 2015 06:33:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:80')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 01 Jul 2015 06:33:25 GMT',
  etag: '"0x8D281DEF7F24D31"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ff47c112-0001-0016-79c7-b35799000000',
  'x-ms-version': '2015-02-21',
  'x-ms-blob-public-access': 'container',
  date: 'Wed, 01 Jul 2015 06:33:25 GMT' });
 return result; }]];