<?php 
一.我们要做什么？
>>>项目预览和功能的简单介绍；
二.我们需要什么？
>>>PHP开发环境'5.4以上版本'，'Yii2.0.6'高级版
>>>'信心准备好'
三.我们要怎么做？
>>>需求分析
>>>程序设计

配置环境变量干嘛？
>>>而老师的windows系统PHP不是系统命令，为了随时调用PHP命令而设置环境变量。
'php /iWorker/iMooc/PHP_Blog/init'
'开发环境' 还是 '生产环境' ?
'是否生成...文件'

$config=<<<NAN
  overwrite frontend/web/index.php
   generate yii
   generate yii_test
   generate yii_test.bat
   generate cookie validation key in backend/config/main-local.php
   generate cookie validation key in frontend/config/main-local.php
      chmod 0777 backend/runtime
      chmod 0777 backend/web/assets
      chmod 0777 frontend/runtime
      chmod 0777 frontend/web/assets
      chmod 0755 yii
      chmod 0755 yii_test

  ... initialization completed.
NAN;



?>