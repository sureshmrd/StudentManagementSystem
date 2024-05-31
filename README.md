# STUDENT MANAGEMENT SYSTEM 

### Introduction
- This **Student Management System** is a web application developed using Django as Backend and React.js as Frontend.
- This project is about Managing the Profile of every student in the college of all branches and sections.
- This is kind of automation application for the counsellors,hods,principle and administrator of the college.

### Objective
- The main aim of this project/application is to provide the maitain the profile of every student automatically through results i.e without any registration from student side.
- The Administrator of the college just need to upload the result pdfs and counsellors data as pdf or csv file.
- The Application automatically extracts the students data and counsellors data from the documents and creates their profiles respectively.
- so that , the counsellors of the respective branches dont need to maintain a book of details of every student.
- And the hod of every branch can view the in detail analysis of thier branch students.

### WorkFlow 
- when the admin uploads the results pdf and counsellors data , the application automatically extracts the details from that and creates and maintains the profiles for the same.
- The student can enter his/her register id and can view their profile containing details of all the semesters results , cgpa , sgpa of every semesters , supply results and etc all at one place.
- And next , counsellor can login with his/her credentials (id and password) and list of their counselling students will appear and they can visit profile of any student of thier counselling.
- And next , Hod of each branch can login with branch name and can view list of counsellors of that branch , in detail analysis of the students of that branch.
- Finally , the principal of the college can login into any section and can view any details of the students & counsellors , branches and hods.
<img width="463" alt="image" src="https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/434044fd-7347-46c4-a7ef-0c4fe912a5d2">
- This is the sample Login page/Landing page of the application (with no styling though).
- This is the sample result landing page of the student.(again with no styling though).
<img width="946" alt="image" src="https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/8e76319c-01d1-4145-a7e6-5078f0091fe2">
- Here are the functionalites samples of the admin & counsellor: 
<img width="416" alt="image" src="https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/3c00a546-c8ce-437e-b997-4d2e5befe166">
<img width="278" alt="image" src="https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/40b9f901-f701-45e1-ac34-e09021061258">
<img width="419" alt="image" src="https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/c249a02a-a11f-4563-a74f-28e04ec50a75">
<img width="788" alt="image" src="https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/bde38726-ec00-480f-b961-a93bbfdbccfa">

### **Django Admin Panel view:**
<img width="947" alt="image" src="https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/5d945da2-2f58-424d-bf4d-429110e8a9df">

### **Project structure**
![Screenshot (354)](https://github.com/sureshmrd/StudentManagementSystem/assets/123853377/65d30093-b6ce-460b-8988-aace86f28520)


### Technologies Used
- **Frontend** : HTML,CSS,Javascript,React.js
- **Backend**  : Python & Django Framework
- **Others**   : Tabula for reading & converting pdf to csv , PyPdf2 , Pandas for storing csv data into dataframes , Smtplib for mailing services.







