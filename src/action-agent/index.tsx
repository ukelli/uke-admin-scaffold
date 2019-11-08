/* eslint-disable class-methods-use-this */
/**
 * 基础 Action 组件, 主要实现了请求方式, 包含表单验证的方式
 */

import React, { Component, PureComponent } from 'react';

import {
  Call, CallFunc, IsFunc, DebounceClass
} from 'basic-helper';
import { getUrlParams } from 'uke-request/url-resolve';
import { Children } from 'ukelli-ui/core/utils';
import { FormLayoutProps } from 'ukelli-ui/core/form-generator/form-layout';
import {
  ReportTemplateProps, TemplateOptions,
  ReportActionBtn, PowerMapper, RecordActionBtn
} from '../template-engine/for-report/types';

export interface ReqAgentReturn {
  err?: any;
}

export interface AgentOptions<APIRetrue = ReqAgentReturn> {
  /** 当前请求的 id */
  id?: string;
  /** 在请求发起前设置组件的 state */
  before?: () => {};
  /** 在请求发起后设置组件的 state */
  after?: <T = {}>(response: APIRetrue) => T | {};
  /** response 的过滤器，用于过滤并返回 ActionAgent 的返回值
   *
   * @example
   * const res = await actionAgent(api, {
   *   resFilter: (resData) => {
   *     resData.isDone = true;
   *     return resData;
   *   }
   * })
   * console.log(res) // res = { ...other, isDone: true }
   */
  resFilter?: <T = any>(response?: APIRetrue) => T;
  /** 当前 api 的操作的 ref 值，用于做对应状态的 loading 切换 */
  actingRef?: string;
}

export interface ReqAgentAPI extends Function {}

class ActionAgent<P = {}, S = {}> extends Component<P, S> {
  T

  formBtns!: FormLayoutProps['formBtns']

  btnConfig!: FormLayoutProps['formBtns']

  formOptions!: FormLayoutProps['formOptions']

  templateOptions!: TemplateOptions

  keyMapper!: ReportTemplateProps['keyMapper']

  columns!: ReportTemplateProps['columns']

  conditionOptions!: ReportTemplateProps['conditionOptions']

  recordActionBtns!: RecordActionBtn[]

  reportActionBtns!: ReportActionBtn[]

  powerMapper!: PowerMapper

  getUrlParams = getUrlParams;

  routerParams = getUrlParams();

  agents = [];

  __unmount

  _delayExec

  getRecordBtns!: (...args) => Children

  componentWillUnmount() {
    this.__unmount = true;
    // setTimeout(() => {
    //   console.log(this.reqInstance);
    // }, 100);
  }

  /**
   * 请求过程的 state 状态代理
   * @param {reqFunc} asyncFunc 业务 API
   * @param {agentOptions} object 此方法的配置项
   * @return {async function} 返回传入的第一个参数的包装方法，在此过程插入一些生命周期函数
   */
  reqAgent<APIRetrue>(
    reqFunc: (...args) => Promise<APIRetrue>,
    agentOptions: AgentOptions<APIRetrue>
  ) {
    if (!IsFunc(reqFunc)) {
      const errMsg = 'should pass func at arguments[0]';
      throw Error(errMsg);
    }
    const {
      id = 'reqAction',
      actingRef = 'loading',
      before,
      after,
      resFilter,
    } = agentOptions;

    this.stateSetter(this._before(Call(before), actingRef));

    return (...args): Promise<APIRetrue> => {
      return new Promise(async (resolve, reject) => {
        let res;
        try {
          res = await reqFunc(...args);
        } catch (e) {
          console.log(e);
          res.err = e;
        }
        // if (!IsFunc(after)) {
        //   throw Error('after should be a function');
        // }
        this.stateSetter(
          Object.assign({},
            {
              [actingRef]: false
            },
            this._after(res),
            this._checkRes(res) ? (IsFunc(after) && await after<APIRetrue>(res)) : {})
        );
        this.resStatus(res, id);
        const result = resFilter ? resFilter<APIRetrue>(res) : res;
        resolve(result);
      });
    };
  }

  _before(params, actingRef) {
    return Object.assign({}, {
      [actingRef]: true,
    }, params);
  }

  _after(res) {
    return { };
  }

  /**
   * 在调用 after 之前执行的 checker 函数
   * @param {response} res 系统传入的 res 对象
   * @return {boolean}
   */
  _checkRes(res) {
    return true;
  }

  resStatus(res, id) {

  }

  delayExec(...args) {
    if (!this._delayExec) this._delayExec = new DebounceClass();
    return this._delayExec.exec(...args);
  }

  stateSetter(state) {
    if (!this.__unmount && this.setState) this.setState(state);
  }
}

export default ActionAgent;
