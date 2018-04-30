CREATE DATABASE reading_list_db;

USE reading_list_db;

CREATE TABLE books (
	id INT(10) UNSIGNED PRIMARY KEY auto_increment,
    book_name VARCHAR(255),
    read_status BOOLEAN
);