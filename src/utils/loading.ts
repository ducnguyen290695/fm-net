import { hideLoading, showLoading } from '@/redux/reducers/app-reducers';
import { store } from '@/redux/store';

export const turnOnLoading = () => {
  store.dispatch(showLoading());
};

export const turnOffLoading = () => {
  store.dispatch(hideLoading());
};
