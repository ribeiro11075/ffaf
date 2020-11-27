\c test;



CREATE TABLE IF NOT EXISTS employee (
  employeeID VARCHAR(30),
  active BOOLEAN,
  PRIMARY KEY (employeeID)
);


CREATE TABLE IF NOT EXISTS employeeAlert (
  employeeID VARCHAR(30) NOT NULL,
  employeeAlertID VARCHAR(100) NOT NULL,
  active BOOLEAN NOT NULL,
  description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (employeeID, employeeAlertID)
);


CREATE TABLE IF NOT EXISTS settingOption (
  settingOptionID VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (settingOptionID)
);


CREATE TABLE IF NOT EXISTS settingOptionValue (
  settingOptionID VARCHAR(30) NOT NULL,
  settingOptionValue VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (settingOptionID, settingOptionValue),
  FOREIGN KEY (settingOptionID) REFERENCES settingOption (settingOptionID)
);


CREATE TABLE IF NOT EXISTS employeeSetting (
  employeeID VARCHAR(30) NOT NULL,
  settingOptionID VARCHAR(30) NOT NULL,
  settingOptionValue VARCHAR(30) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (employeeID, settingOptionID),
  FOREIGN KEY (settingOptionID, settingOptionValue) REFERENCES settingOptionValue (settingOptionID, settingOptionValue)
);


CREATE TABLE IF NOT EXISTS employeeManager_stg (
  employeeID VARCHAR(40) NOT NULL,
	managerID VARCHAR(40) NOT NULL,
  managerType VARCHAR(5) NOT NULL,
  PRIMARY KEY (employeeID, managerID, managerType)
);


CREATE TABLE IF NOT EXISTS employeeManager (
  employeeID VARCHAR(40) NOT NULL,
	managerID VARCHAR(40) NOT NULL,
  managerType VARCHAR(5) NOT NULL,
  PRIMARY KEY (employeeID, managerID, managerType)
);


