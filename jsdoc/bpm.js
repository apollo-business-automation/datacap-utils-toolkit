/**
* @namespace serviceFlow
*/
/**
* @class SessionLogoff
* @memberof serviceFlow
*/
/**
* @method execute
* @memberof serviceFlow.SessionLogoff
* @param {businessObject.TWSYS.String} endpoint
* @param {businessObject.TWSYS.String} batchId
*/
/**
* @class SessionLogon
* @memberof serviceFlow
*/
/**
* @method execute
* @memberof serviceFlow.SessionLogon
* @param {businessObject.TWSYS.String} endpoint
* @param {businessObject.TWSYS.String} application
* @param {businessObject.TWSYS.String} user
* @param {businessObject.TWSYS.String} password
* @param {businessObject.TWSYS.String} station
* @returns {} <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td class="name"><code>batchId</code></td><td class="type"><span class="param-type"><a href="businessObject.TWSYS.String.html">businessObject.TWSYS.String</a></span></td><td class="description last"></td></tr>
</tbody></table>
*/
/**
* @class TransactionEnd
* @memberof serviceFlow
*/
/**
* @method execute
* @memberof serviceFlow.TransactionEnd
* @param {businessObject.TWSYS.String} endpoint
* @param {businessObject.TWSYS.String} batchId
* @param {businessObject.TWSYS.String} transactionId
*/
/**
* @class TransactionExecute
* @memberof serviceFlow
*/
/**
* @method execute
* @memberof serviceFlow.TransactionExecute
* @param {businessObject.TWSYS.String} endpoint
* @param {businessObject.TWSYS.String} batchId
* @param {businessObject.TWSYS.String} transactionId
* @param {businessObject.TWSYS.String} application
* @param {businessObject.TWSYS.String} workflow
* @param {businessObject.TWSYS.String} pageFile
* @param {businessObject.TWSYS.String} rulesets
* @param {businessObject.TWSYS.String} taskProfile
*/
/**
* @class TransactionGetFile
* @memberof serviceFlow
*/
/**
* @method execute
* @memberof serviceFlow.TransactionGetFile
* @param {businessObject.TWSYS.String} endpoint
* @param {businessObject.TWSYS.String} batchId
* @param {businessObject.TWSYS.String} transactionId
* @param {businessObject.TWSYS.String} fileName
* @param {businessObject.TWSYS.String} fileExtension
* @returns {} <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td class="name"><code>fileContentBase64</code></td><td class="type"><span class="param-type"><a href="businessObject.TWSYS.String.html">businessObject.TWSYS.String</a></span></td><td class="description last"></td></tr>
</tbody></table>
*/
/**
* @class TransactionSetFile
* @memberof serviceFlow
*/
/**
* @method execute
* @memberof serviceFlow.TransactionSetFile
* @param {businessObject.TWSYS.String} endpoint
* @param {businessObject.TWSYS.String} batchId
* @param {businessObject.TWSYS.String} transactionId
* @param {businessObject.TWSYS.String} fileFormName - if not specified fileName is used
* @param {businessObject.TWSYS.String} fileName
* @param {businessObject.TWSYS.String} fileExtension
* @param {businessObject.TWSYS.String} fileMimeType
* @param {businessObject.TWSYS.String} fileContentBase64
*/
/**
* @class TransactionStart
* @memberof serviceFlow
*/
/**
* @method execute
* @memberof serviceFlow.TransactionStart
* @param {businessObject.TWSYS.String} endpoint
* @param {businessObject.TWSYS.String} batchId
* @returns {} <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td class="name"><code>transactionId</code></td><td class="type"><span class="param-type"><a href="businessObject.TWSYS.String.html">businessObject.TWSYS.String</a></span></td><td class="description last"></td></tr>
</tbody></table>
*/
/**
* @namespace businessObject
*/
/**
* @class String
* @memberof businessObject.TWSYS
* @description String Type
*/
/**
* @namespace businessObject.TWSYS
* @memberof businessObject
*/
