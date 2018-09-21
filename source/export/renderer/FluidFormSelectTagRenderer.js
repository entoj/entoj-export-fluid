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
class FluidFormSelectTagRenderer extends FluidTagNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidFormSelectTagRenderer';
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
        return configuration.fluidConfiguration.builtinViewHelperNamespace + ':form.select';
    }    


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && 
            node.is('TagNode') && node.name === 'FormSelectTag');
    }


}


/**
 * Exports
 * @ignore
 */
module.exports.FluidFormSelectTagRenderer = FluidFormSelectTagRenderer;
