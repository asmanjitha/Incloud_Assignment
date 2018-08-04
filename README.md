						Timer Application
						=================

1) How To Setup
	*	First download the repository from and extract it
	*	'timer_app' folder contins the Symfony PHP back end
	*	'timer_frontend' folder contains the React frontend

	*	Install "XAMPP" server and put 'timer_app' folder inside the 'htdocs' folder in 'xampp' ('xampp installed foder' -> htdocs)
	*	Open "XAMPP Control Panel" (Desktop app) and start "Apache" and "MySQL" servers

	*	Open browser and go to PHP MyAdmin by the link "localhost/phpyadmin"
	*	Go to "Import" menu and import file "timer_app_db.sql" and click "GO" in bottom left corner to create the database.

	*	Open 'timer_frontend' folder using CMD
	*	Run "npm install" (Node.JS should be available in PC)
	*	Run "npm start"
	*	Open browser and go to "http://localhost:3000"

2)How to use application
	*	In Home page there are three buttons "Timer","Book Time" and "View History". 
	*	In Timer page, Click Start to start timer. 
	*	To book time directly from timer, Ckick "Click here to Book Time"
	*	Type the decription and click "Book Time". Then the timer will automatically reset and start again. 
	*	After you stop the timer, booking willbe saved. 
	*	In Book Time page, Type date, end time and description to save a booking.
	*	In View History page, the data table shows your previous bookings, Date, End time and description. You can filter bookings by filter the words from filter window.

3)Notes
	*	Since I had some issus in docker. I happened to use "XAMPP" server for Web and Database servers. 
	*	I happened to work around 12 hours to complete this project
	*	I got many problems while developing the "View History" page. But finally I used Griddle and build the table correctly. 
	*	All the other parts were not much difficult to build. Some times I happend to search and find solution. 
	*	Back end server is a simple RESTFULL API, Which can store data in db and fetch data from db. 

