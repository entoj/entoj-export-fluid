'use strict';

/**
 * Requirements
 */
const FluidDefaultFilterRenderer = require(FLUID_SOURCE + '/export/renderer/FluidDefaultFilterRenderer.js').FluidDefaultFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(FluidDefaultFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(FluidDefaultFilterRenderer, 'export.renderer/FluidDefaultFilterRenderer', undefined, require('./RendererHelper.js').options());
});
