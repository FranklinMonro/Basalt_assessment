import addToSwaggerConfig from './swaggerUtils';

const config = {
  openapi: '3.0.3',
  info: {
    version: '1.0.0',
    title: 'Basalt API',
    description: 'Endpoints for Runninghill API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  servers: [
    {
      url: '/basaltapi/',
      description: 'Local Dev',
    },
  ],
  tags: [
    {
      name: 'Get trails by city to create a database of trails to do',
      description: 'API for creating to do trails',
    },
  ],
  consumes: [
    'application/json',
  ],
  produces: [
    'application/json',
  ],
  paths: {},
  components: {
    schemas: {},
  },
};

export default addToSwaggerConfig(config);
