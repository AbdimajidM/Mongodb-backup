# REST API
* Backend default port: 4000
* Base address: http://<HOST_NAME>:4000/api/v1/
* Route Categories:
    * /students - Student Management related routes
        * / - Get All Studnets **GET**
        * / - Craete Student **POST**
        * /:id - Get Studnet **GET**
        * /:id - Update Studnet **PATCH**
        * /:id - Delete Studnet **DELETE**
        * /trash/:id - Trash Student  **POST**
        * /:studentId/:classId - Assign Student to class **POST**
    * /teachers - Teacher Management related routes
        * / - Get All Teachers **GET**
        * / - Craete Teacher **POST**
        * /:id - Get Teacher **GET**
        * /:id - Update Teacher **PATCH**
        * /:id - Delete Teacher **DELETE**
        * /trash/:id - Trash Teacher  **POST**
        * /removeTeacherFromClasses/:id - remove Teacher From Classes **POST**
        * /:id - Assign Teacher to Classes **POST**
    * /clsses - Classs Management related routes
        * / - Get All Classes **GET**
        * / - Craete Class **POST**
        * /:id - Get Class **GET**
        * /:id - Update Class **PATCH**
        * /:id - Delete Class **DELETE**
    * /courses - Course Management related routes
        * / - Get All Courses **GET**
        * / - Craete Course **POST**
        * /:id - Get Course **GET**
        * /:id - Update Course **PATCH**
        * /:id - Delete Course **DELETE**
        * /:courseId/:stageId - Assign course to Stage **POST**
    * /stages - Stage Management related routes
        * / - Get All Stages **GET**
        * / - Craete Stage **POST**
        * /:id - Get Stage **GET**
        * /:id - Update Stage **PATCH**
        * /:id - Delete Stage **DELETE**
    * /charges Schedule - Charges Schedule Management related routes
        * / - Get All Charges **GET**
        * / - Craete Charge **POST**
        * /:id - Get Charge **GET**
        * /:id - Update Charge **PATCH**
        * /:id - Delete Charge **DELETE**
    * /transactions - Transaction Management related routes
        * / - Get All Transactions **GET**
        * / - Craete Transaction **POST**
        * /:id - Get Transaction **GET**
        * /:id - Update Transaction **PATCH**
        * /:id - Delete Transaction **DELETE**
        * /studentTransactions/:id - Get Student Transactions **GET**
        * /studentTransactions/:id - Get Student Transactions **GET**
        * /studentTransactions/:id/:startDate/:endDate - Get Student Transactions By Date **GET**
        * /studentPaymentTransactions/:id - Get Student Payment Transactions **GET**
        * /studentChargeTransactions/:id - Get Student Charge Transactions **GET**
        * /getTransaction/:transactionNumber - Get Transaction By Transaction Number **GET**
    * /invoices - Invoice Management related routes
        * / - Get All Invoices **GET**
        * / - Craete Invoice **POST**
        * /:id - Get Invoice **GET**
        * /:id - Update Invoice **PATCH**
        * /:id - Delete Invoice **DELETE**