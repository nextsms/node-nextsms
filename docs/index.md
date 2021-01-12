# NextSMS

## Basics

- https://messaging-service.co.tz


```
Content-Type: application/json
Accept header: application/json
```


```
username:password.	-> BASE64
```

## TEST APIs url

- Single message text request:
	POST https://messaging-service.co.tz/api/sms/v1/test/text/single
- Multiple messages text request:
	POST https://messaging-service.co.tz/api/sms/v1/test/text/multi

## API's available

- Send Sms
	- POST Single destination
	- POST Multiple destinations 
	- POST Multiple messages to Multiple destinations (Example 1)
	- POST Multiple messages to Multiple destinations (Example 2)
	- POST Schedule SMS

- Sms Delivery Reports
	- GET Get delivery reports with messageId
	- GET Get delivery reports with specific date range

- Sent Sms Logs
	- GET Get all sent SMS logs
	- GET Get all sent SMS logs with optional parameter

- Sub Customer
	- POST Register Sub Customer
	- POST Recharge customer
	- POST Deduct customer
	- GET Get sms balance


## Actions

- Send Sms
	- POST Single destination
	- POST Multiple destinations 
	- POST Multiple messages to Multiple destinations (Example 1)
	- POST Multiple messages to Multiple destinations (Example 2)
	- POST Schedule SMS

- Sms Delivery Reports
	- GET Get delivery reports with messageId
	- GET Get delivery reports with specific date range

- Sent Sms Logs
	- GET Get all sent SMS logs
	- GET Get all sent SMS logs with optional parameter

- Sub Customer
	- POST Register Sub Customer
	- POST Recharge customer
	- POST Deduct customer
	- GET Get sms balance
