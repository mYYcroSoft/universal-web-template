<?php

class newBlog{
    protected $id;
    public function __construct($id, $title, $content, $author, $date){
        $this->id = $id;
        $this->title = $title;
        $this->content = $content;
        $this->author = $author;
        $this->date = $date;
    }
    public function getId(){
        return $this->id;
    }
    public function changeData($title, $content, $author, $date){
        $this->title = $title;
        $this->content = $content;
        $this->author = $author;
        $this->date = $date;
    }
    protected function createBlog(){
        $sql = "INSERT INTO blog (id, title, content, author, date) VALUES ('$this->id', '$this->title', '$this->content', '$this->author', '$this->date')";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            echo "Blog created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

}