'use strict';

/**
 * Requirements
 */
const FluidArrayNodeRenderer = require(FLUID_SOURCE + '/export/renderer/FluidArrayNodeRenderer.js').FluidArrayNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidArrayNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidArrayNodeRenderer, 'export.renderer/FluidArrayNodeRenderer', undefined, require('./RendererHelper.js').options());
});
