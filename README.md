# autofun
Auto start - stop fan for raspberry pi, node.js

中文吧，英文太废了。

树莓派检测芯片温度实现自动启停风扇！

准备工作：
	1.三极管（电流能到200毫安以上），或者继电器（不建议，太大了，又难看，三极管贴风扇上基本能看不着）
	2.焊接好风扇，gpio端口14。
	3.安装Node.js 6以上
	4.编辑linux服务脚本并添加到/etc/init.d/，chkconfig add autofun

启停实现过程:
	1.获取CPU温度 cat /sys/devices/virtual/thermal/thermal_zone0/temp
	2.检查温度是否高于48. 启动
	3.检查温度是否低于40. 停止
