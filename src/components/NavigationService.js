import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        type: NavigationActions.NAVIGATE,
        routeName,
        params,
      })
    );
  }
}

// İhtiyaç duyduğunuz diğer navigasyon fonksiyonlarını ekleyin ve dışa aktarın

export default {
  navigate,
  setTopLevelNavigator,
};
