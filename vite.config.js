import Vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

module.exports = {
  assetsInlineLimit: 1,
  assetsInclude:  /\.(pdf|jpg|png|svg)$/,
  plugins: [
    Vue(),
    ViteComponents(),
  ],
};
