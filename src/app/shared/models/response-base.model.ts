import { ResponseErrorModel } from './response-error.model';
import { DialogService } from '../dialog/dialog.service';

export interface ResponseBaseModel<T> {
  success: boolean;
  errors: string[];
  response: T;
}

export class ResponseUtils {
  public static async unwrapResponse<T>(promise: Promise<ResponseBaseModel<T>>): Promise<T> {
    const result = await promise;
    if (!result.success) {
      throw new ResponseErrorModel(result.errors[0]);
    }
    return result.response;
  }

  public static showError(e: Error, dialogService: DialogService) {
    if (e instanceof ResponseErrorModel) {
      dialogService.error(e.message);
    } else {
      dialogService.error('An error occurred');
    }
  }
}
