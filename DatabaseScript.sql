USE master;
GO

ALTER DATABASE StudentDB SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
DROP DATABASE StudentDB;
GO

CREATE DATABASE StudentDB;
GO

USE StudentDB;
GO

CREATE TABLE Students (
    StudentId INT IDENTITY(1,1) PRIMARY KEY,      
    FirstName NVARCHAR(100) NULL,                 
    LastName NVARCHAR(100) NULL,                  
    Email NVARCHAR(150) NULL,                    
    MobileNumber NVARCHAR(15) NOT NULL UNIQUE,    
    Gender NVARCHAR(10) NULL,                     
    Standard INT NULL,                           
    Rank INT NULL,                                
    DateOfBirth DATETIME NULL,                    
    CreateDate DATETIME NULL,                    
    IsDeleted BIT NOT NULL DEFAULT 0,           
    IsActive BIT NOT NULL DEFAULT 1               
);
GO

CREATE TABLE StudentMarkList (
    StudentId INT IDENTITY(1,1) PRIMARY KEY,
    Tamil INT NULL,
    English INT NULL,
    Maths INT NULL,
    Science INT NULL,
    ComputerScience INT NULL
);
GO





