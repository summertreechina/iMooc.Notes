<?php

\MeepoPS\Api\Http::sessionStart();

if (empty($_SESSION['user_info']) || empty($_SESSION['user_info']['username'])) {
    echo '<script language="JavaScript">
            alert("请登陆");
            location.href="login.php";
            document.onmousedown=click
        </script>';
} else {
    echo '登陆成功!<br>';
    echo '用户名: ' . $_SESSION['user_info']['username'] . '. 密码: ' . $_SESSION['user_info']['password'] . '<br>';
    echo '<a href="./upload.php">点击测试上传文件</a>';
}