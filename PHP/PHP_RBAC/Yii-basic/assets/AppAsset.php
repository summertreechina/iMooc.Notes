<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;
use app\services\UrlService;
/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public function registerAssetFiles($view) {
        $syn_ctl = '20170520';
        $this->css = [
            UrlService::buildUrl('/bootstrap/css/bootstrap.css', ['v'=>$syn_ctl]),
            UrlService::buildUrl('/css/app.css')
        ];
        $this->js = [
            UrlService::buildUrl('/jQuery/jquery-3.1.0.js'),
            UrlService::buildUrl('/jQuery/jquery-migrate-3.0.0.js'),
            UrlService::buildUrl('/bootstrap/js/bootstrap.js')      
        ];
        
        parent::registerAssetFiles($view);
    }

}


?>