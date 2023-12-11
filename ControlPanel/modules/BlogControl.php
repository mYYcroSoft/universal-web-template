
<form method="post" action="<?php  echo __DIR__ . '/blogModules/IndexControl.php'; ?>">
    <input type="text" name="title" placeholder="Title">
    <input type="text" name="content" placeholder="Content">
    <input type="text" name="author" placeholder="Author">
    <input type="text" name="date" placeholder="Date">
    <input type="submit" name="submit" value="Submit">
</form>