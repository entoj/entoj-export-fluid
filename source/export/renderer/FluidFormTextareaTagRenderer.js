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
class FluidFormTextareaTagRenderer extends FluidTagNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidFormTextareaTagRenderer';
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
        return configuration.fluidConfiguration.builtinViewHelperNamespace + ':form.textarea';
    }    


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && 
            node.is('TagNode') && node.name === 'FormTextareaTag');
    }


}


/**
 * Exports
 * @ignore
 */
module.exports.FluidFormTextareaTagRenderer = FluidFormTextareaTagRenderer;
