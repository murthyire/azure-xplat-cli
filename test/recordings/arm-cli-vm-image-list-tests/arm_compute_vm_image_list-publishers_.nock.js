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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers?api-version=2015-05-01-preview')
  .reply(200, "[{\"location\":\"eastus\",\"name\":\"a10networks\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/a10networks\"},{\"location\":\"eastus\",\"name\":\"aiscaler-cache-control-ddos-and-url-rewriting-\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/aiscaler-cache-control-ddos-and-url-rewriting-\"},{\"location\":\"eastus\",\"name\":\"alertlogic\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/alertlogic\"},{\"location\":\"eastus\",\"name\":\"AlertLogic.Extension\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/AlertLogic.Extension\"},{\"location\":\"eastus\",\"name\":\"Barracuda.Azure.ConnectivityAgent\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Barracuda.Azure.ConnectivityAgent\"},{\"location\":\"eastus\",\"name\":\"barracudanetworks\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/barracudanetworks\"},{\"location\":\"eastus\",\"name\":\"basho\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/basho\"},{\"location\":\"eastus\",\"name\":\"boxless\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/boxless\"},{\"location\":\"eastus\",\"name\":\"bssw\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/bssw\"},{\"location\":\"eastus\",\"name\":\"Canonical\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Canonical\"},{\"location\":\"eastus\",\"name\":\"chef-software\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/chef-software\"},{\"location\":\"eastus\",\"name\":\"Chef.Bootstrap.WindowsAzure\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure\"},{\"location\":\"eastus\",\"name\":\"cires21\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/cires21\"},{\"location\":\"eastus\",\"name\":\"cloudlink\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/cloudlink\"},{\"location\":\"eastus\",\"name\":\"CloudLink.SecureVM\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/CloudLink.SecureVM\"},{\"location\":\"eastus\",\"name\":\"commvault\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/commvault\"},{\"location\":\"eastus\",\"name\":\"corent-technology-pvt\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/corent-technology-pvt\"},{\"location\":\"eastus\",\"name\":\"CoreOS\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/CoreOS\"},{\"location\":\"eastus\",\"name\":\"datastax\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/datastax\"},{\"location\":\"eastus\",\"name\":\"dell_software\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/dell_software\"},{\"location\":\"eastus\",\"name\":\"GitHub\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/GitHub\"},{\"location\":\"eastus\",\"name\":\"hortonworks\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/hortonworks\"},{\"location\":\"eastus\",\"name\":\"informatica-cloud\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/informatica-cloud\"},{\"location\":\"eastus\",\"name\":\"intelligent-plant-ltd\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/intelligent-plant-ltd\"},{\"location\":\"eastus\",\"name\":\"jetnexus\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/jetnexus\"},{\"location\":\"eastus\",\"name\":\"logtrust\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/logtrust\"},{\"location\":\"eastus\",\"name\":\"marketplace-test\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/marketplace-test\"},{\"location\":\"eastus\",\"name\":\"McAfee.EndpointSecurity\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/McAfee.EndpointSecurity\"},{\"location\":\"eastus\",\"name\":\"metavistech\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/metavistech\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.Applications\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.Applications\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.Diagnostics\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.Diagnostics\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.RecoveryServices\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.RecoveryServices\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.Security\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.Security\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.ServiceFabric\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.ServiceFabric\"},{\"location\":\"eastus\",\"name\":\"Microsoft.AzureCAT.AzureEnhancedMonitoring\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.AzureCAT.AzureEnhancedMonitoring\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Compute\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Compute\"},{\"location\":\"eastus\",\"name\":\"Microsoft.EnterpriseCloud.Monitoring\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.EnterpriseCloud.Monitoring\"},{\"location\":\"eastus\",\"name\":\"Microsoft.HpcCompute\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.HpcCompute\"},{\"location\":\"eastus\",\"name\":\"Microsoft.HpcPack\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.HpcPack\"},{\"location\":\"eastus\",\"name\":\"Microsoft.OSTCExtensions\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.OSTCExtensions\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Powershell\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Powershell\"},{\"location\":\"eastus\",\"name\":\"Microsoft.SqlServer.Management\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.SqlServer.Management\"},{\"location\":\"eastus\",\"name\":\"Microsoft.SystemCenter\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.SystemCenter\"},{\"location\":\"eastus\",\"name\":\"Microsoft.WindowsAzure.Compute\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.WindowsAzure.Compute\"},{\"location\":\"eastus\",\"name\":\"Microsoft.WindowsAzure.GuestAgent\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.WindowsAzure.GuestAgent\"},{\"location\":\"eastus\",\"name\":\"MicrosoftAzureSiteRecovery\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftAzureSiteRecovery\"},{\"location\":\"eastus\",\"name\":\"MicrosoftBizTalkServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftBizTalkServer\"},{\"location\":\"eastus\",\"name\":\"MicrosoftDynamicsAX\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftDynamicsAX\"},{\"location\":\"eastus\",\"name\":\"MicrosoftDynamicsGP\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftDynamicsGP\"},{\"location\":\"eastus\",\"name\":\"MicrosoftDynamicsNAV\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftDynamicsNAV\"},{\"location\":\"eastus\",\"name\":\"MicrosoftHybridCloudStorage\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftHybridCloudStorage\"},{\"location\":\"eastus\",\"name\":\"MicrosoftSharePoint\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSharePoint\"},{\"location\":\"eastus\",\"name\":\"MicrosoftSQLServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer\"},{\"location\":\"eastus\",\"name\":\"MicrosoftVisualStudio\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftVisualStudio\"},{\"location\":\"eastus\",\"name\":\"MicrosoftWindowsServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftWindowsServer\"},{\"location\":\"eastus\",\"name\":\"MicrosoftWindowsServerEssentials\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftWindowsServerEssentials\"},{\"location\":\"eastus\",\"name\":\"MicrosoftWindowsServerHPCPack\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftWindowsServerHPCPack\"},{\"location\":\"eastus\",\"name\":\"msopentech\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/msopentech\"},{\"location\":\"eastus\",\"name\":\"MSOpenTech.Extensions\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MSOpenTech.Extensions\"},{\"location\":\"eastus\",\"name\":\"OpenLogic\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/OpenLogic\"},{\"location\":\"eastus\",\"name\":\"PuppetLabs\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/PuppetLabs\"},{\"location\":\"eastus\",\"name\":\"RightScaleLinux\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/RightScaleLinux\"},{\"location\":\"eastus\",\"name\":\"RightScaleWindowsServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/RightScaleWindowsServer\"},{\"location\":\"eastus\",\"name\":\"riverbed\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/riverbed\"},{\"location\":\"eastus\",\"name\":\"RiverbedTechnology\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/RiverbedTechnology\"},{\"location\":\"eastus\",\"name\":\"saltstack\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/saltstack\"},{\"location\":\"eastus\",\"name\":\"scalearc\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/scalearc\"},{\"location\":\"eastus\",\"name\":\"seagate\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/seagate\"},{\"location\":\"eastus\",\"name\":\"sharefile\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/sharefile\"},{\"location\":\"eastus\",\"name\":\"sios_datakeeper\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/sios_datakeeper\"},{\"location\":\"eastus\",\"name\":\"sisense\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/sisense\"},{\"location\":\"eastus\",\"name\":\"softnas\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/softnas\"},{\"location\":\"eastus\",\"name\":\"Symantec\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Symantec\"},{\"location\":\"eastus\",\"name\":\"tavendo\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/tavendo\"},{\"location\":\"eastus\",\"name\":\"trendmicro\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/trendmicro\"},{\"location\":\"eastus\",\"name\":\"TrendMicro.DeepSecurity\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/TrendMicro.DeepSecurity\"},{\"location\":\"eastus\",\"name\":\"TrendMicro.PortalProtect\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/TrendMicro.PortalProtect\"},{\"location\":\"eastus\",\"name\":\"veeam\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/veeam\"},{\"location\":\"eastus\",\"name\":\"vision_solutions\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/vision_solutions\"},{\"location\":\"eastus\",\"name\":\"wowza\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/wowza\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '14627',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c2b31945-8a1e-4d59-a88e-04ca7b62d7b4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-correlation-request-id': 'c0c5874e-f7d9-47d9-9dd6-5219603bdd72',
  'x-ms-routing-request-id': 'EASTASIA:20150427T150105Z:c0c5874e-f7d9-47d9-9dd6-5219603bdd72',
  date: 'Mon, 27 Apr 2015 15:01:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers?api-version=2015-05-01-preview')
  .reply(200, "[{\"location\":\"eastus\",\"name\":\"a10networks\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/a10networks\"},{\"location\":\"eastus\",\"name\":\"aiscaler-cache-control-ddos-and-url-rewriting-\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/aiscaler-cache-control-ddos-and-url-rewriting-\"},{\"location\":\"eastus\",\"name\":\"alertlogic\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/alertlogic\"},{\"location\":\"eastus\",\"name\":\"AlertLogic.Extension\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/AlertLogic.Extension\"},{\"location\":\"eastus\",\"name\":\"Barracuda.Azure.ConnectivityAgent\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Barracuda.Azure.ConnectivityAgent\"},{\"location\":\"eastus\",\"name\":\"barracudanetworks\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/barracudanetworks\"},{\"location\":\"eastus\",\"name\":\"basho\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/basho\"},{\"location\":\"eastus\",\"name\":\"boxless\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/boxless\"},{\"location\":\"eastus\",\"name\":\"bssw\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/bssw\"},{\"location\":\"eastus\",\"name\":\"Canonical\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Canonical\"},{\"location\":\"eastus\",\"name\":\"chef-software\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/chef-software\"},{\"location\":\"eastus\",\"name\":\"Chef.Bootstrap.WindowsAzure\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Chef.Bootstrap.WindowsAzure\"},{\"location\":\"eastus\",\"name\":\"cires21\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/cires21\"},{\"location\":\"eastus\",\"name\":\"cloudlink\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/cloudlink\"},{\"location\":\"eastus\",\"name\":\"CloudLink.SecureVM\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/CloudLink.SecureVM\"},{\"location\":\"eastus\",\"name\":\"commvault\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/commvault\"},{\"location\":\"eastus\",\"name\":\"corent-technology-pvt\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/corent-technology-pvt\"},{\"location\":\"eastus\",\"name\":\"CoreOS\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/CoreOS\"},{\"location\":\"eastus\",\"name\":\"datastax\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/datastax\"},{\"location\":\"eastus\",\"name\":\"dell_software\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/dell_software\"},{\"location\":\"eastus\",\"name\":\"GitHub\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/GitHub\"},{\"location\":\"eastus\",\"name\":\"hortonworks\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/hortonworks\"},{\"location\":\"eastus\",\"name\":\"informatica-cloud\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/informatica-cloud\"},{\"location\":\"eastus\",\"name\":\"intelligent-plant-ltd\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/intelligent-plant-ltd\"},{\"location\":\"eastus\",\"name\":\"jetnexus\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/jetnexus\"},{\"location\":\"eastus\",\"name\":\"logtrust\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/logtrust\"},{\"location\":\"eastus\",\"name\":\"marketplace-test\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/marketplace-test\"},{\"location\":\"eastus\",\"name\":\"McAfee.EndpointSecurity\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/McAfee.EndpointSecurity\"},{\"location\":\"eastus\",\"name\":\"metavistech\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/metavistech\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.Applications\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.Applications\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.Diagnostics\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.Diagnostics\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.RecoveryServices\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.RecoveryServices\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.Security\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.Security\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Azure.ServiceFabric\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Azure.ServiceFabric\"},{\"location\":\"eastus\",\"name\":\"Microsoft.AzureCAT.AzureEnhancedMonitoring\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.AzureCAT.AzureEnhancedMonitoring\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Compute\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Compute\"},{\"location\":\"eastus\",\"name\":\"Microsoft.EnterpriseCloud.Monitoring\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.EnterpriseCloud.Monitoring\"},{\"location\":\"eastus\",\"name\":\"Microsoft.HpcCompute\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.HpcCompute\"},{\"location\":\"eastus\",\"name\":\"Microsoft.HpcPack\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.HpcPack\"},{\"location\":\"eastus\",\"name\":\"Microsoft.OSTCExtensions\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.OSTCExtensions\"},{\"location\":\"eastus\",\"name\":\"Microsoft.Powershell\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.Powershell\"},{\"location\":\"eastus\",\"name\":\"Microsoft.SqlServer.Management\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.SqlServer.Management\"},{\"location\":\"eastus\",\"name\":\"Microsoft.SystemCenter\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.SystemCenter\"},{\"location\":\"eastus\",\"name\":\"Microsoft.WindowsAzure.Compute\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.WindowsAzure.Compute\"},{\"location\":\"eastus\",\"name\":\"Microsoft.WindowsAzure.GuestAgent\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Microsoft.WindowsAzure.GuestAgent\"},{\"location\":\"eastus\",\"name\":\"MicrosoftAzureSiteRecovery\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftAzureSiteRecovery\"},{\"location\":\"eastus\",\"name\":\"MicrosoftBizTalkServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftBizTalkServer\"},{\"location\":\"eastus\",\"name\":\"MicrosoftDynamicsAX\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftDynamicsAX\"},{\"location\":\"eastus\",\"name\":\"MicrosoftDynamicsGP\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftDynamicsGP\"},{\"location\":\"eastus\",\"name\":\"MicrosoftDynamicsNAV\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftDynamicsNAV\"},{\"location\":\"eastus\",\"name\":\"MicrosoftHybridCloudStorage\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftHybridCloudStorage\"},{\"location\":\"eastus\",\"name\":\"MicrosoftSharePoint\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSharePoint\"},{\"location\":\"eastus\",\"name\":\"MicrosoftSQLServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer\"},{\"location\":\"eastus\",\"name\":\"MicrosoftVisualStudio\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftVisualStudio\"},{\"location\":\"eastus\",\"name\":\"MicrosoftWindowsServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftWindowsServer\"},{\"location\":\"eastus\",\"name\":\"MicrosoftWindowsServerEssentials\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftWindowsServerEssentials\"},{\"location\":\"eastus\",\"name\":\"MicrosoftWindowsServerHPCPack\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftWindowsServerHPCPack\"},{\"location\":\"eastus\",\"name\":\"msopentech\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/msopentech\"},{\"location\":\"eastus\",\"name\":\"MSOpenTech.Extensions\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MSOpenTech.Extensions\"},{\"location\":\"eastus\",\"name\":\"OpenLogic\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/OpenLogic\"},{\"location\":\"eastus\",\"name\":\"PuppetLabs\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/PuppetLabs\"},{\"location\":\"eastus\",\"name\":\"RightScaleLinux\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/RightScaleLinux\"},{\"location\":\"eastus\",\"name\":\"RightScaleWindowsServer\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/RightScaleWindowsServer\"},{\"location\":\"eastus\",\"name\":\"riverbed\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/riverbed\"},{\"location\":\"eastus\",\"name\":\"RiverbedTechnology\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/RiverbedTechnology\"},{\"location\":\"eastus\",\"name\":\"saltstack\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/saltstack\"},{\"location\":\"eastus\",\"name\":\"scalearc\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/scalearc\"},{\"location\":\"eastus\",\"name\":\"seagate\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/seagate\"},{\"location\":\"eastus\",\"name\":\"sharefile\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/sharefile\"},{\"location\":\"eastus\",\"name\":\"sios_datakeeper\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/sios_datakeeper\"},{\"location\":\"eastus\",\"name\":\"sisense\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/sisense\"},{\"location\":\"eastus\",\"name\":\"softnas\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/softnas\"},{\"location\":\"eastus\",\"name\":\"Symantec\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/Symantec\"},{\"location\":\"eastus\",\"name\":\"tavendo\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/tavendo\"},{\"location\":\"eastus\",\"name\":\"trendmicro\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/trendmicro\"},{\"location\":\"eastus\",\"name\":\"TrendMicro.DeepSecurity\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/TrendMicro.DeepSecurity\"},{\"location\":\"eastus\",\"name\":\"TrendMicro.PortalProtect\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/TrendMicro.PortalProtect\"},{\"location\":\"eastus\",\"name\":\"veeam\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/veeam\"},{\"location\":\"eastus\",\"name\":\"vision_solutions\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/vision_solutions\"},{\"location\":\"eastus\",\"name\":\"wowza\",\"id\":\"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/wowza\"}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '14627',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c2b31945-8a1e-4d59-a88e-04ca7b62d7b4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-correlation-request-id': 'c0c5874e-f7d9-47d9-9dd6-5219603bdd72',
  'x-ms-routing-request-id': 'EASTASIA:20150427T150105Z:c0c5874e-f7d9-47d9-9dd6-5219603bdd72',
  date: 'Mon, 27 Apr 2015 15:01:04 GMT',
  connection: 'close' });
 return result; }]];