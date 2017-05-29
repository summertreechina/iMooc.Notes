<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <link rel="icon" href="./favicon.ico">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
           <a class="navbar-brand" href="#">RBAC</a>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页</a></li>
          </ul>
          <p class="navbar-text navbar-right">Hi,xxxxxx</p>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
        <div class="col-sm-2 col-md-2 col-lg-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="javascript:;">权限演示页面</a></li>
            <li><a href="javascript:;">测试页面一</a></li>
            <li><a href="javascript:;">测试页面二</a></li>
            <li><a href="javascript:;">测试页面三</a></li>
            <li><a href="javascript:;">测试页面四</a></li>
            <li class="active"><a href="javascript:;">系统设置</a></li>
            <li><a href="javascript:;">用户管理</a></li>
            <li><a href="javascript:;">角色管理</a></li>
            <li><a href="javascript:;">权限管理</a></li>
          </ul>
        </div>
        <div class="col-sm-10 col-md-10 col-lg-10 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
            <?=$content; ?>
            <hr/>
            <footer>
                <p class="pull-left">@夏沫儿</p>
                <p class="pull-right">
                    Power By 慕课网 www.imooc.com
                </p>
            </footer>
        </div>
    </div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
