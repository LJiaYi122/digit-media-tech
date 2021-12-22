* 时间：2021-11-24

- 记录人：许智超
- week13（week07学习周）
- 本周参考资源：

> 1. [httpbin](https://httpbin.org/)
> 2. [HttpBin 介绍](https://www.quchao.net/httpbin.html)
> 3. [curl安装](https://curl.se/windows/)

----------

# 1.  HTTP Methods



## 1.1 GET请求

* 1. 不带参数的GET请求

测试的url： https://httpbin.org/get

Request（客户端）： GET  https://httpbin.org/get HTTP1.1

Response（服务端）：

> 1. Response body（输出页面信息为：请求客户的请求信息Request headers）:
>
> ```json
> {
>   "args": {}, 
>   "headers": {
>     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3", 
>     "Accept-Encoding": "gzip, deflate, br", 
>     "Accept-Language": "zh-CN,zh;q=0.9", 
>     "Host": "httpbin.org", 
>     "Sec-Fetch-Mode": "navigate", 
>     "Sec-Fetch-Site": "none", 
>     "Sec-Fetch-User": "?1", 
>     "Upgrade-Insecure-Requests": "1", 
>     "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36", 
>     "X-Amzn-Trace-Id": "Root=1-619e1b9d-7d5cb68449d1636608e37c79"
>   }, 
>   "origin": "210.21.79.243", 
>   "url": "https://httpbin.org/get"
> }
> ```
>
> 2. Response headers（服务端的HTTP特征描述）
>
> ```tex
>  access-control-allow-credentials: true 
>  access-control-allow-origin: * 
>  content-length: 562 
>  content-type: application/json 
>  date: Wed, 24 Nov 2021 10:57:31 GMT 
>  server: gunicorn/19.9.0 
>  status: 200 
> ```
>
> 

* 2. 带参数请求（<font style='color:red'>请大家观察 **args**</font>）

  测试的url： https://httpbin.org/get

  Request（客户端）： GET  https://httpbin.org/get HTTP1.1

  带参数的请求方式 ： https://httpbin.org/get + ? + 参数1名称=参数1值 + & + 参数2名称=参数2值 +...

  请求的主体会带着 ？ 后面的参数访问服务端，服务端可以对参数进行对应的处理（例如搜索浏览器查询内容之后进行反馈）

  > 1. Response body:
  >
  > ```json
  > {
  >   "args": {
  >     "search": "\u5357\u65b9\u5b66\u9662"
  >   }, 
  >   "headers": {
  >     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3", 
  >     "Accept-Encoding": "gzip, deflate, br", 
  >     "Accept-Language": "zh-CN,zh;q=0.9", 
  >     "Host": "httpbin.org", 
  >     "Sec-Fetch-Mode": "navigate", 
  >     "Sec-Fetch-Site": "none", 
  >     "Sec-Fetch-User": "?1", 
  >     "Upgrade-Insecure-Requests": "1", 
  >     "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36", 
  >     "X-Amzn-Trace-Id": "Root=1-619e205a-55bcc7e909b201771e8bb362"
  >   }, 
  >   "origin": "210.21.79.243", 
  >   "url": "https://httpbin.org/get?search=\u5357\u65b9\u5b66\u9662"
  > }
  > ```
  >
  > 

## 1.2 POST请求

* 1. 不带参数的POST请求

测试的url： https://httpbin.org/post

Request（客户端）： POST  https://httpbin.org/post HTTP1.1

<font style="color:red">请大家 点击  https://httpbin.org/post 试一试</font>

结论： 

1. 在浏览器上 直接输入 url链接 的方法是  GET
2. 客户端是 GET -------服务端是POST  ----->  method not allowed
3. POST方法需要  **提交表单** 对应 **HTML的<form>标签**

Response（服务端）body（<font style="color:red">对比GET请求观察数据中除了"args"多出了："data"、"files"、”"form"“</font>）：

```json
{
  "args": {},
  "data": "",
  "files": {},
  "form": {},
  "headers": {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Content-Length": "0",
    "Host": "httpbin.org",
    "Origin": "https://httpbin.org",
    "Referer": "https://httpbin.org/",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",
    "X-Amzn-Trace-Id": "Root=1-619e241f-1702f3882f0669747158abd3"
  },
  "json": null,
  "origin": "210.21.79.243",
  "url": "https://httpbin.org/post"
}
```

2. Response headers（服务端的HTTP特征描述）

```tex
 access-control-allow-credentials: true 
 access-control-allow-origin: * 
 content-length: 562 
 content-type: application/json 
 date: Wed, 24 Nov 2021 10:57:31 GMT 
 server: gunicorn/19.9.0 
 status: 200 
```





_______



# 实践课安排（10节）

* 目前是周六 14-15 从13周-18周

* 修改：十四周 （周六 上6节 3-4 8-10 ）十五周 （周六 4节 3-4 8-10）  教室：新综合楼612
