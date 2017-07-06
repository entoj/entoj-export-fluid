'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class FluidVariableNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/FluidVariableNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('VariableNode'));
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

        let result = '';

        // Open curly?
        let useCurly = false;
        // When condition
        if (node.isChildOf(['ConditionNode']))
        {
            useCurly = true;
        }
        // When expression with a string literal
        if (node.isChildOf(['ExpressionNode']) &&
            node.parent.find('LiteralNode', { valueType: 'string' }))
        {
            useCurly = true;
        }
        // When expression without an operand and not a parameter
        if (node.isChildOf(['ExpressionNode']) &&
            !node.parent.find('OperandNode') &&
            !node.parent.isChildOf('ParameterNode'))
        {
            useCurly = true;
        }

        // Add curly
        if (useCurly)
        {
            result+= '{';
        }

        // Loop variables
        if (node.isChildOf('ForNode') && node.fields[0] === 'loop' && node.fields.length === 2)
        {
            result+= 'loop.';
            if (node.fields[1] === 'length')
            {
                result+= 'total';
            }
            else if (node.fields[1] === 'first')
            {
                result+= 'isFirst';
            }
            else if (node.fields[1] === 'last')
            {
                result+= 'isLast';
            }
            else
            {
                result+= node.fields[1];
            }
        }
        // Standard variables
        else
        {
            for (const field of node.fields)
            {
                if (typeof field == 'number')
                {
                    result = result.substring(0, result.length - 1);
                    result+= '[' + field + '].';
                }
                else
                {
                    result+= field + '.';
                }
            }
            result = result.substring(0, result.length - 1);
        }

        // Close curly?
        if (useCurly)
        {
            result+= '}';
        }

        return Promise.resolve(result);
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.FluidVariableNodeRenderer = FluidVariableNodeRenderer;
