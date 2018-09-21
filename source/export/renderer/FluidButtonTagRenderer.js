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
class FluidButtonTagRenderer extends FluidTagNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidButtonTagRenderer';
    }


    /**
     * @return {String}
     */
    getArgumentName(index, argument, configuration)
    {
        if(argument.name === 'href')
        {
            return 'parameter';
        }
        return argument.name || 'param' + index;
    }


    /**
     * @return {String}
     */
    getTagName(node, configuration)
    {
        return configuration.fluidConfiguration.builtinViewHelperNamespace + ':form.button';
    }    


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && 
            node.is('TagNode') && node.name === 'ButtonTag');
    }


    
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidButtonTagRenderer = FluidButtonTagRenderer;
