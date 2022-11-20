import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { BackendErrorMessage } from "@/common/secondary/BackendErrorMessage";
import { ExternalError } from "@/common/domain/ExternalError";
import { ExternalMessageError } from "@/common/domain/ExternalMessageError";
import { NotFound } from "@/common/domain/NotFound";

// import { AppActions } from '@/store/app/app.actions';
// import { NotificationStatus } from '@/common/domain/NotificationStatus';
// import { Store } from 'vuex';

export const toDomainErrors = (error: AxiosError): any => {
  const response = error.response as any;
  if (!response) {
    throw new ExternalError("Axios response is not available");
  }
  const errorMessage = new BackendErrorMessage(response.data).toDomain();
  if (response.status === 404) {
    throw new NotFound(errorMessage);
  }
  throw new ExternalMessageError(errorMessage);
};

export class BackendCaller {
  constructor(private axiosInstance: AxiosInstance) {}

  public get<T>(
    url: string,
    config?: AxiosRequestConfig,
    shouldNotify = false
  ): Promise<AxiosResponse<T>> {
    if (shouldNotify) {
      return this.axiosInstance.get<T>(url, config).catch(toDomainErrors);
      // .catch(error => this.notify(error));
    }

    return this.axiosInstance.get<T>(url, config).catch(toDomainErrors);
  }

  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    shouldNotify = true
  ): Promise<AxiosResponse<T>> {
    if (shouldNotify) {
      return this.axiosInstance.put<T>(url, data, config).catch(toDomainErrors);
      // .catch(error => this.notify(error));
    }

    return this.axiosInstance.put<T>(url, data, config).catch(toDomainErrors);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    shouldNotify = true
  ): Promise<AxiosResponse<T>> {
    if (shouldNotify) {
      return this.axiosInstance
        .post<T>(url, data, config)
        .catch(toDomainErrors);
      // .catch(error => this.notify(error));
    }

    return this.axiosInstance.post<T>(url, data, config).catch(toDomainErrors);
  }

  public patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
    shouldNotify = true
  ): Promise<AxiosResponse<T>> {
    if (shouldNotify) {
      return this.axiosInstance
        .patch<T>(url, data, config)
        .catch(toDomainErrors);
      // .catch(error => this.notify(error));
    }

    return this.axiosInstance.patch<T>(url, data, config).catch(toDomainErrors);
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig,
    shouldNotify = true
  ): Promise<AxiosResponse<T>> {
    if (shouldNotify) {
      return this.axiosInstance.delete<T>(url, config).catch(toDomainErrors);
      // .catch(error => this.notify(error));
    }

    return this.axiosInstance.delete<T>(url, config).catch(toDomainErrors);
  }

  // private async notify(error: Error): Promise<void> {
  //   if (error instanceof ExternalError) {
  //     await this.store.dispatch(AppActions.PUBLISH_NOTIFICATION, {
  //       state: NotificationStatus.ERROR,
  //       text: error.message,
  //     });
  //   }
  //   if (error instanceof ExternalMessageError || error instanceof NotFound) {
  //     await this.store.dispatch(AppActions.PUBLISH_NOTIFICATION, {
  //       state: NotificationStatus.ERROR,
  //       text: error.getMessage(),
  //     });
  //   }
  //   throw error;
  // }
}
