import RowView from '../core/RowView';
import template from '../templates/check.jst';

export default RowView.extend({
  template: template,
  events: {
    'click .remove': 'onRemove'
  },

  onRemove() {
    this.model.destroy();
  }
});