CREATE TABLE IF NOT EXISTS employeeProfile_stg (
  employeeID VARCHAR(40) NOT NULL,
  firstName VARCHAR(40) DEFAULT NULL,
  lastName VARCHAR(40) DEFAULT NULL,
  identification INT DEFAULT NULL,
  universalIdentification INT DEFAULT NULL,
  fileNumber INT DEFAULT NULL,
  raCode INT DEFAULT NULL,
  ratingOfficialName VARCHAR(80) DEFAULT NULL,
  location VARCHAR(40) DEFAULT NULL,
  costCode INT DEFAULT NULL,
  departmentSquad VARCHAR(60) DEFAULT NULL,
	building VARCHAR(100) DEFAULT NULL,
	room VARCHAR(40) DEFAULT NULL,
	workPhone VARCHAR(30) DEFAULT NULL,
	mailingAddress VARCHAR(120) DEFAULT NULL,
	homeAddress VARCHAR(120) DEFAULT NULL,
	emailAddress VARCHAR(60) DEFAULT NULL,
	homePhone VARCHAR(30) DEFAULT NULL,
	mobilePhone VARCHAR(30) DEFAULT NULL,
  emergencyPrimary VARCHAR(40) DEFAULT NULL,
	emergencyContact VARCHAR(40) DEFAULT NULL,
	disability VARCHAR(100) DEFAULT NULL,
	ethnicityRace VARCHAR(100) DEFAULT NULL,
	nationalOrigin VARCHAR(100) DEFAULT NULL,
	gender VARCHAR(20) DEFAULT NULL,
	transgender VARCHAR(20) DEFAULT NULL,
	sexualOrientation VARCHAR(30) DEFAULT NULL,
	healthInsuranceType VARCHAR(40) DEFAULT NULL,
	healthInsurance VARCHAR(40) DEFAULT NULL,
	lifeInsurance VARCHAR(60) DEFAULT NULL,
	retirementType VARCHAR(40) DEFAULT NULL,
	tspPercent VARCHAR(10) DEFAULT NULL,
	tspAmount VARCHAR(10) DEFAULT NULL,
	rothPercent VARCHAR(5) DEFAULT NULL,
	rothAmount VARCHAR(10) DEFAULT NULL,
	retirementEligibilityDate DATE DEFAULT NULL,
	retirementManadatoryDate DATE DEFAULT NULL,
	positionType VARCHAR(30) DEFAULT NULL,
  positionTypeDescription VARCHAR(60) NOT NULL,
	positionAssigned VARCHAR(20) DEFAULT NULL,
	positionGrade VARCHAR(10) DEFAULT NULL,
	positionStep VARCHAR(5) DEFAULT NULL,
	positionAdjustedSalary VARCHAR(30) DEFAULT NULL,
	positionWgiDate DATE DEFAULT NULL,
	parRatingLast VARCHAR(40) DEFAULT NULL,
	parIssuedDate DATE DEFAULT NULL,
	leaveAnnual VARCHAR(30) DEFAULT NULL,
	leaveSick VARCHAR(30) DEFAULT NULL,
	leaveCompensation VARCHAR(30) DEFAULT NULL,
	scdRetirementDate DATE DEFAULT NULL,
  eodAdjustedDate DATE DEFAULT NULL,
	eodPersonalAdjustedAgentDate DATE DEFAULT NULL,
	eodPersonalAdjustedDate DATE DEFAULT NULL,
	eodPersonalAgentDate DATE DEFAULT NULL,
	eodPersonalDate DATE DEFAULT NULL,
	flsaPersonalDescription VARCHAR(15) DEFAULT NULL,
	veravsipStatus VARCHAR(15) DEFAULT NULL,
	performanceRatingOfficialName VARCHAR(50) DEFAULT NULL,
	performanceRatingOfficialID VARCHAR(40) DEFAULT NULL,
	performancePlanCheckInDate DATE DEFAULT NULL,
	probationSupervisorEndDate DATE DEFAULT NULL,
	probationExecutiveEndDate DATE DEFAULT NULL,
	birthdayDate DATE DEFAULT NULL,
	birthday VARCHAR(255) DEFAULT NULL,
	fbiNextServiceAnniversaryDate DATE DEFAULT NULL,
	fbiNextServiceAnniversary VARCHAR(255) DEFAULT NULL,
	governmentNextServiceAnniversaryDate DATE DEFAULT NULL,
	governmentNextServiceAnniversary VARCHAR(255) DEFAULT NULL,
	tpRetirementEligibleDate DATE DEFAULT NULL,
	tpPersonalSeparationDate DATE DEFAULT NULL,
	tpProbationSupervisorEndDate DATE DEFAULT NULL,
	tpProbationExecutiveEndDate DATE DEFAULT NULL,
	tpTemporaryMovementBeginDate DATE DEFAULT NULL,
  PRIMARY KEY (employeeID)
);


