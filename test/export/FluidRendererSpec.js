'use strict';

/**
 * Requirements
 */
const FluidRenderer = require(FLUID_SOURCE + '/export/FluidRenderer.js').FluidRenderer;
const FluidConfiguration = require(FLUID_SOURCE + '/export/FluidConfiguration.js').FluidConfiguration;
const FluidModuleConfiguration = require(FLUID_SOURCE + '/configuration/FluidModuleConfiguration.js').FluidModuleConfiguration;
const FluidNodeRenderers = require(FLUID_SOURCE + '/export/renderer/index.js');
const rendererSpec = require('entoj-system/test').export.RendererShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(FluidRenderer.className, function()
{
    /**
     * Renderer Test
     */
    const fixtureConfiguration =
    {
        settings:
        {
        }
    };
    const testFixtures =
    {
        'should render conditions': 'conditions',
        'should render loops': 'loops',
        'should render filter': 'filter',
        'should render assignments': 'assignments',
        'should render calls': 'calls',
        //'should render tags': 'tags'        
        //,'should render special constructs': 'specials'
    };
    const options =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const moduleConfiguration = new FluidModuleConfiguration(global.fixtures.globalConfiguration, global.fixtures.buildConfiguration);
            return new FluidConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        fixtureInputPath: FLUID_FIXTURES + '/renderer',
        fixtureExpectedPath: FLUID_FIXTURES + '/renderer',
        createFixture: () => projectFixture.createDynamic(fixtureConfiguration)
    };
    const prepareParameters = (parameters) =>
    {
        global.fixtures.context.di.map('nunjucks.filter/ImageUrlFilter.dataProperties', ['src']);
        global.fixtures.context.di.map('nunjucks.filter/LinkUrlFilter.dataProperties', ['url']);
        const classes = FluidNodeRenderers.rendererList;
        const nodeRenderers = global.fixtures.context.createInstances(classes);
        return [nodeRenderers];
    };
    rendererSpec(FluidRenderer, 'export/FluidRenderer', prepareParameters, testFixtures, options);
});
