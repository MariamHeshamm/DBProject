window.repositoryObject = {"parameters":[{"name":"name","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{},"linked_terms":[]},{"name":"Desc","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{},"linked_terms":[]},{"name":"Location","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{},"linked_terms":[]},{"name":"Manager","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{},"linked_terms":[]},{"name":"Manger_HireDate","description":null,"mode":"IN","data_type":"int","custom_fields":{},"linked_terms":[]}],"parameters_custom_fields":[],"dependencies":{"uses":[],"used_by":[]},"object_id":"p313","name":"InstDept","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"OnlineExam@DESKTOP-KKGNO6I\\SQLEXPRESS","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"InstDept"},{"field":"Type","value":"Procedure"}],"script":"create proc InstDept @name varchar(50), @Desc varchar(50), @Location varchar(50),@Manager varchar(50),@Manger_HireDate int\r\nas\r\n\tinsert into Department (Dept_name,Dept_Desc,Dept_Loaction,Dept_Manager,manager_HireDate)\r\n\tvalues (@name,@Desc,@Location,@Manager,@Manger_HireDate)","imported_at":"2023-01-12 21:04"};