<?php
>>> 策略模式的控制反转 ?
	依赖倒置原则
	A.高层次的模块不应该依赖于低层次的模块，他们都应该依赖于抽象。
	B.抽象不应该依赖于具体实现，具体实现应该依赖于抽象。
	在这里不管是Page，还是低层次的MaleUserStratey和FemaleUserStrategy都依赖于抽象userStrategy这个抽象，而UserStrategy不依赖于具体实现，具体实现Female和male都依赖于UserStrategy这个抽象。有点绕，应该是这个关系。


?>