* 时间：2021-12-01

- 记录人：许智超
- week14（week08学习周）
- 本周参考资源：

> 1. [httpbin](https://httpbin.org/)
> 2. [HttpBin 介绍](https://www.quchao.net/httpbin.html)
> 3. [curl安装](https://curl.se/windows/)

-----

# 2.  Auth methods

1. 通过URL路径的信息传递 验证 身份（准备身份信息 --注册）

> 1. 在URL路径中提交验证信息[
>    /basic-auth/{user}/{passwd}]
>
>    Prompts the user for authorization using HTTP Basic Auth.
>
> 2. 例如：
>
> > 1. user  = Lihua
> > 2. passwd = 123456
> > 3. 通用： URL = https://httpbin.org/basic-auth/{user}/{passwd}
> > 4. 本案例： URL = https://httpbin.org/basic-auth/Lihua/123456
>
> 2. 通过访问需要验证的URL地址，填入正确的注册信息（user 和 passwd，可以访问成功）
>
> > 1. 200：
> >
> > ```json
> > {
> >   "authenticated": true, 
> >   "user": "Lihua"
> > }
> > ```
> >
> > 

# 3. Status codes

1. httpbin.org网站的测试URL为 ：http://httpbin.org/status/{codes}

   > * 注意： 在用该网站测试状态码时，没有对应的body信息（页面信息）

2. 状态码测试结果：

   > 1. http://httpbin.org/status/100
   >
   > > 1. Informational（信息性状态码）- 接收的请求正在处理 ----加载中...
   > > 2. 类型错误：无法获取
   >
   > 2. http://httpbin.org/status/200
   >
   > > 1. *Success*（成功状态码）--请求正常处理完毕 
   > > 2. response结果 与 get (https://httpbin.org/get)测试相同(但不包含页面信息)
   >
   > 3. http://httpbin.org/status/300
   >
   > > 1. Redirection（重定向状态码） --- 需要进行附加操作以完成请求
   > >
   > > 2.  ```
   > >     Status Code: 300 MULTIPLE CHOICES (from disk cache)
   > >     ```
   >
   > 4. http://httpbin.org/status/400
   >
   > > 1. Client Error（客户端错误状态码） -- 服务器无法处理请求
   > > 2. 无响应内容，请客户检查请求信息（URL）是否正确，或者请求方式（如GET、POST）是否正确
   >
   > 5. http://httpbin.org/status/500
   >
   > > 1. Server Error（服务器错误状态码）--服务器处理请求出错
   > > 2. 服务端报错的处理方法，找到服务人员（如客服等）询问网站问题，服务端人员通过检查后端代码解决。

   

   # 4. 请求检查

   1. 检查首部信息

   > 1. 测试的URL路径： http://httpbin.org/headers
   > 2. 返回页面信息是请求客户端的**请求者**首部信息，结果如下：
   >
   > ```json
   > {
   >   "headers": {
   >     "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3", 
   >     "Accept-Encoding": "gzip, deflate", 
   >     "Accept-Language": "zh-CN,zh;q=0.9", 
   >     "Host": "httpbin.org", 
   >     "Upgrade-Insecure-Requests": "1", 
   >     "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36", 
   >     "X-Amzn-Trace-Id": "Root=1-61a75fd2-2ac5bca342c771fc158960c5"
   >   }
   > }
   > ```
   >
   > 

   2. 检查**请求者**的ip地址：

   > 1. 测试的URL路径： http://httpbin.org/ip
   > 2. 返回结果为：
   >
   > ```json
   > {
   >   "origin": "210.21.79.244"
   > }
   > ```

   3. 检查请求者的网络代理

   > 1. 测试的URL路径： http://httpbin.org/user-agent
   > 2. 返回结果为:
   >
   > ```json
   > {
   >   "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36"
   > }
   > ```

# 5. 图片信息

1. 测试链接：http://httpbin.org/image

2. 返回信息： 一张测试图片

   ![img](http://httpbin.org/image)



# 6. 课后请先查阅： [Face⁺⁺ - 旷视Face⁺⁺人工智能开放平台](https://www.faceplusplus.com.cn/)

