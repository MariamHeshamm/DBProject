window.repositoryObject = {"parameters":[{"name":"deptId","description":null,"mode":"IN","data_type":"int","custom_fields":{},"linked_terms":[]}],"parameters_custom_fields":[],"dependencies":{"uses":[],"used_by":[]},"object_id":"p320","name":"REP1_StudentInformation","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"OnlineExam@DESKTOP-KKGNO6I\\SQLEXPRESS","id":"d10"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"REP1_StudentInformation"},{"field":"Type","value":"Procedure"}],"script":"create   proc REP1_StudentInformation @deptId int\r\nas\r\n\texec select_StudentDept @deptId","imported_at":"2023-01-12 21:04"};