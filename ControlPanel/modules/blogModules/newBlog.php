<?php

include_once '**/classes/CreateBlog.php';

if (isset($_POST['submit'])) {
    $id = random_int(100, 999);
    $title = $_POST['title'];
    $content = $_POST['content'];
    $author = $_POST['author'];
    $date = $_POST['date'];

    $newBlog = new newBlog($id, $title, $content, $author, $date);
    $newBlog->createBlog();
    $newBlog->__destoryInstance();
}