CREATE TABLE IF NOT EXISTS employeeProfile (
	employeeID VARCHAR(40) NOT NULL,
	first_name VARCHAR(40) DEFAULT NULL,
	last_name VARCHAR(40) DEFAULT NULL,
	position_type_desc VARCHAR(60) DEFAULT NULL,
	emp_id VARCHAR(20) DEFAULT NULL,
	ueid VARCHAR(20) DEFAULT NULL,
	file_number VARCHAR(20) DEFAULT NULL,
	adj_eod_date VARCHAR(20) DEFAULT NULL,
	ra_code VARCHAR(10) DEFAULT NULL,
	rtng_offcl_name VARCHAR(40) DEFAULT NULL,
	PRSNL_RTNG_OFFCL_PRSNL_EMP_ID VARCHAR(20) DEFAULT NULL,
	location VARCHAR(40) DEFAULT NULL,
	cost_code VARCHAR(10) DEFAULT NULL,
	dept_squad VARCHAR(60) DEFAULT NULL,
	building VARCHAR(100) DEFAULT NULL,
	room VARCHAR(40) DEFAULT NULL,
	work_phone VARCHAR(30) DEFAULT NULL,
	mailing_addr VARCHAR(120) DEFAULT NULL,
	home_addr VARCHAR(120) DEFAULT NULL,
	email_addr VARCHAR(60) DEFAULT NULL,
	home_phone VARCHAR(30) DEFAULT NULL,
	mobile_phone VARCHAR(30) DEFAULT NULL,
	emergency_contact VARCHAR(40) DEFAULT NULL,
	emergency_primary VARCHAR(40) DEFAULT NULL,
	disability VARCHAR(100) DEFAULT NULL,
	ethnicity_race VARCHAR(100) DEFAULT NULL,
	national_original VARCHAR(100) DEFAULT NULL,
	gender VARCHAR(20) DEFAULT NULL,
	transgender VARCHAR(20) DEFAULT NULL,
	sexual_orientation VARCHAR(30) DEFAULT NULL,
	health_insurance VARCHAR(40) DEFAULT NULL,
	health_insurance_type VARCHAR(40) DEFAULT NULL,
	life_insurance VARCHAR(60) DEFAULT NULL,
	retirement_type VARCHAR(40) DEFAULT NULL,
	tsp_percent VARCHAR(10) DEFAULT NULL,
	tsp_amount VARCHAR(10) DEFAULT NULL,
	roth_percent VARCHAR(5) DEFAULT NULL,
	roth_amount VARCHAR(10) DEFAULT NULL,
	retirement_eligibility_date VARCHAR(15) DEFAULT NULL,
	mandatory_retirement_date VARCHAR(15) DEFAULT NULL,
	position_type VARCHAR(30) DEFAULT NULL,
	position_assigned VARCHAR(20) DEFAULT NULL,
	position_grade VARCHAR(10) DEFAULT NULL,
	position_step VARCHAR(5) DEFAULT NULL,
	position_adj_salary VARCHAR(30) DEFAULT NULL,
	position_wgi_date VARCHAR(15) DEFAULT NULL,
	last_par_rating VARCHAR(40) DEFAULT NULL,
	par_issued_date VARCHAR(15) DEFAULT NULL,
	leave_annual_hrs VARCHAR(30) DEFAULT NULL,
	leave_sick_hrs VARCHAR(30) DEFAULT NULL,
	leave_comp_hrs VARCHAR(30) DEFAULT NULL,
	scd_retirement VARCHAR(15) DEFAULT NULL,
	prsnl_adj_agnt_eod_date VARCHAR(15) DEFAULT NULL,
	prsnl_adj_eod_date VARCHAR(15) DEFAULT NULL,
	prsnl_agnt_eod_date VARCHAR(15) DEFAULT NULL,
	prsnl_eod_date VARCHAR(15) DEFAULT NULL,
	prsnl_flsa_desc VARCHAR(15) DEFAULT NULL,
	vera_vsip_status_desc VARCHAR(15) DEFAULT NULL,
	PERF_RTNG_OFFCL_NAME VARCHAR(50) DEFAULT NULL,
	PERF_RTNG_OFFCL_PRSNL_EMP_ID VARCHAR(40) DEFAULT NULL,
	PLAN_CHECK_IN_DATE VARCHAR(15) DEFAULT NULL,
	PROB_SUPV_END_DATE VARCHAR(15) DEFAULT NULL,
	PROB_SES_END_DATE VARCHAR(15) DEFAULT NULL,
	NEXT_BIRTHDAY_DATE DATE DEFAULT NULL,
	NEXT_BIRTHDAY_DESC VARCHAR(255) DEFAULT NULL,
	NEXT_FBI_SVC_ANNIVERSARY_DATE VARCHAR(15) DEFAULT NULL,
	NEXT_FBI_SVC_ANNIVERSARY_DESC VARCHAR(255) DEFAULT NULL,
	NEXT_GOV_SVC_ANNIVERSARY_DATE VARCHAR(15) DEFAULT NULL,
	NEXT_GOV_SVC_ANNIVERSARY_DESC VARCHAR(255) DEFAULT NULL,
	TP_RETIRE_ELIG_DATE VARCHAR(15) DEFAULT NULL,
	TP_PRSNL_SEP_DATE VARCHAR(15) DEFAULT NULL,
	TP_PROB_SUPV_END_DATE VARCHAR(15) DEFAULT NULL,
	TP_PROB_SES_END_DATE VARCHAR(15) DEFAULT NULL,
	TP_TMP_MVMNT_BEGIN_DATE VARCHAR(15) DEFAULT NULL,
  PRIMARY KEY (employeeID)
);


