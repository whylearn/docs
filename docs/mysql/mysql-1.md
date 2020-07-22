---
title: MySQL的下载、安装
---

<!--truncate-->
## 一、Mysql的下载
 - ### 可以到官网下载
#### 　　https://www.mysql.com/
 - ### 或百度云下载 8.0.19版本
#### 　　https://pan.baidu.com/s/1TxK4lQxOG8sIvl111KF9TA
#### 　　提取码：ptdc
## 二、Mysql的环境变量的配置

 ![Image text](/assets/mysql/mysql_1.png)
 ![Image text](/assets/mysql/mysql_2.png)


## 三、添加两个文件data和mysql.ini
  ![Image text](/assets/mysql/mysql_3.png)
```
[mysqld]
#设置3306端口 
secure_file_priv=''
port = 3306
# 设置mysql的安装目录 
basedir=F:\Mysql\mysql-8.0.19-winx64
# 设置mysql数据库的数据的存放目录
datadir=F:\Mysql\mysql-8.0.19-winx64\data
# 允许最大连接数
max_connections=200 
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8 
# 创建新表时将使用的默认存储引擎 
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
```
## 四、cmd命令
 ### 1、打开cmd，不需要进入安装目录（之前配置过环境变量），输入下面命令，回车（没有反应）
 ```
 mysql --initialize-insercure --user=mysql
 ```
 ### 2、再输入下面命令，回车，会出现安装成功的提示
 
 ```
 mysql install
 ```
 ### 会出现安装成功的提示Service successfully installed
  
### 3、启动服务，输入如下命令，回车
```
net start mysql
```
#### 出现 MySQL 服务正在启动...
   #### 　　 MySQL 服务已经启动
### 4、完成
## 五、出现错误解决
- ### mysql下载找不到MSVCP
#### 　　 则需要下载vc_redist.x64.exe（百度云里有）
- ### MySQL_安装_找不到VCRUNTIME140_1.dll
#### 　　　则需要下载微软常用运行库合集_2019.07.20_X64.exe（百度云里有）
