import React, { Component } from 'react';
import { Alert } from 'ukelli-ui';

const CompleteManual = () => {
  return (
    <div>
      <Alert title="功能介绍、名词解释, 「开发(Dev)须知」" type="warm" texts={[
        '创建「项目 Project」',
        '在「项目」中上传「资源 Asset」',
        '「项目」允许编辑, 但是「项目编号」是唯一标识, 用作部署标记, 不可更改',
        '「项目」允许删除, 删除会清理已上传的所有资源, 除了审计记录',
        '「资源列表」列出所有已上传的资源',
        '「资源列表」可以「发布、回滚、下载、删除」对应资源',
        '「项目创建者」对自己创建的项目有绝对控制权, 为自身项目负责, 其他人可以申请作为「协作者」加入到项目',
        '「操作审计」用于记录项目的所有操作, 由系统自动产生, 不可删除',
      ]}/>
      <Alert title="关于创建者与协作者机制, 「开发(Dev)运维(Ops)须知」" type="success" texts={[
        '「项目创建者」对自身创建的项目有绝对控制权, 可以允许其他人的协作申请, 让协作者加入',
        '「协作者」有一定的限制, 只能做「项目创建者」允许的操作, 同时不允许删除项目'
      ]}/>
      <Alert title="发布机制, 「开发(Dev)运维(Ops)须知」" type="error" texts={[
        '资源格式: 统一使用 zip 的压缩格式, 「部署服务器」需要有 unzip 功能',
        '部署路径: 根据「项目编码 projCode」标记 web server 的运行路径的部署目录, 例如 web-server/assets/public/[projCode]',
        '部署地址: 静态资源在端口 28101, 所以发布后的静态地址为 ip:28101/pb/[projCode]/xx || ip:28101/public/[projCode]/xx',
      ]}/>
      <Alert title="中转站发布机制以及 SCP 路径说明, 「运维(Ops)须知」" type="normal" texts={[
        '中转服务: 部署 uke-web-server 到一台中转服务器上, 在该服务器上配置对应的目标服务器 ssh 配置, 配置路径为 ~/.ssh/config',
        'scp 机制: 从中转服务器 scp 资源压缩包 -> 目标服务器(存放压缩包路径为 /var/front-end-zip/), 在目标服务器进行 unzip 解压到部署路径(例如 /var/www/deploy/[projCode]/)',
        'SSH 配置说明: 根据 Host 字段获取 scp 目标名，Host 后可以用 # 写中文名词(只用于显示)，格式严格验证，例如 Host demoHost #测试地址',
      ]}/>
      <Alert title="关于 webhook 机制「开发(Dev)须知」" type="warm" texts={[
        '资源发布成功后，可以触发指定的 webhook，具体 webhook 的功能由对应的服务提供，uke-web-server 有提供对应的 webhook 机制',
        'webhook 可以触发 telegram 机器人，或者发送邮件'
      ]}/>
    </div>
  );
};

export default CompleteManual;
