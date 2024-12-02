### **Project Documentation: Task Manager Application**

---
Task Manager Application
├── Backend (TaskManagerApi)
│   ├── Controllers
│   │   ├── AuthController.cs         // Handles user authentication
│   │   ├── TasksController.cs        // Manages task operations
│   │   └── WeatherForecastController.cs // Example scaffolded controller
│   ├── Data
│   │   ├── ApplicationDbContext.cs   // Database context for EF Core
│   │   └── Migrations                // EF Core migration files
│   ├── Models
│   │   ├── User.cs                   // User entity
│   │   └── Task.cs                   // Task entity
│   ├── Services
│   │   └── TokenService.cs           // JWT token generation
│   ├── appsettings.json              // App configuration (DB, JWT, etc.)
│   ├── Program.cs                    // Main entry point
│  
│
├── Frontend (Angular)
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── login
│   │   │   │   │   ├── login.component.ts       // Login logic
│   │   │   │   │   ├── login.component.html     // Login UI
│   │   │   │   │   └── login.component.css      // Login styles
│   │   │   │   ├── register
│   │   │   │   │   ├── register.component.ts    // Registration logic
│   │   │   │   │   ├── register.component.html  // Registration UI
│   │   │   │   │   └── register.component.css   // Registration styles
│   │   │   │   ├── tasks
│   │   │   │   │   ├── tasks.component.ts       // Task logic
│   │   │   │   │   ├── tasks.component.html     // Task UI
│   │   │   │   │   └── tasks.component.css      // Task styles
│   │   │   ├── app-routing.module.ts            // Application routes
│   │   │   ├── app.module.ts                    // Main Angular module
│   │   │   └── app.component.ts                 // Root component logic
│   │   ├── assets                               // Static assets
│   │   ├── environments                         // Environment-specific settings
│   │   └── index.html                           // Main HTML file
│   ├── angular.json                             // Angular CLI configuration
│   ├── package.json                             // Node dependencies
│   └── tsconfig.json                            // TypeScript configuration
│
├── README.md                                   // Documentation and setup instructions
└── .gitignore                                  // Files to ignore in version control


### **Project Overview**

The **Task Manager Application** is a full-stack solution designed to enable users to manage their tasks efficiently. The application includes a secure **backend service** built using **.NET Core** and a responsive **frontend application** developed with **Angular**. The backend communicates with the frontend via **RESTful APIs**, ensuring seamless functionality for task and user management.

This project was developed as part of a **Software Development Internship Code Assessment** to demonstrate proficiency in software development fundamentals and best practices.

---

### **Application Features**

#### **1. User Management**
- **User Registration**: New users can register with a unique username, email, and password.
- **User Login**: Registered users can log in with their credentials.
- **User Logout**: Active sessions can be terminated securely.
- **Authentication**: Only logged-in users can access task management features.
- **Authorization**: Each user can only access their own tasks.

---

#### **2. Task Management**
- **Create Task**: Users can create new tasks with the following fields:
  - Title (Required)
  - Description (Optional)
  - Due Date (Required and must be in the future)
- **View Tasks**: Users can view a list of their tasks, sorted by due date.
- **Update Task**: Users can update the task details, including marking a task as complete or incomplete.
- **Delete Task**: Users can delete tasks they no longer need.
- **Validation**:
  - Task titles cannot be empty.
  - Due dates cannot be in the past.
- **Bonus Feature**:
  - Filter tasks by status (e.g., Completed, Incomplete).

---

### **Technical Implementation**

#### **Backend**
- **Framework**: .NET Core
- **Database**: SQL Server
- **APIs**:
  - Exposes secure RESTful endpoints for user and task management.
  - Uses JWT-based authentication for secure API access.
- **Key Components**:
  - **Authentication**:
    - User passwords are hashed using BCrypt for secure storage.
    - Tokens are issued using a custom `TokenService`.
  - **Task Management**:
    - Relational database design ensures user-task relationships are maintained.
    - Queries are optimized for performance with Entity Framework Core.
  - **Validation**:
    - Data annotations are used for field validation in API requests.

---

#### **Frontend**
- **Framework**: Angular
- **Styling**: Angular Material for a clean, responsive user interface.
- **Key Features**:
  - User-friendly forms for login, registration, and task creation.
  - Validation messages displayed inline for better user experience.
  - Responsive design for desktop and mobile compatibility.
- **Routing**:
  - Protected routes ensure only authenticated users can access task management features.
  - Redirection to login for unauthenticated users.
- **API Integration**:
  - Services in Angular handle communication with backend APIs using HttpClient.
  - JWT is stored in local storage for maintaining user sessions.

---

### **Project Architecture**

#### **Backend**
- **Controllers**:
  - **AuthController**: Manages user authentication (registration and login).
  - **TasksController**: Handles CRUD operations for tasks, with authorization checks.
  - **WeatherForecastController**: Provides example data (scaffolded during project creation).
- **Services**:
  - **TokenService**: Handles JWT generation for user authentication.
- **Database**:
  - **Entities**:
    - `User`: Represents application users.
    - `Task`: Represents tasks belonging to users.

#### **Frontend**
- **Components**:
  - **LoginComponent**: Manages user login.
  - **RegisterComponent**: Handles user registration.
  - **TasksComponent**: Displays task list and provides options to create, update, or delete tasks.
- **Services**:
  - **ApiService**: Handles API requests for user and task management.
  - **AuthGuard**: Protects routes from unauthenticated access.
- **Routing**:
  - Routes are defined for login, registration, and task management, with guards for secured routes.

---

### **Setup Instructions**

#### **Backend**
1. Install the required tools:
   - .NET SDK
   - SQL Server
2. Clone the repository and navigate to the backend folder.
3. Update the `appsettings.json` file with your SQL Server connection string and JWT settings.
4. Run the migrations to set up the database:
   ```bash
   dotnet ef database update
   ```
5. Start the backend server:
   ```bash
   dotnet run
   ```
6. Access the Swagger UI at `https://localhost:<port>/swagger`.

#### **Frontend**
1. Install Node.js and Angular CLI.
2. Navigate to the frontend folder and install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```
4. Open the application in your browser at `http://localhost:4200`.

---

### **API Endpoints**

#### **AuthController**
- `POST /api/auth/register`: Registers a new user.
- `POST /api/auth/login`: Logs in an existing user and returns a JWT.

#### **TasksController**
- `GET /api/tasks`: Retrieves all tasks for the authenticated user.
- `POST /api/tasks`: Creates a new task.
- `PUT /api/tasks/{id}`: Updates an existing task.
- `DELETE /api/tasks/{id}`: Deletes a task.

---

### **Testing**

#### **Backend Tests**
- Unit tests are written using xUnit for critical services such as `TokenService`.

#### **Frontend Tests**
- Angular unit tests verify the behavior of components and services.

---

### **Challenges Addressed**
1. Ensuring secure communication between the frontend and backend via JWT.
2. Validating user inputs for task creation and updates.
3. Protecting user-specific data with proper authentication and authorization mechanisms.

---

### **Conclusion**

The **Task Manager Application** demonstrates the implementation of a full-stack solution with a secure backend and a responsive frontend. It meets the specified requirements and showcases clean code, modularity, and best practices in software development. This project is ready for further enhancements and deployment to production.
