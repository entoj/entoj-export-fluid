'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class FluidOutputNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidOutputNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('OutputNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            let result = '{';
            for (const child of node.children)
            {
                result+= yield configuration.renderer.renderNode(child, configuration);
            }
            result= result.trimRight();
            result+= '}';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidOutputNodeRenderer = FluidOutputNodeRenderer;
