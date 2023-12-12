<?php

class BlogListResult
{
    public function __construct()
    {
        $this->BlogList = [];
        $this->getBlogs();
    }

    protected function getBlogs()
    {
        $sql = 'SELECT * FROM blog';
        $result = $conn->query($sql);
        $this->BlogList = Blog($result['id']);
        if ($result->num_rows > 0) {
            return $result;
            echo 'Blog loaded successfully';
        } else {
            echo 'Error: '.$sql.'<br>'.$conn->error;
        }
    }
}

class Blog
{
    public function __construct($id)
    {
        $instanceLoadData = loadBlog($id);
        $this->id = $instanceLoadData['id'];
        $this->title = $instanceLoadData['title'];
        $this->content = $instanceLoadData['content'];
        $this->author = $instanceLoadData['author'];
        $thi->date = $instanceLoadData['date'];
    }

    protected function loadBlog($id)
    {
        $sql = "SELECT * FROM blog WHERE id = '$this->id'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            return $result;
            echo 'Blog loaded successfully';
        } else {
            echo 'Error: '.$sql.'<br>'.$conn->error;
        }
    }

    public function getId()
    {
        return $this->id;
    }

    public function getData()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'content' => $this->content,
            'author' => $this->author,
            'date' => $this->date,
        ];
    }

    public function updateData($title, $content, $author, $date)
    {
        if ($title != null) {
            $this->title = $title;
        }
        if ($content != null) {
            $this->content = $content;
        }
        if ($author != null) {
            $this->author = $author;
        }
        if ($date != null) {
            $this->date = $date;
        }
    }

    public function updateDataSQL()
    {
        $sql = "UPDATE blog SET title='$this->$title', content='$this->$content', author='$this->$author', date='$this->$date' WHERE id='$this->id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            echo 'Blog updated successfully';
        } else {
            echo 'Error: '.$sql.'<br>'.$conn->error;
        }
    }
}
