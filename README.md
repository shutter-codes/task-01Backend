# task-01Backend


# API Documentation for About Section

This API documentation outlines the endpoints and operations available for managing the About section content.

## About Section

### 1. Create About Content

- **Endpoint:** `POST /about`
- **Description:** Creates a new About section content.
- **Request Body:**
  - `content` (string, required): The content of the About section.
- **Response:**
  - Status: 201 Created
  - Body: JSON object representing the created About content.

### 2. Read About Content

- **Endpoint:** `GET /about`
- **Description:** Retrieves the content of the About section.
- **Response:**
  - Status: 200 OK
  - Body: JSON object containing the About section content.
- **Error Responses:**
  - Status: 404 Not Found
    - Body: `{ "error": "Not found" }`
  - Status: 500 Internal Server Error
    - Body: `{ "error": "Internal Server Error" }`

### 3. Update About Content

- **Endpoint:** `PUT /about/:id`
- **Description:** Updates the content of the About section by providing the `id` parameter.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the About content to be updated.
- **Request Body:**
  - `content` (string, required): The updated content of the About section.
- **Response:**
  - Status: 200 OK
  - Body: JSON object representing the updated About content.
- **Error Responses:**
  - Status: 400 Bad Request
    - Body: `{ "error": "Content is required for update" }`
  - Status: 404 Not Found
    - Body: `{ "error": "About not found" }`
  - Status: 500 Internal Server Error
    - Body: `{ "error": "Internal Server Error" }`

### 4. Delete About Content

- **Endpoint:** `DELETE /about/:id`
- **Description:** Deletes the About content identified by the provided `id`.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the About content to be deleted.
- **Response:**
  - Status: 204 No Content
    - Body: No content in the response body.
- **Error Responses:**
  - Status: 404 Not Found
    - Body: `{ "error": "About not found" }`
  - Status: 500 Internal Server Error
    - Body: `{ "error": "Internal Server Error" }`

## Error Responses

- **Status: 404 Not Found**
  - Body: `{ "error": "Not found" }`
- **Status: 500 Internal Server Error**
  - Body: `{ "error": "Internal Server Error" }`

## Notes

- Ensure that the request and response bodies are in JSON format.
- Handle errors appropriately based on the provided error responses.
- Use the appropriate HTTP methods for each operation (POST, GET, PUT, DELETE).

- -----------------------------------------------------------------------------------

# API Documentation for Partner Management

This API documentation outlines the endpoints and operations available for managing partner information.

## Partners

### 1. Add a New Partner

- **Endpoint:** `POST /partners`
- **Description:** Creates a new partner entry.
- **Request Body:**
  - `partnerName` (string, required): Name of the partner.
  - `desc` (string, required): Description of the partner.
  - `experience` (string, required): Experience or background information about the partner.
- **Response:**
  - Status: 201 Created
  - Body: JSON object representing the newly created partner.

### 2. Get All Partners

- **Endpoint:** `GET /partners`
- **Description:** Retrieves information about all partners.
- **Response:**
  - Status: 200 OK
  - Body: JSON object containing an array of partners.
- **Error Responses:**
  - Status: 404 Not Found
    - Body: `{ "error": "Not found" }`
  - Status: 500 Internal Server Error
    - Body: `{ "error": "Internal Server Error" }`

### 3. Update Partner Information

- **Endpoint:** `PUT /partners/:id`
- **Description:** Updates information for a specific partner identified by the provided `id`.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the partner to be updated.
- **Request Body:**
  - `partnerName` (string, required): Updated name of the partner.
  - `desc` (string, required): Updated description of the partner.
  - `experience` (string, required): Updated experience or background information about the partner.
- **Response:**
  - Status: 200 OK
  - Body: JSON object representing the updated partner information.
- **Error Responses:**
  - Status: 400 Bad Request
    - Body: `{ "error": "Field is required for update" }`
  - Status: 404 Not Found
    - Body: `{ "error": "Partner not found" }`
  - Status: 500 Internal Server Error
    - Body: `{ "error": "Internal Server Error" }`

### 4. Delete Partner

- **Endpoint:** `DELETE /partners/:id`
- **Description:** Deletes information about a specific partner identified by the provided `id`.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the partner to be deleted.
- **Response:**
  - Status: 204 No Content
    - Body: No content in the response body.
- **Error Responses:**
  - Status: 404 Not Found
    - Body: `{ "error": "Partner not found" }`
  - Status: 500 Internal Server Error
    - Body: `{ "error": "Internal Server Error" }`

## Error Responses

- **Status: 404 Not Found**
  - Body: `{ "error": "Not found" }`
- **Status: 500 Internal Server Error**
  - Body: `{ "error": "Internal Server Error" }`
 
  - ---------------------------------------------------------------------------
  # API Documentation for User Authentication

This API documentation outlines the endpoints and operations available for user registration, login, and logout.

## User Authentication

### 1. Register a New User

- **Endpoint:** `POST /auth/register`
- **Description:** Registers a new user.
- **Request Body:**
  - `username` (string, required): Username of the user.
  - `email` (string, required): Email address of the user.
  - `password` (string, required): Password for the user.
  - `role` (string, optional): Role of the user (e.g., "admin" or "user").
- **Response:**
  - Status: 201 Created
  - Body: `{ "message": "User registered successfully." }`
- **Error Responses:**
  - Status: 400 Bad Request
    - Body: `{ "message": "User with this username or email already exists." }`
  - Status: 500 Internal Server Error
    - Body: `{ "message": "Internal Server Error" }`

### 2. Login a User

- **Endpoint:** `POST /auth/login`
- **Description:** Logs in a user and provides a JWT token.
- **Request Body:**
  - `username` (string, required): Username of the user.
  - `password` (string, required): Password for the user.
- **Response:**
  - Status: 200 OK
  - Body: JSON object containing JWT token and user information.
- **Error Responses:**
  - Status: 404 Not Found
    - Body: `{ "message": "User not found." }`
  - Status: 401 Unauthorized
    - Body: `{ "message": "Invalid password." }`
  - Status: 500 Internal Server Error
    - Body: `{ "message": "Internal Server Error" }`
- **Note:**
  - The token should be included in the Authorization header for authenticated requests.

### 3. Logout a User

- **Endpoint:** `POST /auth/logout`
- **Description:** Logs out a user and adds the token to the blacklist.
- **Request Headers:**
  - `Authorization` (string, required): JWT token obtained during login.
- **Response:**
  - Status: 200 OK
  - Body: `{ "message": "Logout successful" }`
- **Error Responses:**
  - Status: 401 Unauthorized
    - Body: `{ "message": "Unauthorized" }`
- **Note:**
  - After logout, the token should no longer be used for authentication.

## Error Responses

- **Status: 400 Bad Request**
  - Body: `{ "message": "User with this username or email already exists." }`
- **Status: 401 Unauthorized**
  - Body: `{ "message": "Invalid password." }` or `{ "message": "Unauthorized" }`
- **Status: 404 Not Found**
  - Body: `{ "message": "User not found." }`
- **Status: 500 Internal Server Error**
  - Body: `{ "message": "Internal Server Error" }`

