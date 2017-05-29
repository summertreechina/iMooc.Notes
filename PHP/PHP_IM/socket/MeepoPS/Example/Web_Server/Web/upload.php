<form method="post" enctype="multipart/form-data">
    文件名: <input type="text" name="filename1[]"><br>
    文件名: <input type="text" name="filename1[]"><br>
    文件名: <input type="text" name="filename2"><br>
    文件名: <input type="text" name="filename3"><br>
    选择文件: <input type="file" name="attachment"><br>
    <input type="submit">
</form>
<?php
print_r($_POST);
print_r($_FILES);