# AREP-Lab5
# Workshop on modularization with virtualization and Introduction to Docker

## Project Summary

The Property Management System is a web-based application designed to facilitate the management of real estate properties. The system allows users to create, read, update, and delete (CRUD) property listings, providing an intuitive interface for property owners and buyers.

## Getting Started

These instructions will guide you through obtaining a copy of the project running on your local machine for development and testing purposes
### Prerequisites

To run this project, you must have Java installed on your system. Follow the steps below to install Java and Maven (which is used for managing dependencies).
1. **Install Java:**

    Download and install the Java JDK (version 11 or higher). You can follow the instructions on the [official Java website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).

2. **Install Maven:**

   - Maven is used to manage project dependencies. You can download and install Maven from [here](https://maven.apache.org/download.cgi).

   - After installation, verify if Maven is correctly installed by running: mvn -v. This should show the installed Maven version.
3. **Install Docker**  
### Installing
> [!NOTE]
> You should perform the following steps from a Bash terminal or PowerShell on Windows. 

> [!IMPORTANT]
> Previously start DockerDesktop

To set up your development environment:
1. **Clone the repository:**
```bash
git clone https://github.com/CristianAlvarez-b/AREP-Lab5
```
2. **Navigate to the project directory:**
```bash
cd AREP-Lab5
```
3. **Create the docker instance for the database:**
```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=mydb -p 3307:3306 -d mysql:latest
```
4. **Build the project with Maven:**
```bash
mvn clean install
```
  This will compile the code and package it into an executable JAR file.
5. **Run the app:**
```bash
java -cp "target/classes;target/dependency/*" co.edu.escuelaing.arep.patrones.PatronesApplication
```

The application in this case will run on port 8080.
```bash
http://localhost:8080
```
## Project Structure
```Bash
AREP-Lab5/
│── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── co/edu/escuelaing/arep/patrones/
│   │   │   │   ├── controller/
│   │   │   │   │   ├──ProperyController.java
│   │   │   │   ├── model/
│   │   │   │   │   ├──Property.java
│   │   │   │   ├── repository/
│   │   │   │   │   ├──PropertyRepository.java
│   │   │   │   ├── service/
│   │   │   │   │   ├──PropertyService.java
│   │   │   │   ├── PatronesApplication.java 
│   ├── resources/
│   │   ├── webroot/public/
│   │   │   │── css/
│   │   │   │── js/
│   │   │   ├── index.html
│── pom.xml
│── README.md
│── Dockerfile
```
## System Architecture
The system is structured as a three-tier architecture consisting of:
- *Frontend*: Developed using HTML, CSS, JavaScript, and Bootstrap. It communicates with the backend through RESTful API requests.
- *Backend*: Built with Java Spring Boot, handling business logic, authentication, and API endpoints.
- *Database*: Uses MySQL to store property information, user details, and other relevant data. The backend connects to the database via JPA/Hibernate.

### Interaction Flow:

1. The frontend sends requests to the backend via REST API.

2. The backend processes the request, interacts with the database, and returns the response.

3. The frontend dynamically updates the UI based on the received data.

## Class Design

The main components of the backend include:

- Property: Represents a real estate property with attributes like id, address, price, and size.
- PropertyService: Contains business logic for managing properties.
- PropertyController: Handles HTTP requests and responses for property management.
- Repository Layer: Interfaces with the database using JPA repositories.

### Class Diagram:

![image](https://github.com/user-attachments/assets/753d21cc-b563-48b9-ab05-65902b4b9bd0)

## Deployment Instructions
### Deployment Mysql Database

1. Access the virtual machine:
  
![image](https://github.com/user-attachments/assets/9df87e0b-e6f5-4814-9db0-5ea29171f15a)

2. Install Docker

![image](https://github.com/user-attachments/assets/8a21c14d-5784-4293-9946-2627e603b018)

3. Start the docker service

![image](https://github.com/user-attachments/assets/7d754faa-b814-47e6-aa7d-16b5f2f5ea29)

4. Create the docker container

![image](https://github.com/user-attachments/assets/a73f9eaa-170d-4ac7-8dba-346b75ab9a91)

5. Open the port

![image](https://github.com/user-attachments/assets/da227dc9-aad3-4c32-82b6-2aa18b070f4a)


### Deployment App

1. Access the virtual machine:
  
![image](https://github.com/user-attachments/assets/7df777ba-55a5-44bd-82ad-867e60a89613)

2. Install Docker
3. Start the docker service
4. From the image created in Dockerhub create an instance of a docker container independent of the console (“-d” option) and with port 8080 bound to a physical port on your machine (-p option):

![image](https://github.com/user-attachments/assets/c77a2a8d-5505-4dd9-9754-c0befc472744)

5. Open the port

![image](https://github.com/user-attachments/assets/224d40f7-e5af-4f37-b174-b6a5d5bc7b2a)

6. Test the url
   
![image](https://github.com/user-attachments/assets/f531c1bd-9ef2-4279-84a8-7307a924e769)
   
## Test
### Unit Test

Run unit tests: To run the automated tests, use the following Maven command:
   ```bash
   mvn test
   ```

![image](https://github.com/user-attachments/assets/50c67dc6-e9ba-41f4-aeb5-ae7a07d7e92b)


### Funcional Test

The following video shows the aws deployment:


https://github.com/user-attachments/assets/787e9c64-4969-4aa8-bf99-234fb0b80728



### Built with
- Java: The programming language used
- Maven: Dependency management and build tool
- JUnit: Testing framework
- Mockito: Mocking framework for unit testing
- Docker: Container

### Author
- Cristian Javier Alvarez Baquero
  
### License
This project is licensed under the MIT license: see the LICENSE.md file for details.

### Explanation of Sections:
- **Getting Started**: Instructions for setting up the development environment.
- **Prerequisites**: What tools you need and how to install them (Java and Maven).
- **Installing**: How to clone the repository, build, and run the project.
- **Running the Tests**: How to run the tests and what types of tests are included (unit and functional).
- **Built with**: Tools and libraries used in the project.
- **License**: License type (MIT) and link to the license file.


This project is licensed under the MIT license: see the LICENSE.md file for details.


