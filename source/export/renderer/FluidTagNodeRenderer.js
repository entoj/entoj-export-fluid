'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render a custom tag node
 *
 * @memberOf export.renderer
 * @extends Base
 */
class FluidTagNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/FluidTagNodeRenderer';
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
        return configuration.fluidConfiguration.builtinViewHelperNamespace + ':' + node.name;
    }


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('TagNode'));
    }


    /**
     * @inheritDoc
     */
    render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        const scope = this;
        const promise = co(function*()
        {
            let result = '<' + scope.getTagName(node, configuration);
            if (node.arguments)
            {
                for (const index of node.arguments.keys())
                {
                    const argument = node.arguments[index];
                    const name = scope.getArgumentName(index, argument, configuration);
                    if (name)
                    {
                        result+= ' ';
                        result+= name;
                        result+= '="';
                        result+= yield configuration.renderer.renderNode(argument.value, configuration);
                        result+= '"';
                    }
                }
            }
            result+= '>';
            result+= yield configuration.renderer.renderList(node.children, configuration);
            result+= '</' + scope.getTagName(node, configuration) + '>';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidTagNodeRenderer = FluidTagNodeRenderer;
