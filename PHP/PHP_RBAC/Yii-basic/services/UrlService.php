<?php
namespace app\services;
use yii\helpers\Url;

/**
* 统一管理、规范链接书写
*/
class UrlService{

	// 返回一个内部链接
	public static function buildUrl($url, $params=[]) {
		return Url::toRoute(array_merge([$url], $params));
	}
	// 返回一个空链接
	public static function buildNullUrl() {
		return 'javascript:;';
	}

}













?>