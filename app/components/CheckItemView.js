import ItemView from './ItemView';
import template from '../templates/check.jst';

export default ItemView.extend({
  tagName: 'tr',
  template: template,
  events: {
    'click .remove': 'onRemove'
  },

  onRemove() {
    this.model.destroy();
  }
});