CREATE TABLE IF NOT EXISTS employeeTransaction_stg (
	transactionID VARCHAR(40) NOT NULL,
	employeeID VARCHAR(40) NOT NULL,
	processName VARCHAR(30) NOT NULL,
	displayOrder INT NOT NULL,
  PRIMARY KEY (transactionID)
);


CREATE TABLE IF NOT EXISTS employeeTransaction (
	transactionID VARCHAR(40) NOT NULL,
	employeeID VARCHAR(40) NOT NULL,
	processName VARCHAR(30) NOT NULL,
	displayOrder INT NOT NULL,
  PRIMARY KEY (transactionID)
);


CREATE TABLE IF NOT EXISTS employeeTransactionDetail_stg (
	transactionID VARCHAR(40) NOT NULL,
  stepNumber INT NOT NULL,
  stepTitle VARCHAR(500) DEFAULT NULL,
	stepStatus VARCHAR(1) DEFAULT NULL,
	stepOwner VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (transactionID, stepNumber),
  FOREIGN KEY (transactionID) REFERENCES employeeTransaction_stg (transactionID)
);


CREATE TABLE IF NOT EXISTS employeeTransactionDetail (
  transactionID VARCHAR(40) NOT NULL,
  stepNumber INT NOT NULL,
  stepTitle VARCHAR(500) DEFAULT NULL,
	stepStatus VARCHAR(1) DEFAULT NULL,
	stepOwner VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (transactionID, stepNumber),
  FOREIGN KEY (transactionID) REFERENCES employeeTransaction (transactionID)
);


CREATE TABLE IF NOT EXISTS employeePhoto_stg (
  employeeID VARCHAR(40) NOT NULL,
	urlPath VARCHAR(200) NOT NULL,
  loadTimestamp TIMESTAMP NOT NULL,
  PRIMARY KEY (employeeID)
);


CREATE TABLE IF NOT EXISTS employeePhoto (
  employeeID VARCHAR(40) NOT NULL,
	urlPath VARCHAR(200) NOT NULL,
  loadTimestamp TIMESTAMP NOT NULL,
  PRIMARY KEY (employeeID)
);


-- Added noaCode
CREATE TABLE IF NOT EXISTS employeePAR_stg (
  employeeID VARCHAR(40) NOT NULL,
	parID INT NOT NULL,
  noaCode VARCHAR(10) NOT NULL,
	noaDescription VARCHAR(80) NOT NULL,
	effectiveTimestamp TIMESTAMP NOT NULL,
  PRIMARY KEY (employeeID, parID)
);


-- Added noaCode
CREATE TABLE IF NOT EXISTS employeePAR (
  employeeID VARCHAR(40) NOT NULL,
	parID INT NOT NULL,
  noaCode VARCHAR(10) NOT NULL,
	noaDescription VARCHAR(80) NOT NULL,
	effectiveTimestamp TIMESTAMP NOT NULL,
  PRIMARY KEY (employeeID, parID)
);


