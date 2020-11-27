\c test;

-- user
INSERT INTO employee (employeeID, active) VALUES ('djribeiro', true);
INSERT INTO employee (employeeID, active) VALUES ('bmerel', true);
INSERT INTO employee (employeeID, active) VALUES ('DKIM4', true);

-- employeeAlert
INSERT INTO employeeAlert (employeeID, employeeAlertID, active, description, createBy, updateBy) VALUES ('bmerel', 'abc', true, 'description', 'djribeiro', 'djribeiro');
INSERT INTO employeeAlert (employeeID, employeeAlertID, active, description, createBy, updateBy) VALUES ('bmerel', 'abd', true, 'description', 'djribeiro', 'djribeiro');

-- settingOption
INSERT INTO settingOption (settingOptionID, active, description, createBy, updateBy) VALUES ('sidebar-color', true, 'Color of the sidebar', 'djribeiro', 'djribeiro');
INSERT INTO settingOption (settingOptionID, active, description, createBy, updateBy) VALUES('menu-color', true, 'Color of the menu', 'djribeiro', 'djribeiro');

-- settingOptionValue
INSERT INTO settingOptionValue (settingOptionID, settingOptionValue, active, description, createBy, updateBy) VALUES('sidebar-color', 'blue', true, 'Blue Sidebar Description', 'djribeiro', 'djribeiro');
INSERT INTO settingOptionValue (settingOptionID, settingOptionValue, active, description, createBy, updateBy) VALUES('sidebar-color', 'red', true, 'Red Sidebar Description', 'djribeiro', 'djribeiro');
INSERT INTO settingOptionValue (settingOptionID, settingOptionValue, active, description, createBy, updateBy) VALUES('menu-color', 'blue', true, 'Blue Menu Description', 'djribeiro', 'djribeiro');
INSERT INTO settingOptionValue (settingOptionID, settingOptionValue, active, description, createBy, updateBy) VALUES('menu-color', 'red', true, 'Red Menu Description', 'djribeiro', 'djribeiro');

-- employeeSettingOption
INSERT INTO employeeSetting (employeeID, settingOptionID, settingOptionValue, createBy, updateBy) VALUES ('bmerel', 'sidebar-color', 'blue', 'djribeiro', 'djribeiro');
INSERT INTO employeeSetting (employeeID, settingOptionID, settingOptionValue, createBy, updateBy) VALUES ('bmerel', 'menu-color', 'red', 'djribeiro', 'djribeiro');
INSERT INTO employeeSetting (employeeID, settingOptionID, settingOptionValue, createBy, updateBy) VALUES ('djribeiro', 'menu-color', 'red', 'djribeiro', 'djribeiro');

-- diversityReport
INSERT INTO diversityReport (diversityReportID, active, description, createBy, updateBy) VALUES ('Minority', true, 'Reporting showcasing minority statistics', 'djribeiro', 'djribeiro');
INSERT INTO diversityReport (diversityReportID, active, description, createBy, updateBy) VALUES ('Gender', true, 'Reporting showcasing gender statistics', 'djribeiro', 'djribeiro');

-- diversityReport
INSERT INTO diversityPopulation (diversityPopulationID, active, description, createBy, updateBy) VALUES ('Special Agent', true, 'Special Agent Population', 'djribeiro', 'djribeiro');
INSERT INTO diversityPopulation (diversityPopulationID, active, description, createBy, updateBy) VALUES ('Intelligence Analyst', true, 'Intelligence Analyst Population', 'djribeiro', 'djribeiro');
INSERT INTO diversityPopulation (diversityPopulationID, active, description, createBy, updateBy) VALUES ('Professional Staff', true, 'Professional Staff Population', 'djribeiro', 'djribeiro');

-- diversityPopulationType
INSERT INTO diversityPopulationType (diversityPopulationTypeID, active, description, createBy, updateBy) VALUES ('Female', true, 'Female Population Type', 'djribeiro', 'djribeiro');
INSERT INTO diversityPopulationType (diversityPopulationTypeID, active, description, createBy, updateBy) VALUES ('Male', true, 'Male Population Type', 'djribeiro', 'djribeiro');
INSERT INTO diversityPopulationType (diversityPopulationTypeID, active, description, createBy, updateBy) VALUES ('White', true, 'White Population Type', 'djribeiro', 'djribeiro');
INSERT INTO diversityPopulationType (diversityPopulationTypeID, active, description, createBy, updateBy) VALUES ('Hispanic', true, 'Hispanic Population Type', 'djribeiro', 'djribeiro');

-- diversity
INSERT INTO diversity VALUES ('Gender', 'Special Agent', 'Female', '.1', 2019);
INSERT INTO diversity VALUES ('Gender', 'Special Agent', 'Female', '.15', 2020);
INSERT INTO diversity VALUES ('Gender', 'Special Agent', 'Male', '.9', 2019);
INSERT INTO diversity VALUES ('Gender', 'Special Agent', 'Male', '.85', 2020);

-- jobOpening
INSERT INTO jobOpening VALUES (1, 1, 1, 'Title #1', 'Description #1', NOW(), NOW() + interval '20' day, true);
INSERT INTO jobOpening VALUES (1, 1, 2, 'Title #2', 'Description #2', NOW(), NOW() + interval '50' day, false);
INSERT INTO jobOpening VALUES (2, 3, 1, 'Title #2', 'Description #4', NOW() + interval '20' day, null, true);

