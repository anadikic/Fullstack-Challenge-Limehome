import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { StringUtils } from '../../classes/stringutils'

const defaultOptions = { headers: new HttpHeaders(), responseType: 'json' }

@Injectable()
export class RestApiService {
  // URL format '//example.com/api' || '//api.example.com'
  private _restApi: string = ''
  private _header: HttpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
  private _options: any

  constructor(protected http: HttpClient) {
    // const _environment = this._environmentService.environment;
    // this.requestApi = _environment && _environment.apiUrl !== '' ? _environment.apiUrl : '';
  }

  // Restapi url for communication
  public get requestApi(): string {
    return this._restApi
  }

  public set requestApi(value: string) {
    this._restApi = value || ''
  }

  // Set default header for request
  public get requestHeader(): HttpHeaders {
    return this._header || new HttpHeaders()
  }

  public set requestHeader(value: HttpHeaders) {
    this._header = value || new HttpHeaders()
  }

  // Set default requestOptions
  public get requestOptions(): any {
    const _options = this._prepareOptions(this._options)
    return _options
  }

  public set requestOptions(value: any) {
    this._options = value || {
      headers: this.requestHeader,
      responseType: 'json',
    }
  }

  public requestGET<T>(
    requestPath: string,
    requestOptions?: any,
    throwError = true,
  ): Promise<T> {
    const requestURL = this.generateRequestURL(requestPath)
    const _requestOptions = { ...(requestOptions || this.requestOptions) }
    _requestOptions.withCredentials = false

    return this.http
      .get<T>(requestURL, requestOptions || this.requestOptions)
      .toPromise()
      .then((response) => {
        return Promise.resolve<any>(response)
      })
      .catch((error) => {
        if (throwError) {
          console.log(throwError)
        }
        return <any>Promise.reject(error)
      })
  }

  public requestPOST<T>(
    requestPath: string,
    requestData: any,
    requestOptions?: any,
    throwError = true,
  ): Promise<T> {
    const requestURL = this.generateRequestURL(requestPath)

    return this.http
      .post<T>(
        requestURL,
        JSON.stringify(requestData),
        requestOptions || this.requestOptions,
      )
      .toPromise()
      .catch((error) => {
        if (throwError) {
          console.log(throwError)
        }
        return <any>Promise.reject(error)
      })
  }

  public requestRawBodyPOST<T>(
    requestPath: string,
    requestData: any,
    requestOptions?: any,
    throwError = true,
  ): Promise<T> {
    const requestURL = this.generateRequestURL(requestPath)
    this.requestHeader = this.requestHeader.set(
      'Content-Type',
      'application/json; charset=utf-8',
    )

    return this.http
      .post<T>(requestURL, requestData, requestOptions || this.requestOptions)
      .toPromise()
      .catch((error) => {
        if (throwError) {
          console.log(throwError)
        }
        return <any>Promise.reject(error)
      })
  }

  public requestPUT<T>(
    requestPath: string,
    requestData: any,
    requestOptions?: any,
    throwError = true,
  ): Promise<T> {
    const requestURL = this.generateRequestURL(requestPath)
    return this.http
      .put<T>(
        requestURL,
        JSON.stringify(requestData),
        requestOptions || this.requestOptions,
      )
      .toPromise()
      .catch((error) => {
        if (throwError) {
          console.log(throwError)
        }
        return <any>Promise.reject(error)
      })
  }

  public requestPATCH<T>(
    requestPath: string,
    requestData: any,
    requestOptions?: any,
    throwError = true,
  ): Promise<T> {
    const requestURL = this.generateRequestURL(requestPath)
    return this.http
      .patch<T>(
        requestURL,
        JSON.stringify(requestData),
        requestOptions || this.requestOptions,
      )
      .toPromise()
      .catch((error) => {
        if (throwError) {
          console.log(throwError)
        }
        return <any>Promise.reject(error)
      })
  }

  public requestDELETE<T>(
    requestPath: string,
    requestOptions?: any,
    throwError = true,
  ): Promise<T> {
    const requestURL = this.generateRequestURL(requestPath)
    return this.http
      .delete<T>(requestURL, requestOptions || this.requestOptions)
      .toPromise()
      .catch((error) => {
        if (throwError) {
          console.log(throwError)
        }
        return <any>Promise.reject(error)
      })
  }

  protected generateRequestURL(_path: string): string {
    // tslint:disable-next-line:max-line-length
    // const expression = '^(?!mailto:)((?:((?:https?:|ftp:)?\/\/)?(?:\S+(?::\S*)?@)?)(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:\d\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff\d]+-?)*[a-z\u00a1-\uffff\d]+)(?:\.(?:[a-z\u00a1-\uffff\d]+-?)*[a-z\u00a1-\uffff\d]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*))(?::\d{2,5})?)?(?:(\/|\?|#)[^\s]*)?$';
    // const regex = new RegExp(expression, 'gi');

    // tslint:disable-next-line:max-line-length
    const regex = /^(?!mailto:)((?:((?:https?:|ftp:)?\/\/)?(?:\S+(?::\S*)?@)?)(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:\d\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff\d]+-?)*[a-z\u00a1-\uffff\d]+)(?:\.(?:[a-z\u00a1-\uffff\d]+-?)*[a-z\u00a1-\uffff\d]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*)(?::\d{2,5})?)?(?:[^\/\/](\/|\?|#)[^\s]*)?$/gi

    if (this.requestApi) {
      if (_path.match(regex)) {
        return _path
      } else {
        return (
          StringUtils.rtrim(this.requestApi, '/') +
          '/' +
          StringUtils.ltrim(_path, '/')
        )
      }
    }
    return _path
  }

  private _prepareOptions(options: any) {
    const _defaultOptions = Object.assign({}, defaultOptions, options)
    _defaultOptions.headers = this.requestHeader
    return _defaultOptions
  }
}
