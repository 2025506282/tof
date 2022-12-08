<!--
 * @Author: sunji 2025506282@qq.com
 * @Date: 2022-11-07 09:15:26
 * @LastEditors: sunji 2025506282@qq.com
 * @LastEditTime: 2022-12-06 10:46:33
 * @FilePath: \front-end\随记\浏览器输入url到底发生了什么.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 查找缓存，浏览器缓存，chrome://cache

# 内存缓存，本地缓存

# DNS 域名解析找到 ip 地址

# 发送请求，建立连接

# 3 次握手

# 返回数据

# 4 次挥手

# 浏览器渲染，html 树，css 树合成 dom 树合成 renderTree

# 一个进程有多个子线程,比如说打开一个一个任务管理器，就有很多进程，进程之间互相不影响，其实我觉得不是的，比如说有的时候莫一个页面崩溃了，会导致其他页面也会重启，一个进程又包含很多线程，

渲染线程
请求线程
GPU 线程
事件线程

一个页面有五个进程：网络，GPU,渲染，浏览器进程，插件进程

渲染进程包括
GUI 渲染线程
js 线程
事件线程
计时器线程
请求线程
