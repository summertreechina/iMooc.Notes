<html>
<form action="" method="post">
    账号: <input name="username" type="text" value="MeepoPS"><br>
    密码: <input name="password" type="password" value="meepops.lanecn.com"><br>
    <input type="submit">
</form>
</html>
<?php
$result = \Meepops\Api\Http::sessionStart();

if (!empty($_POST['username']) && !empty($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $userInfo = array('username' => $username, 'password' => $password);
    $_SESSION['user_info'] = $userInfo;
    if(!empty($_SESSION['user_info']['username']) && !empty($_SESSION['user_info']['password'])){
        \MeepoPS\Api\Http::setHeader('Location: index.php');
    }
}