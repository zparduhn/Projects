import colorChanged from './signals/colorChanged';
import redirectRoot from './signals/redirectRoot';
import randomColorClicked from './signals/randomColorClicked';

export default (options = {}) => {
  return (module, controller) => {

    module.addState({
      title: 'You can change the url too!',
      color: '#333'
    });

    module.addSignals({
      colorChanged,
      redirectRoot,
      randomColorClicked
    });

  };
}