CREATE TABLE IF NOT EXISTS employeeCSA_stg (
  employeeID VARCHAR(40) NOT NULL,
	csaID INT NOT NULL,
	description VARCHAR(100) NOT NULL,
	amount MONEY DEFAULT NULL,
	amountOwed MONEY DEFAULT NULL,
	startTimestamp TIMESTAMP NOT NULL,
	endTimestamp TIMESTAMP NOT NULL,
	PRIMARY KEY (employeeID, csaID)
);


CREATE TABLE IF NOT EXISTS employeeCSA (
  employeeID VARCHAR(40) NOT NULL,
	csaID INT NOT NULL,
	description VARCHAR(100) NOT NULL,
	amount MONEY DEFAULT NULL,
	amountOwed MONEY DEFAULT NULL,
	startTimestamp TIMESTAMP NOT NULL,
	endTimestamp TIMESTAMP NOT NULL,
	PRIMARY KEY (employeeID, csaID)
);


CREATE TABLE IF NOT EXISTS costCodePhoto (
	costCode VARCHAR(10) NOT NULL,
	urlPath VARCHAR(200) NOT NULL,
  PRIMARY KEY (costCode)
);


CREATE TABLE IF NOT EXISTS diversityReport (
  diversityReportID VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
	description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (diversityReportID)
);


CREATE TABLE IF NOT EXISTS diversityPopulation (
	diversityPopulationID VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
	description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (diversityPopulationID)
);


CREATE TABLE IF NOT EXISTS diversityPopulationType (
  diversityPopulationTypeID VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
	description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (diversityPopulationTypeID)
);


-- Moved: Switched places between diversityPercent & year
CREATE TABLE IF NOT EXISTS diversity_stg (
	diversityReportID VARCHAR(30) NOT NULL,
	diversityPopulationID VARCHAR(30) NOT NULL,
	diversityPopulationTypeID VARCHAR (30) NOT NULL,
	percent DECIMAL(5,4),
	year INT NOT NULL,
	PRIMARY KEY (diversityReportID, diversityPopulationID, diversityPopulationTypeID, year),
  FOREIGN KEY (diversityReportID) REFERENCES diversityReport (diversityReportID),
  FOREIGN KEY (diversityPopulationID) REFERENCES diversityPopulation (diversityPopulationID),
  FOREIGN KEY (diversityPopulationTypeID) REFERENCES diversityPopulationType (diversityPopulationTypeID)
);


CREATE TABLE IF NOT EXISTS diversity (
  diversityReportID VARCHAR(30) NOT NULL,
	diversityPopulationID VARCHAR(30) NOT NULL,
	diversityPopulationTypeID VARCHAR (30) NOT NULL,
	percent DECIMAL(5,4),
	year INT NOT NULL,
	PRIMARY KEY (diversityReportID, diversityPopulationID, diversityPopulationTypeID, year),
  FOREIGN KEY (diversityReportID) REFERENCES diversityReport (diversityReportID),
  FOREIGN KEY (diversityPopulationID) REFERENCES diversityPopulation (diversityPopulationID),
  FOREIGN KEY (diversityPopulationTypeID) REFERENCES diversityPopulationType (diversityPopulationTypeID)
);


-- Removed Columns: descr1, descr2, hr_source_id
-- Moved Columns: fb_hrs_jo_pst_id, posting_title, position_nbr, hrs_jo_pst_open_dt, hrs_jo_pst_cls_dt
CREATE TABLE IF NOT EXISTS jobOpening_stg (
    jobOpeningID INT NOT NULL,
    positionID INT NOT NULL,
    postingID INT NOT NULL,
    postingTitle VARCHAR(200) NOT NULL,
    postingDescription VARCHAR(30) NOT NULL,
    postingOpenDate DATE NOT NULL,
    postingCloseDate DATE DEFAULT NULL,
    huntsville BOOLEAN NOT NULL,
    PRIMARY KEY (jobOpeningID, positionID, postingID)
  );


