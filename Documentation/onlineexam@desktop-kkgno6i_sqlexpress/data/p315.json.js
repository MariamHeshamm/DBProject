window.repositoryObject = {"parameters":[{"name":"Fname","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{},"linked_terms":[]},{"name":"Lname","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{},"linked_terms":[]},{"name":"Degree","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{},"linked_terms":[]},{"name":"Salary","description":null,"mode":"IN","data_type":"float","custom_fields":{},"linked_terms":[]},{"name":"Dept_id","description":null,"mode":"IN","data_type":"int","custom_fields":{},"linked_terms":[]}],"parameters_custom_fields":[],"dependencies":{"uses":[],"used_by":[]},"object_id":"p315","name":"InstInsc","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"OnlineExam@DESKTOP-KKGNO6I\\SQLEXPRESS","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"InstInsc"},{"field":"Type","value":"Procedure"}],"script":"create proc InstInsc @Fname varchar(50), @Lname varchar(50), @Degree varchar(50),@Salary float,@Dept_id int\r\nas\r\n\tinsert into Instructor (Ins_F_name,Ins_L_name,Ins_Degree,salary,Dept_id)\r\n\tvalues (@Fname,@Lname,@Degree,@Salary,@Dept_id)","imported_at":"2023-01-12 21:04"};