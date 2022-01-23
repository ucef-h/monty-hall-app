import { CallbackModel, CallBackAsync } from '../models/callback.model';

export interface DialogConfigModel {
  header: string;
  message: string;
  type: AlertType;
  buttons?: DialogButton[];
}

export interface DialogButton {
  text: string;
  callback: CallbackModel | CallBackAsync;
  dismissOnClick?: boolean;
}

export type AlertType = 'info' | 'warning' | 'error' | 'success';
