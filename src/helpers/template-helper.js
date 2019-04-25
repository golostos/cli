import _ from 'lodash';
import beautify from 'js-beautify';
import helpers from './index';

module.exports = {
  render (path, locals, options) {
    options = _.assign({
      beautify: true,
      indent_size: 2,
      preserve_newlines: true
    }, options || {});

    const template = helpers.asset.read(path);
    let content  = _.template(template)(locals || {});

    if (options.beautify) {
      content = beautify(content, options);
    }

    return content;
  }
};
