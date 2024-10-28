# To-Do-App

Welcome to Project Name, a modern web application crafted with a robust backend using Node.js and Express, dynamic frontend built with React.js, and a MySQL database for persistent data storage. This project aims to deliver a seamless and efficient user experience by leveraging the power of these popular technologies.

## Features
- **Node.js & Express**: Reliable backend server for handling API requests and managing data.
- **React.js**: Interactive and responsive user interfaces with real-time updates.
- **RESTful APIs**: Smooth communication between client and server.
- **MySQL Database**: Efficient and secure data storage and retrieval.

## Table Modal
- CREATE TABLE `todo.items` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `completed` tinyint NOT NULL DEFAULT '0',
  `completed_on` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) 

# APIs
- **Get Todos**
  METHOD : GET 
  URL : {BASE_URL}/todo
  RESPONSE : {
    "code": "0",
    "message": "SUCCESS",
    "data": [
        {
            "id": 32,
            "name": "pending 1",
            "description": "pending description",
            "start_date": "2024-10-28T06:02:17.000Z",
            "end_date": "2024-10-24T18:15:00.000Z",
            "completed": 0,
            "completed_on": null
        }
    ],
    "errors": []
}

- **Add Todos**
  METHOD : POST
  URL : {BASE_URL}/todo
  REQUEST PAYLOAD : {
    "name":"test",
    "description":"test",
    "dueDate":"2024-01-01"
  }
  RESPONSE : {
    "code": "0",
    "message": "SUCCESS",
    "errors": []
  }
  ERROR RESPONSE : {
    "code": "-1",
    "message": "Error while adding items!",
    "data": null,
    "errors": [
        "Name is required!"
    ]
}

- **Update Todos**
  METHOD : PUT
  URL : {BASE_URL}/todo/:id
  REQUEST PAYLOAD : {
    "name":"test",
    "description":"test"
  }
  RESPONSE : {
    "code": "0",
    "message": "SUCCESS",
    "errors": []
  }
  ERROR RESPONSE : {
    "code": "-1",
    "message": "Error while adding items!",
    "data": null,
    "errors": [
        "Description is required!"
      ]
    }

- **Delete Todos**
  METHOD : DELETE
  URL : {BASE_URL}/todo/:id
  REQUEST PAYLOAD : none
  RESPONSE : {
    "code": "0",
    "message": "SUCCESS",
    "errors": []
  }

- **Complete Todos**
  METHOD : PUT
  URL : {BASE_URL}/todo/:id/complete
  REQUEST PAYLOAD : none
  RESPONSE : {
    "code": "0",
    "message": "SUCCESS",
    "errors": []
  }

- **Get Completed Todos**
  METHOD : GET 
  URL : {BASE_URL}/todo/completed
  RESPONSE : {
    "code": "0",
    "message": "SUCCESS",
    "data": [
        {
            "id": 32,
            "name": "pending 1",
            "description": "pending description",
            "start_date": "2024-10-28T06:02:17.000Z",
            "end_date": "2024-10-24T18:15:00.000Z",
            "completed": 0,
            "completed_on": null
        }
    ],
    "errors": []
  }

- **Get Upcoming Todos**
  METHOD : GET 
  URL : {BASE_URL}/todo/upcoming
  RESPONSE : {
    "code": "0",
    "message": "SUCCESS",
    "data": [
        {
            "id": 32,
            "name": "pending 1",
            "description": "pending description",
            "start_date": "2024-10-28T06:02:17.000Z",
            "end_date": "2024-10-24T18:15:00.000Z",
            "completed": 0,
            "completed_on": null
        }
    ]
    "errors": []
  }
