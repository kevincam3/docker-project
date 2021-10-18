Script to add all the files necessary to a project folder to spin up a web development environment that uses docker
containers.

1. At the commandline type: docker-project
2. Then type: docker-compose up

Here's what you get.

1. A Webserver running apache and PHP. Type http://localhost to visit it.
2. A database server running MySQL. user: root, pass: root
3. A SMTP mail server to test sending and receiving email using Mailcatcher.
    1. Type http://localhost:1025 to access the web based email client. host: smtp, port: 1025, security none, SMTP
       Authentication: No
4. A web interface to manage the database using phpMyAdmin. http://localhost:8081, username: root, password: root
