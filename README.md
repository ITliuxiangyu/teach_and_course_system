# 概述

管理员账户密码：123456/123456

# 安装

&emsp;&emsp;使用docker一键部署。需要先设置mysql 密码和判题核心的密钥环境变量.然后执行start.sh即可。

注意下面只是临时设置环境变量，终端关闭就会失效。

```bash
export MYSQL_PASS=123456
#export JUDGE_TOKEN=12345678
chmod +x start.sh
./start.sh
```
部署完毕后访问：部署机器ip:8089。

**PS:如果docker pull 镜像速度很慢，请给docker设置国内加速地址。**

## 前端技术栈如下

- vue.js
- element.ui
- axios

## 后端技术栈如下

- node.js
- koa
- jwt
- mysql
- redis