-- Removed Columns: descr1, descr2, hr_source_id
-- Moved Columns: fb_hrs_jo_pst_id, posting_title, position_nbr, hrs_jo_pst_open_dt, hrs_jo_pst_cls_dt
CREATE TABLE IF NOT EXISTS jobOpening (
    jobOpeningID INT NOT NULL,
    positionID INT NOT NULL,
    postingID INT NOT NULL,
    postingTitle VARCHAR(200) NOT NULL,
    postingDescription VARCHAR(30) NOT NULL,
    postingOpenDate DATE NOT NULL,
    postingCloseDate DATE DEFAULT NULL,
    huntsville BOOLEAN NOT NULL,
    PRIMARY KEY (jobOpeningID, positionID, postingID)
  );


CREATE TABLE IF NOT EXISTS securityRole (
  securityRoleID VARCHAR(40) NOT NULL,
  active BOOLEAN NOT NULL,
  description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (securityRoleID)
);


CREATE TABLE IF NOT EXISTS securityPermission (
	securityPermissionID VARCHAR(40) NOT NULL,
  active BOOLEAN NOT NULL,
	description VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (securityPermissionID)
);


CREATE TABLE IF NOT EXISTS securityRolePermission (
  securityRoleID VARCHAR(40) NOT NULL,
	securityPermissionID VARCHAR(40) NOT NULL,
  active BOOLEAN NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (securityRoleID, securityPermissionID),
  FOREIGN KEY (securityRoleID) REFERENCES securityRole (securityRoleID),
  FOREIGN KEY (securityPermissionID) REFERENCES securityPermission (securityPermissionID)
);


CREATE TABLE IF NOT EXISTS securityEmployeeRole_stg (
	employeeID varchar(40) NOT NULL,
	securityRoleID VARCHAR(40) NOT NULL,
	PRIMARY KEY (employeeID, securityRoleID),
  FOREIGN KEY (securityRoleID) REFERENCES securityRole (securityRoleID)
);


CREATE TABLE IF NOT EXISTS securityEmployeeRole (
  employeeID varchar(40) NOT NULL,
	securityRoleID VARCHAR(40) NOT NULL,
	PRIMARY KEY (employeeID, securityRoleID),
  FOREIGN KEY (securityRoleID) REFERENCES securityRole (securityRoleID)
);


CREATE TABLE IF NOT EXISTS integrationSetting (
  integrationSettingID VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
	value VARCHAR(30),
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (integrationSettingID)
);


CREATE TABLE IF NOT EXISTS integrationLog (
  name VARCHAR(30) NOT NULL,
	status BOOLEAN NOT NULL,
	error VARCHAR(500) DEFAULT NULL,
	startTimestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	finishTimestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS externalConnection (
  externalConnectionID VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
	description VARCHAR(100) NOT NULL,
  url VARCHAR(100) NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (externalConnectionID)
);


CREATE TABLE IF NOT EXISTS ratingOption (
  ratingOptionID VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ratingOptionID)
);


CREATE TABLE IF NOT EXISTS employeeRating (
  employeeID VARCHAR(40) NOT NULL,
  ratingOptionID VARCHAR(30) NOT NULL,
  score INT NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (employeeID, ratingOptionID),
  FOREIGN KEY (ratingOptionID) REFERENCES ratingOption (ratingOptionID),
  CONSTRAINT checkScore CHECK (score in (1, 2, 3, 4, 5))
);


CREATE TABLE IF NOT EXISTS apiKey (
  apikey varchar(100) NOT NULL,
  active BOOLEAN NOT NULL,
  createBy VARCHAR(30) NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updateBy VARCHAR(30) NOT NULL,
  updateTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (apikey)
);


CREATE TABLE IF NOT EXISTS apiUsage (
  apiKey varchar(100) DEFAULT NULL,
  url varchar(100) NOT NULL,
  parameters json NOT NULL,
  createTimestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