-- securityRole
INSERT INTO securityRole (securityRoleID, active, description, createBy, updateBy) VALUES ('ratingManager', true, 'ratingManager Description', 'djribeiro', 'djribeiro');
INSERT INTO securityRole (securityRoleID, active, description, createBy, updateBy) VALUES ('performanceManager', true, 'performanceManager Description', 'djribeiro', 'djribeiro');

-- securityPermission
INSERT INTO securityPermission (securityPermissionID, active, description, createBy, updateBy) VALUES ('update', true, 'update Description', 'djribeiro', 'djribeiro');
INSERT INTO securityPermission (securityPermissionID, active, description, createBy, updateBy) VALUES ('read', true, 'read Description', 'djribeiro', 'djribeiro');

-- securityRolePermission
INSERT INTO securityRolePermission (securityRoleID, securityPermissionID, active, createBy, updateBy) VALUES ('ratingManager', 'update', true, 'djribeiro', 'djribeiro');
INSERT INTO securityRolePermission (securityRoleID, securityPermissionID, active, createBy, updateBy) VALUES ('ratingManager', 'read', true, 'djribeiro', 'djribeiro');
INSERT INTO securityRolePermission (securityRoleID, securityPermissionID, active, createBy, updateBy) VALUES ('performanceManager', 'read', true, 'djribeiro', 'djribeiro');

-- securityEmployeeRole
INSERT INTO securityEmployeeRole (employeeID, securityRoleID) VALUES ('bmerel', 'ratingManager');
INSERT INTO securityEmployeeRole (employeeID, securityRoleID) VALUES ('bmerel', 'performanceManager');
INSERT INTO securityEmployeeRole (employeeID, securityRoleID) VALUES ('djribeiro', 'performanceManager');

-- integrationSetting
INSERT INTO integrationSetting (integrationSettingID, active, value, createBy, updateBy) VALUES ('a', true, 1, 'djribeiro', 'djribeiro');
INSERT INTO integrationSetting (integrationSettingID, active, value, createBy, updateBy) values ('b', true, true, 'djribeiro', 'djribeiro');
INSERT INTO integrationSetting (integrationSettingID, active, value, createBy, updateBy) values ('c', true, 'test', 'djribeiro', 'djribeiro');

-- integrationLog
INSERT INTO integrationLog (name, status, error, createBy, updateBy) VALUES ('a', true, null, 'djribeiro', 'djribeiro');
INSERT INTO integrationLog (name, status, error, createBy, updateBy) VALUES ('b', false, 'error', 'djribeiro', 'djribeiro');
INSERT INTO integrationLog (name, status, error, createBy, updateBy) VALUES ('b', true, null, 'djribeiro', 'djribeiro');
INSERT INTO integrationLog (name, status, error, createBy, updateBy) VALUES ('c', false, 'error', 'djribeiro', 'djribeiro');

-- externalConnection
INSERT INTO externalConnection(externalConnectionID, active, description, url, createBy, updateBy) VALUES('id-1', true, 'description-1', 'url1', 'djribeiro', 'djribeiro');
INSERT INTO externalConnection(externalConnectionID, active, description, url, createBy, updateBy) VALUES('id-2', true, 'description-2', 'url2', 'djribeiro', 'djribeiro');

-- ratingOption
INSERT INTO ratingOption(ratingOptionID, active, createBy, updateBy) VALUES ('a', true, 'djribeiro', 'djribeiro');
INSERT INTO ratingOption(ratingOptionID, active, createBy, updateBy) VALUES ('b', true, 'djribeiro', 'djribeiro');

-- employeeRating
INSERT INTO employeeRating (employeeID, ratingOptionID, score, createBy, updateBy) VALUES ('bmerel', 'a', 1, 'bmerel', 'bmerel');
INSERT INTO employeeRating (employeeID, ratingOptionID, score, createBy, updateBy) VALUES ('bmerel', 'b', 1, 'bmerel', 'bmerel');
INSERT INTO employeeRating (employeeID, ratingOptionID, score, createBy, updateBy) VALUES ('djribeiro', 'a', 1, 'djribeiro', 'djribeiro');

-- apikey
INSERT INTO apiKey (apikey, active, createBy, updateBy) VALUES ('13234zzdlfjasdkfj2k3jrkl2jfasdfa', true, 'djribeiro', 'djribeiro');
INSERT INTO apiKey (apikey, active, createBy, updateBy) VALUES ('13234zzdlfjasdkfj2k3jrk123assoop', false, 'bmerel', 'bmerel');

-- apiUsage
INSERT INTO apiUsage (employeeID, apiKey, url, parameter) VALUES ('bmerel', null, '/api/v1/public/diversity', '{}');
INSERT INTO apiUsage (employeeID, apiKey, url, parameter) VALUES (null, '13234zzdlfjasdkfj2k3jrkl2jfasdfa', '/api/v1/admin/integration/log/:apiKey', '{"apiKey":"13234zzdlfjasdkfj2k3jrkl2jfasdfa"}');
