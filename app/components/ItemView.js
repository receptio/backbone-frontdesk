import Marionette from 'backbone.marionette';

export default Marionette.View.extend({
  triggers: {
    'click': 'select:item'
  }
});
