<?php 
>>'接口'里面的方法都是没有实现的
>>'类'里面的方法都是有实现的
>>'抽象类' 允许类里面一部分方法不实现。
1. abstract 关键字用于定义抽象类
2.在抽象方法前面添加 abstract 关键字可以标明这个方法是抽象方法'不需要具体实现' {}
3.抽象类中可以包含普通的方法，有方法的具体实现。
4.继承抽象类的关键字是 extends
5.抽象类'不能被实例化'，继承抽象类的子类需要实现抽象类中定义的抽象方法
6.抽象方法 abstract public  function A();
7.抽象类比较特殊。但是它和接口一样。不能直接把对象实例化。通过共性来规范化类。
格式: 
abstract class classname {}



 ?>