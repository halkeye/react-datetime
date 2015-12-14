var webpack = require('webpack');
var pack = require('./package.json');

var cr = ('/*\n%%name%% v%%version%%\n%%homepage%%\n%%license%%: %%repo%%/raw/master/LICENSE\n*/\n')
  .replace( '%%repo%%', pack.repository.url)
	.replace( '%%name%%', pack.name)
	.replace( '%%version%%', pack.version)
	.replace( '%%license%%', pack.license)
	.replace( '%%homepage%%', pack.homepage)
;

var plugins = [
  new webpack.DefinePlugin({
    	'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')}
  }),
  new webpack.BannerPlugin( cr, { raw: true, entryOnly: true })
];

module.exports = {

  entry: ['./DateTime.js'],

  output: {
    path: __dirname + "/dist/",
    library: 'Datetime'//,
//    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['', '.js']
  },

  externals: [ 'react', 'react-dom', 'moment' ],

  plugins: plugins
};
