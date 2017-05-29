<?php 

 1-3通过{}或[]可以对'字符串中的字符'做'增删改查'的操作
（1）字符串的下标从0开始。$str="adsxgtdf";  Echo $str{1};得到d
（2）替换操作：只能一个字符修改一个字符，中文不行，中文在utf-8中占三个字符
（3）删除操作：首先找到这个字符，然后赋值给它一个空字符，就相当与删除过了 只是替代了，字符的长度没有变，只是看不到了，$str='asdfefg';   $str{1}='';可以用空字符或者NULL，  Echo $str{1};得到adfefg
（4）添加字符操作：只能在最后添加，也是只能添加一个字符
（5）生成验证码echo $str{mt_rand(0,strlen($str)-1)}; 随机取一个数，字符串长度
$string='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789';
echo $string{mt_rand(0,strlen($string)-1)};
for($i=1;$i<=4;$i++){
	echo $string{mt_rand(0,strlen($string)-1)};
};








 ?>