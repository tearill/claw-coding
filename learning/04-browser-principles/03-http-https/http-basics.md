# HTTP/HTTPS 协议

## 1. HTTP 基础

### 1.1 HTTP 是什么？
HTTP（HyperText Transfer Protocol）是超文本传输协议，用于客户端与服务端之间的通信。

### 1.2 HTTP 请求结构
```
请求行 + 请求头 + 请求体
```

请求方法：
- GET：获取资源
- POST：提交数据
- PUT：更新资源
- DELETE：删除资源

### 1.3 HTTP 响应结构
```
状态行 + 响应头 + 响应体
```

状态码：
- 1xx：信息性
- 2xx：成功 (200 OK, 201 Created)
- 3xx：重定向 (301 Moved, 304 Not Modified)
- 4xx：客户端错误 (404 Not Found, 403 Forbidden)
- 5xx：服务端错误 (500 Internal Server Error)

## 2. HTTP 头字段

### 2.1 请求头
- Host：目标主机
- User-Agent：客户端信息
- Accept：可接受的响应内容
- Content-Type：请求体类型
- Authorization：认证信息

### 2.2 响应头
- Content-Type：响应内容类型
- Content-Length：响应体长度
- Set-Cookie：设置 Cookie
- Cache-Control：缓存控制

## 3. HTTPS 原理

### 3.1 HTTPS 是什么？
HTTPS = HTTP + TLS/SSL，在 HTTP 基础上增加了加密层。

### 3.2 TLS/SSL 握手过程
1. 客户端Hello → 服务端Hello
2. 交换证书
3. 验证证书
4. 协商密钥
5. 加密通信

### 3.3 对称加密 vs 非对称加密
- 对称加密：同一密钥加密/解密（效率高）
- 非对称加密：公钥/私钥（用于身份验证和密钥交换）

## 4. HTTP/2 与 HTTP/3

### 4.1 HTTP/2 特性
- 多路复用：单一连接并行请求
- Header 压缩：HPACK 算法
- 服务器推送：主动推送资源
- 二进制分帧：更高效解析

### 4.2 HTTP/3 特性
- 基于 QUIC 协议
- 0-RTT 连接建立
- 解决队头阻塞问题

## 5. 常见面试题

### 5.1 HTTP vs HTTPS
- 安全性：HTTP 明文，HTTPS 加密
- 端口：80 vs 443
- 证书：HTTPS 需要 CA 证书

### 5.2 GET vs POST
- GET 参数在 URL，POST 在请求体
- GET 可缓存，POST 不缓存
- GET 长度受限，POST 相对不限
- GET 幂等，POST 不幂等
