/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

/*

Generated Command List:

azure virtual-machine initiate-maintenance 
--service-name $p0
--name $p1
--virtual-machine-name $p2


*/

'use strict';
var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;exports.init = function (cli) {

/*
  VirtualMachine InitiateMaintenance
  --service-name
  --name
  --virtual-machine-name
*/
  var virtualMachineInitiateMaintenance = cli.category('compute').description('Commands to invoke service management operations.').category('virtual-machine')
  .description($('Commands to manage your virtual machine.  '));
  virtualMachineInitiateMaintenance.command('initiate-maintenance [service-name] [name] [virtual-machine-name]')
  .description($('The Initiate Maintenance on role operation initiates maintenance on the specified virtual machine.  (see http://msdn.microsoft.com/en-us/library/windowsazure/jj157197.aspx for more information)'))
  .usage('[options] <service-name> <name> <virtual-machine-name>')
  .option('--service-name <service-name>', $('service-name'))
  .option('-n, --name <name>', $('name'))
  .option('--virtual-machine-name <virtual-machine-name>', $('virtual-machine-name'))
  .option('-s, --subscription <subscription>', $('The subscription identifier'))
  .execute(function(serviceName, name, virtualMachineName, options, _) {
    if (!serviceName) {
      serviceName = cli.interaction.promptIfNotGiven($('service-name : '), serviceName, _);
    }

    cli.output.verbose('serviceName = ' + serviceName);
    if (!name) {
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
    }

    cli.output.verbose('name = ' + name);
    if (!virtualMachineName) {
      virtualMachineName = cli.interaction.promptIfNotGiven($('virtual-machine-name : '), virtualMachineName, _);
    }

    cli.output.verbose('virtualMachineName = ' + virtualMachineName);
    var subscription = profile.current.getSubscription(options.subscription);
    var computeManagementClient = utils.createComputeClient(subscription);
    var result = computeManagementClient.virtualMachines.initiateMaintenance(serviceName, name, virtualMachineName, _);
    if (result) {
      cli.output.json(result);
    }
  });


};
