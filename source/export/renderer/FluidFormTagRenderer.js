'use strict';

/**
 * Requirements
 * @ignore
 */
const FluidTagNodeRenderer = require('./FluidTagNodeRenderer.js').FluidTagNodeRenderer;


/**
 * Render a custom tag node
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidFormTagRenderer extends FluidTagNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidFormTagRenderer';
    }


    /**
     * @return {String}
     */
    getArgumentName(index, argument, configuration)
    {
        return argument.name || 'param' + index;
    }


    /**
     * @return {String}
     */
    getTagName(node, configuration)
    {
        return configuration.fluidConfiguration.builtinViewHelperNamespace + ':form';
    }    


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && 
            node.is('TagNode') && node.name === 'FormTag');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidFormTagRenderer = FluidFormTagRenderer;
