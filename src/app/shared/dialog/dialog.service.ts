/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { AlertType, DialogButton, DialogConfigModel } from './dialog-config.model';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private _display = false;

  private _message = '';

  private _alertType: AlertType = null as unknown as AlertType;

  private _header = '';

  private _buttons: DialogButton[] | null | undefined = null;

  public get isVisible(): boolean {
    return this._display;
  }

  public set isVisible(value: boolean) {
    this._display = value;
  }

  public get buttons(): DialogButton[] | null | undefined {
    return this._buttons;
  }

  public get message(): string {
    return this._message || '';
  }

  public get header(): string {
    return this._header || '';
  }

  public get alertType(): AlertType {
    return this._alertType;
  }

  public hide() {
    this._display = false;
    this.resetDialog();
  }

  public show(config: DialogConfigModel) {
    this._alertType = config.type || 'info';
    this._header = config.header;
    this._message = config.message;
    this._buttons = config.buttons;

    if (!isEmpty(this._buttons)) {
      this._buttons?.forEach((b) => {
        if (b.dismissOnClick === undefined) {
          // need to switch state on click event
          // eslint-disable-next-line no-param-reassign
          b.dismissOnClick = true;
        }
      });
    }
    this._display = true;
  }

  public warning(message: string) {
    this._alertType = 'warning';
    this._header = 'Warning';
    this._message = message;

    this._display = true;
  }

  public error(message: string) {
    this._alertType = 'error';
    this._header = 'Error';
    this._message = message;

    this._display = true;
  }

  public info(message: string) {
    this._alertType = 'info';
    this._header = 'Information';
    this._message = message;

    this._display = true;
  }

  public success(message: string) {
    this._alertType = 'success';
    this._header = 'Success';
    this._message = message;

    this._display = true;
  }

  private resetDialog() {
    this._header = '';
    this._message = '';
    this._buttons = null;
    setTimeout(() => {
      this._alertType = 'info';
    }, 500);
  }
}
