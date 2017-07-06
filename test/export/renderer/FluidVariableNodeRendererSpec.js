'use strict';

/**
 * Requirements
 */
const FluidVariableNodeRenderer = require(FLOW_SOURCE + '/export/renderer/FluidVariableNodeRenderer.js').FluidVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options =
    {
        configurationClass: require(FLOW_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration,
        basePath: FLOW_FIXTURES + '/nodeRenderer'
    };
    nodeRendererSpec(FluidVariableNodeRenderer, 'export.renderer/FluidVariableNodeRenderer', undefined, options);
});
