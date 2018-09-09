import tool from './api/tool.js';
import { cityJson } from './api/tool.js';
import http from './api/http.js';
import storage from './api/storage.js';
import api from './api/api.js';


const prod = require('../config/prod.env');
const dev = require('../config/dev.env');


console.log(prod);
console.log(dev);

class App {
  constructor() {
    this.$tool = tool;
    this.$storage = storage;
    this.$http = http;
    this.$api = api;
  }

}

const app = new App();

// this.$http = http;

export default app;

