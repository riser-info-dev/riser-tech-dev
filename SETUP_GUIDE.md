# Student Registration System - Complete Setup Guide

This guide will help you set up and run the complete Student Registration system with ASP.NET Core Web API (Dapper) and Angular frontend.

## Project Structure

```
riser-tech/
├── StudentAPI/              # ASP.NET Core Web API Backend
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   ├── Repositories/
│   └── Program.cs
├── StudentApp/              # Angular Frontend
│   └── src/
│       └── app/
│           ├── components/
│           ├── models/
│           └── services/
└── DatabaseScript.sql       # Database creation script
```

## Prerequisites

### For Backend (ASP.NET Core)
- .NET 8.0 SDK or later ([Download](https://dotnet.microsoft.com/download))
- SQL Server (LocalDB, Express, or Full version)
- Visual Studio 2022, VS Code, or any IDE with C# support

### For Frontend (Angular)
- Node.js v18 or higher ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Angular CLI 18+ (will be installed with npm)

## Step 1: Database Setup

1. Open SQL Server Management Studio (SSMS) or use `sqlcmd`

2. Run the `DatabaseScript.sql` file to create the database:
   ```sql
   -- The script will:
   -- 1. Drop existing StudentDB if it exists
   -- 2. Create new StudentDB database
   -- 3. Create Students table
   -- 4. Create StudentMarkList table
   ```

3. Verify the database was created:
   ```sql
   USE StudentDB;
   SELECT * FROM Students;
   ```

## Step 2: Backend API Setup

1. Navigate to the StudentAPI directory:
   ```bash
   cd StudentAPI
   ```

2. Update the connection string in `appsettings.json`:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=StudentDB;Integrated Security=true;TrustServerCertificate=true;"
     }
   }
   ```
   
   **For SQL Server Authentication:**
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=StudentDB;User Id=your_username;Password=your_password;TrustServerCertificate=true;"
     }
   }
   ```

3. Restore NuGet packages:
   ```bash
   dotnet restore
   ```

4. Run the API:
   ```bash
   dotnet run
   ```

5. The API will start on:
   - HTTP: `http://localhost:5000`
   - HTTPS: `https://localhost:5001`
   - Swagger UI: `http://localhost:5000/swagger`

## Step 3: Frontend Setup

1. Navigate to the StudentApp directory:
   ```bash
   cd StudentApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. If Angular CLI is not installed globally, install it:
   ```bash
   npm install -g @angular/cli@18
   ```

4. Start the Angular development server:
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Step 4: Verify the Setup

1. **Backend Test:**
   - Open Swagger UI at `http://localhost:5000/swagger`
   - Try the `POST /api/students/register` endpoint with sample data

2. **Frontend Test:**
   - Open `http://localhost:4200`
   - Fill out the registration form
   - Submit and verify the student is registered

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/students/register` | Register a new student |
| GET | `/api/students/{id}` | Get student by ID |
| GET | `/api/students` | Get all students |
| PUT | `/api/students/{id}` | Update student |
| DELETE | `/api/students/{id}` | Delete student (soft delete) |

## Sample Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "mobileNumber": "1234567890",
  "gender": "Male",
  "standard": 10,
  "rank": 5,
  "dateOfBirth": "2008-05-15"
}
```

## Troubleshooting

### Backend Issues

1. **Connection String Error:**
   - Verify SQL Server is running
   - Check database name matches
   - Verify authentication method (Windows/SQL Server)

2. **Port Already in Use:**
   - Change port in `Properties/launchSettings.json`
   - Or stop the process using the port

### Frontend Issues

1. **CORS Error:**
   - Ensure backend is running
   - Check CORS configuration in `Program.cs`
   - Verify API URL in `student.service.ts`

2. **Module Not Found:**
   - Run `npm install` again
   - Delete `node_modules` and `package-lock.json`, then reinstall

3. **Angular CLI Not Found:**
   - Install globally: `npm install -g @angular/cli@18`
   - Or use `npx ng serve`

## Development Tips

1. **Hot Reload:**
   - Both Angular and .NET support hot reload
   - Changes will automatically refresh

2. **API Testing:**
   - Use Swagger UI for quick API testing
   - Use Postman for more advanced testing

3. **Database Changes:**
   - Update the SQL script if schema changes
   - Re-run the script to reset database

## Production Deployment

### Backend
- Publish: `dotnet publish -c Release`
- Deploy to IIS, Azure, or any .NET hosting

### Frontend
- Build: `ng build --configuration production`
- Deploy `dist/student-app` folder to any static hosting

## Support

For issues or questions, refer to:
- `StudentAPI/README.md` - Backend documentation
- `StudentApp/README.md` - Frontend documentation



