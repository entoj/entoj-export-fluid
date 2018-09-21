/**
 * @namespace export.renderer
 */
module.exports =
{
    // Filters
    FluidDefaultFilterRenderer: require('./FluidDefaultFilterRenderer.js').FluidDefaultFilterRenderer,
    FluidEmptyFilterRenderer: require('./FluidEmptyFilterRenderer.js').FluidEmptyFilterRenderer,
    FluidModuleClassesFilterRenderer: require('./FluidModuleClassesFilterRenderer.js').FluidModuleClassesFilterRenderer,
    FluidSvgUrlFilterRenderer: require('./FluidSvgUrlFilterRenderer.js').FluidSvgUrlFilterRenderer,
    FluidSetFilterRenderer: require('./FluidSetFilterRenderer.js').FluidSetFilterRenderer,
    FluidMediaQueryFilterRenderer: require('./FluidMediaQueryFilterRenderer.js').FluidMediaQueryFilterRenderer,
    FluidImageUrlFilterRenderer: require('./FluidImageUrlFilterRenderer.js').FluidImageUrlFilterRenderer,
    FluidTranslateFilterRenderer: require('./FluidTranslateFilterRenderer.js').FluidTranslateFilterRenderer,
    FluidSafeFilterRenderer: require('./FluidSafeFilterRenderer.js').FluidSafeFilterRenderer,
    FluidLengthFilterRenderer: require('./FluidLengthFilterRenderer.js').FluidLengthFilterRenderer,

    // Tags
    FluidTagNodeRenderer: require('./FluidTagNodeRenderer.js').FluidTagNodeRenderer,
    FluidFormTagRenderer: require('./FluidFormTagRenderer.js').FluidFormTagRenderer,
    FluidFormInputTagRenderer: require('./FluidFormInputTagRenderer.js').FluidFormInputTagRenderer,
    FluidFormSelectTagRenderer: require('./FluidFormSelectTagRenderer.js').FluidFormSelectTagRenderer,
    FluidFormOptionTagRenderer: require('./FluidFormOptionTagRenderer.js').FluidFormOptionTagRenderer,
    FluidFormTextareaTagRenderer: require('./FluidFormTextareaTagRenderer.js').FluidFormTextareaTagRenderer,
    FluidFormRadioTagRenderer: require('./FluidFormRadioTagRenderer.js').FluidFormRadioTagRenderer,
    FluidFormCheckboxTagRenderer: require('./FluidFormCheckboxTagRenderer.js').FluidFormCheckboxTagRenderer,
    FluidLinkTagRenderer: require('./FluidLinkTagRenderer.js').FluidLinkTagRenderer,
    FluidButtonTagRenderer: require('./FluidButtonTagRenderer.js').FluidButtonTagRenderer,

    // Standards
    FluidArrayNodeRenderer: require('./FluidArrayNodeRenderer.js').FluidArrayNodeRenderer,
    FluidBlockNodeRenderer: require('./FluidBlockNodeRenderer.js').FluidBlockNodeRenderer,
    FluidBooleanOperandNodeRenderer: require('./FluidBooleanOperandNodeRenderer.js').FluidBooleanOperandNodeRenderer,
    FluidCallNodeRenderer: require('./FluidCallNodeRenderer.js').FluidCallNodeRenderer,
    FluidComplexVariableNodeRenderer: require('./FluidComplexVariableNodeRenderer.js').FluidComplexVariableNodeRenderer,
    FluidConditionNodeRenderer: require('./FluidConditionNodeRenderer.js').FluidConditionNodeRenderer,
    FluidExpressionNodeRenderer: require('./FluidExpressionNodeRenderer.js').FluidExpressionNodeRenderer,
    FluidFilterNodeRenderer: require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer,
    FluidForNodeRenderer: require('./FluidForNodeRenderer.js').FluidForNodeRenderer,
    FluidGroupNodeRenderer: require('./FluidGroupNodeRenderer.js').FluidGroupNodeRenderer,
    FluidIfNodeRenderer: require('./FluidIfNodeRenderer.js').FluidIfNodeRenderer,
    FluidLiteralNodeRenderer: require('./FluidLiteralNodeRenderer.js').FluidLiteralNodeRenderer,
    FluidMacroNodeRenderer: require('./FluidMacroNodeRenderer.js').FluidMacroNodeRenderer,
    FluidOperandNodeRenderer: require('./FluidOperandNodeRenderer.js').FluidOperandNodeRenderer,
    FluidOutputNodeRenderer: require('./FluidOutputNodeRenderer.js').FluidOutputNodeRenderer,
    FluidSetNodeTenaryRenderer: require('./FluidSetNodeTenaryRenderer.js').FluidSetNodeTenaryRenderer,
    FluidSetNodeRenderer: require('./FluidSetNodeRenderer.js').FluidSetNodeRenderer,
    FluidVariableNodeRenderer: require('./FluidVariableNodeRenderer.js').FluidVariableNodeRenderer,
    FluidYieldNodeRenderer: require('./FluidYieldNodeRenderer.js').FluidYieldNodeRenderer,
    FluidTextNodeRenderer: require('entoj-system').export.renderer.TextNodeRenderer,

    // Fallback
    FluidAnyNodeRenderer: require('entoj-system').export.renderer.AnyNodeRenderer,

    // Renderers
    rendererList:
    [
        // Filters
        require('./FluidDefaultFilterRenderer.js').FluidDefaultFilterRenderer,
        require('./FluidEmptyFilterRenderer.js').FluidEmptyFilterRenderer,
        require('./FluidModuleClassesFilterRenderer.js').FluidModuleClassesFilterRenderer,
        require('./FluidSetFilterRenderer.js').FluidSetFilterRenderer,
        require('./FluidMediaQueryFilterRenderer.js').FluidMediaQueryFilterRenderer,
        require('./FluidSvgUrlFilterRenderer.js').FluidSvgUrlFilterRenderer,
        require('./FluidImageUrlFilterRenderer.js').FluidImageUrlFilterRenderer,
        require('./FluidTranslateFilterRenderer.js').FluidTranslateFilterRenderer,
        require('./FluidSafeFilterRenderer.js').FluidSafeFilterRenderer,
        require('./FluidLengthFilterRenderer.js').FluidLengthFilterRenderer,

        // Tags
        require('./FluidFormInputTagRenderer.js').FluidFormInputTagRenderer,
        require('./FluidFormTagRenderer.js').FluidFormTagRenderer,
        require('./FluidFormSelectTagRenderer.js').FluidFormSelectTagRenderer,
        require('./FluidFormOptionTagRenderer.js').FluidFormOptionTagRenderer,
        require('./FluidFormRadioTagRenderer.js').FluidFormRadioTagRenderer,
        require('./FluidFormTextareaTagRenderer.js').FluidFormTextareaTagRenderer,
        require('./FluidFormCheckboxTagRenderer.js').FluidFormCheckboxTagRenderer,
        require('./FluidLinkTagRenderer.js').FluidLinkTagRenderer,
        require('./FluidButtonTagRenderer.js').FluidButtonTagRenderer,
        require('./FluidTagNodeRenderer.js').FluidTagNodeRenderer,

        // Standards
        require('./FluidArrayNodeRenderer.js').FluidArrayNodeRenderer,
        require('./FluidBlockNodeRenderer.js').FluidBlockNodeRenderer,
        require('./FluidBooleanOperandNodeRenderer.js').FluidBooleanOperandNodeRenderer,
        require('./FluidCallNodeRenderer.js').FluidCallNodeRenderer,
        require('./FluidComplexVariableNodeRenderer.js').FluidComplexVariableNodeRenderer,
        require('./FluidConditionNodeRenderer.js').FluidConditionNodeRenderer,
        require('./FluidExpressionNodeRenderer.js').FluidExpressionNodeRenderer,
        require('./FluidFilterNodeRenderer.js').FluidFilterNodeRenderer,
        require('./FluidForNodeRenderer.js').FluidForNodeRenderer,
        require('./FluidGroupNodeRenderer.js').FluidGroupNodeRenderer,
        require('./FluidIfNodeRenderer.js').FluidIfNodeRenderer,
        require('./FluidLiteralNodeRenderer.js').FluidLiteralNodeRenderer,
        require('./FluidMacroNodeRenderer.js').FluidMacroNodeRenderer,
        require('./FluidOperandNodeRenderer.js').FluidOperandNodeRenderer,
        require('./FluidOutputNodeRenderer.js').FluidOutputNodeRenderer,
        require('./FluidSetNodeTenaryRenderer.js').FluidSetNodeTenaryRenderer,
        require('./FluidSetNodeRenderer.js').FluidSetNodeRenderer,
        require('./FluidVariableNodeRenderer.js').FluidVariableNodeRenderer,
        require('./FluidYieldNodeRenderer.js').FluidYieldNodeRenderer,
        require('entoj-system').export.renderer.TextNodeRenderer
    ]
};
