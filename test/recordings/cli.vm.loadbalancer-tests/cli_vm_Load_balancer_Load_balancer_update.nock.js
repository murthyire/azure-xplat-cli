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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/clitestvmVnet1545/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvmVnet1545</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>add8d8edd63b43cf849b7cc99379cab3</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtVm5ldDE1NDU=</Label><Url>http://clitestvmvnet1545.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm1WbmV0MTU0NSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvmVnet1545</RoleName><InstanceName>clitestvmVnet1545</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.1.32.4</IpAddress><PowerState>Started</PowerState><HostName>clitestvmVnet1545</HostName><RemoteAccessCertificateThumbprint>75eeacb7d9b7a2c8ea82a7512bd9addc</RemoteAccessCertificateThumbprint><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-07-01T07:05:01Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role clitestvmVnet1545.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvmVnet1545</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvmVnet1545-clitestvmVnet1545-0-201507010701430119</DiskName><MediaLink>https://aaaadddeeelllstorageacct.blob.core.windows.net/vhd-store/clitestvmVnet1545-1593f1bc8a540ac8.vhd</MediaLink><SourceImageName>03f55de797f546a1b29d1b8d66be687a__CoreCLR-x64-Beta5-Linux-PartsUnlimited-Demo-App-201504.29</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><VirtualNetworkName>CliGtTestVnet4771</VirtualNetworkName><CreatedTime>2015-07-01T07:01:35Z</CreatedTime><LastModifiedTime>2015-07-01T07:05:00Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2015-06-24T05:33:37Z</StartTime><EndTime>2015-06-28T05:33:37Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>191.236.109.110</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvmVnet1545.d2.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers><LoadBalancer><Name>testload</Name><FrontendIpConfiguration><Type>Private</Type><SubnetName>Subnet-1</SubnetName><StaticVirtualNetworkIPAddress>10.1.0.19</StaticVirtualNetworkIPAddress></FrontendIpConfiguration></LoadBalancer></LoadBalancers><VirtualNetworkId>6cd278e9-e00e-4992-b42e-24e680cfcc80</VirtualNetworkId></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3583',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd8785309d5fabf3e9d80b1bcfb0ee900',
  date: 'Wed, 01 Jul 2015 07:05:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/clitestvmVnet1545/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvmVnet1545</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>add8d8edd63b43cf849b7cc99379cab3</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtVm5ldDE1NDU=</Label><Url>http://clitestvmvnet1545.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm1WbmV0MTU0NSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvmVnet1545</RoleName><InstanceName>clitestvmVnet1545</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.1.32.4</IpAddress><PowerState>Started</PowerState><HostName>clitestvmVnet1545</HostName><RemoteAccessCertificateThumbprint>75eeacb7d9b7a2c8ea82a7512bd9addc</RemoteAccessCertificateThumbprint><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-07-01T07:05:01Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role clitestvmVnet1545.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvmVnet1545</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvmVnet1545-clitestvmVnet1545-0-201507010701430119</DiskName><MediaLink>https://aaaadddeeelllstorageacct.blob.core.windows.net/vhd-store/clitestvmVnet1545-1593f1bc8a540ac8.vhd</MediaLink><SourceImageName>03f55de797f546a1b29d1b8d66be687a__CoreCLR-x64-Beta5-Linux-PartsUnlimited-Demo-App-201504.29</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><VirtualNetworkName>CliGtTestVnet4771</VirtualNetworkName><CreatedTime>2015-07-01T07:01:35Z</CreatedTime><LastModifiedTime>2015-07-01T07:05:00Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2015-06-24T05:33:37Z</StartTime><EndTime>2015-06-28T05:33:37Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>191.236.109.110</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvmVnet1545.d2.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers><LoadBalancer><Name>testload</Name><FrontendIpConfiguration><Type>Private</Type><SubnetName>Subnet-1</SubnetName><StaticVirtualNetworkIPAddress>10.1.0.19</StaticVirtualNetworkIPAddress></FrontendIpConfiguration></LoadBalancer></LoadBalancers><VirtualNetworkId>6cd278e9-e00e-4992-b42e-24e680cfcc80</VirtualNetworkId></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3583',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd8785309d5fabf3e9d80b1bcfb0ee900',
  date: 'Wed, 01 Jul 2015 07:05:36 GMT',
  connection: 'close' });
 return result; }]];