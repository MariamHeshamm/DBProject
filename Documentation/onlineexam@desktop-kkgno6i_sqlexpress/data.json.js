window.repository = {"title": "OnlineExam@DESKTOP-KKGNO6I\SQLEXPRESS","license": "null","license_expires_at": "2023-01-24","exported_at": "2023-01-12 21:04","structure": [{"id": "d10","object_id": "d10","type": "documentation","name": "OnlineExam@DESKTOP-KKGNO6I\\SQLEXPRESS","subtype": null,"is_user_defined": false,"children": [{"id": "d10t","object_id": "d10t","type": "tables","name": "Tables","subtype": null,"is_user_defined": false,"children": [{"id": "t3750","object_id": "t3750","type": "table","name": "Course","subtype": "TABLE","is_user_defined": false,"columns": ["Crs_ID","Crs_Name","Crs_Duration"],},{"id": "t3751","object_id": "t3751","type": "table","name": "Department","subtype": "TABLE","is_user_defined": false,"columns": ["Dept_Id","Dept_name","Dept_Desc","Dept_Loaction","Dept_Manager","manager_HireDate"],},{"id": "t3752","object_id": "t3752","type": "table","name": "Exam","subtype": "TABLE","is_user_defined": false,"columns": ["Exam_id","Exam_name","Exam_date"],},{"id": "t3753","object_id": "t3753","type": "table","name": "Ins_crs","subtype": "TABLE","is_user_defined": false,"columns": ["Ins_id","Crs_id"],},{"id": "t3754","object_id": "t3754","type": "table","name": "Instructor","subtype": "TABLE","is_user_defined": false,"columns": ["Ins_id","Ins_F_name","Ins_L_name","Ins_Degree","salary","Dept_id"],},{"id": "t3755","object_id": "t3755","type": "table","name": "Qest_Exam","subtype": "TABLE","is_user_defined": false,"columns": ["Exam_id","Qest_id"],},{"id": "t3756","object_id": "t3756","type": "table","name": "Questions","subtype": "TABLE","is_user_defined": false,"columns": ["Quest_id","correct_ans","Crs_id","question_body","Quest_type"],},{"id": "t3757","object_id": "t3757","type": "table","name": "QuestMultiChoices","subtype": "TABLE","is_user_defined": false,"columns": ["Quest_id","ChoiceNum","ChoiceVal"],},{"id": "t3758","object_id": "t3758","type": "table","name": "Std_Ans","subtype": "TABLE","is_user_defined": false,"columns": ["Std_id","Exam_id","Quest_id","Std_Ans"],},{"id": "t3759","object_id": "t3759","type": "table","name": "std_crs","subtype": "TABLE","is_user_defined": false,"columns": ["Std_id","Crs_id","Grades"],},{"id": "t3760","object_id": "t3760","type": "table","name": "Student","subtype": "TABLE","is_user_defined": false,"columns": ["stdID","std_f_name","std_l_name","std_address","std_age","Dept_Id"],},{"id": "t3761","object_id": "t3761","type": "table","name": "Topic","subtype": "TABLE","is_user_defined": false,"columns": ["Topic_id","Topic_name","course_id"],},]},{"id": "d10p","object_id": "d10p","type": "procedures","name": "Procedures","subtype": null,"is_user_defined": false,"children": [{"id": "p306","object_id": "p306","type": "procedure","name": "calcGrade","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p307","object_id": "p307","type": "procedure","name": "ExamAnswers","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p308","object_id": "p308","type": "procedure","name": "ExamCorrection","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p309","object_id": "p309","type": "procedure","name": "GenerateExam","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p310","object_id": "p310","type": "procedure","name": "InsertStudAns","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p311","object_id": "p311","type": "procedure","name": "InstChoices","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p312","object_id": "p312","type": "procedure","name": "InstCourse","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p313","object_id": "p313","type": "procedure","name": "InstDept","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p314","object_id": "p314","type": "procedure","name": "InstExam","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p315","object_id": "p315","type": "procedure","name": "InstInsc","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p316","object_id": "p316","type": "procedure","name": "InstQuestion","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p317","object_id": "p317","type": "procedure","name": "InstStd","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p318","object_id": "p318","type": "procedure","name": "InstTopic","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p319","object_id": "p319","type": "procedure","name": "QuestionGenerator","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p320","object_id": "p320","type": "procedure","name": "REP1_StudentInformation","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p321","object_id": "p321","type": "procedure","name": "REP2_std_Grades","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p322","object_id": "p322","type": "procedure","name": "REP3_Instructor_Course","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p323","object_id": "p323","type": "procedure","name": "REP4_Course_Topic","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p324","object_id": "p324","type": "procedure","name": "REP5_ExamChoices","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p325","object_id": "p325","type": "procedure","name": "REP6_ExamStudAnswers","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p326","object_id": "p326","type": "procedure","name": "select_Course","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p327","object_id": "p327","type": "procedure","name": "select_Course_id","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p328","object_id": "p328","type": "procedure","name": "select_CourseTopics","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p329","object_id": "p329","type": "procedure","name": "select_department","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p330","object_id": "p330","type": "procedure","name": "select_department_id","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p331","object_id": "p331","type": "procedure","name": "select_exam","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p332","object_id": "p332","type": "procedure","name": "select_exam_id","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p333","object_id": "p333","type": "procedure","name": "select_Ins_crs","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p334","object_id": "p334","type": "procedure","name": "select_InstCourses","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p335","object_id": "p335","type": "procedure","name": "select_instructor","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p336","object_id": "p336","type": "procedure","name": "select_instructor_id","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p337","object_id": "p337","type": "procedure","name": "select_Qest_Exam","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p338","object_id": "p338","type": "procedure","name": "select_Questions","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p339","object_id": "p339","type": "procedure","name": "select_Questions_id","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p340","object_id": "p340","type": "procedure","name": "select_QuestMultiChoices","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p341","object_id": "p341","type": "procedure","name": "select_Std_Ans","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p342","object_id": "p342","type": "procedure","name": "select_std_crs","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p343","object_id": "p343","type": "procedure","name": "select_stdAns_corrrect","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p344","object_id": "p344","type": "procedure","name": "select_student","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p345","object_id": "p345","type": "procedure","name": "select_student_id","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p346","object_id": "p346","type": "procedure","name": "select_StudentDept","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p347","object_id": "p347","type": "procedure","name": "select_StudentGrades","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p348","object_id": "p348","type": "procedure","name": "select_Topic","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p349","object_id": "p349","type": "procedure","name": "select_Topic_id","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p350","object_id": "p350","type": "procedure","name": "updateCrs","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p351","object_id": "p351","type": "procedure","name": "updateGrade","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p352","object_id": "p352","type": "procedure","name": "updateStdAns","subtype": "PROCEDURE","is_user_defined": false,},{"id": "p353","object_id": "p353","type": "procedure","name": "updateTopic","subtype": "PROCEDURE","is_user_defined": false,},]},{"id": "d10f","object_id": "d10f","type": "functions","name": "Functions","subtype": null,"is_user_defined": false,"children": [{"id": "f305","object_id": "f305","type": "function","name": "Create_TrueAndFalse","subtype": "FUNCTION","is_user_defined": false,},]},]},],"objects": {"d10": { _ref: "data/d10.json.js" },"d10t": { _ref: "data/d10t.json.js" },"d10p": { _ref: "data/d10p.json.js" },"d10f": { _ref: "data/d10f.json.js" },"p330": { _ref: "data/p330.json.js" },"p338": { _ref: "data/p338.json.js" },"p314": { _ref: "data/p314.json.js" },"p322": { _ref: "data/p322.json.js" },"p331": { _ref: "data/p331.json.js" },"p346": { _ref: "data/p346.json.js" },"p339": { _ref: "data/p339.json.js" },"p306": { _ref: "data/p306.json.js" },"p332": { _ref: "data/p332.json.js" },"p340": { _ref: "data/p340.json.js" },"p323": { _ref: "data/p323.json.js" },"t3750": { _ref: "data/t3750.json.js" },"p347": { _ref: "data/p347.json.js" },"p333": { _ref: "data/p333.json.js" },"p341": { _ref: "data/p341.json.js" },"p348": { _ref: "data/p348.json.js" },"t3754": { _ref: "data/t3754.json.js" },"p324": { _ref: "data/p324.json.js" },"p315": { _ref: "data/p315.json.js" },"p342": { _ref: "data/p342.json.js" },"p349": { _ref: "data/p349.json.js" },"p307": { _ref: "data/p307.json.js" },"p334": { _ref: "data/p334.json.js" },"p343": { _ref: "data/p343.json.js" },"p335": { _ref: "data/p335.json.js" },"p325": { _ref: "data/p325.json.js" },"p344": { _ref: "data/p344.json.js" },"t3755": { _ref: "data/t3755.json.js" },"p336": { _ref: "data/p336.json.js" },"p316": { _ref: "data/p316.json.js" },"p350": { _ref: "data/p350.json.js" },"p326": { _ref: "data/p326.json.js" },"p308": { _ref: "data/p308.json.js" },"p345": { _ref: "data/p345.json.js" },"p337": { _ref: "data/p337.json.js" },"p327": { _ref: "data/p327.json.js" },"t3751": { _ref: "data/t3751.json.js" },"p309": { _ref: "data/p309.json.js" },"p351": { _ref: "data/p351.json.js" },"p328": { _ref: "data/p328.json.js" },"f305": { _ref: "data/f305.json.js" },"p353": { _ref: "data/p353.json.js" },"t3756": { _ref: "data/t3756.json.js" },"p329": { _ref: "data/p329.json.js" },"p317": { _ref: "data/p317.json.js" },"t3752": { _ref: "data/t3752.json.js" },"p310": { _ref: "data/p310.json.js" },"p321": { _ref: "data/p321.json.js" },"p352": { _ref: "data/p352.json.js" },"t3753": { _ref: "data/t3753.json.js" },"p318": { _ref: "data/p318.json.js" },"t3757": { _ref: "data/t3757.json.js" },"p313": { _ref: "data/p313.json.js" },"p311": { _ref: "data/p311.json.js" },"p319": { _ref: "data/p319.json.js" },"p312": { _ref: "data/p312.json.js" },"t3758": { _ref: "data/t3758.json.js" },"p320": { _ref: "data/p320.json.js" },"t3759": { _ref: "data/t3759.json.js" },"t3760": { _ref: "data/t3760.json.js" },"t3761": { _ref: "data/t3761.json.js" },}};