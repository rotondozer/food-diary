# A Food Diary

This app was inspired by my lovely girlfriend who is plagued with allergies to food and other environmental variables. Some are known, many are not. We spend a significant amount of time trying to remember what she ate and when, and if it was succeeded by a similar allergic reaction.

## Use:

After creating a profile and signing in, begin by entering a date to initialize the log. Once the log for that day is created, use that date when entering any number of food items or allergic reations you wish to record. You can then retrieve logs from any date that's been initialized by entering that date at the bottom and clicking one of the blue buttons. 

## Goal:
  To track recorded data over a long time in order to trace correlations between food eaten and allergic reactions, assuming there to be a regular input of allergic reactions.

  With no allergic reactions to trace, future iterations of this app can serve as a means to track calories eaten or other health goals by being able to see trends on a daily, weekly or monthly basis and comparing them to personal health goals.

User Stories:
  As a user I want to list my health goals in my profile and be able to update them over time as well as determine if they're being met so tracking all this data is worth my time

  As a user, I wish to search by day and see any food logged & allergic reactions logged to examine any and all food/allergy correlations

  As a user I want to search by allergic reaction and see all food logged that day (and/or previous day) to narrow down what could cause a specific reaction

  As a user I want to search by food to see all allergic reactions logged on that day (and/or following day) to narrow down f a specific food trends with a recurring allergy.

Future Iterations:
  - A more condensed 'initialize-log-create-log' process to avoid repitition with entering dates.
  - Update and Destroy methods for specific Food and Allergy logs (instead of only being able to update/destroy the entire log).
  - Expand food log data to include more nutrional values to reach a wider range of users looking to track their health goals.
  - Expanded date log details - add notes for the day or user goals other than solving allergy mysteries (in combination with the above point).
  - Add more search criteria including food name, symptom, or some other data values that have not yet been added.

Back-end repository:
  https://github.com/rotondozer/food-diary-api

Front-end wireframe:
  http://imgur.com/a/Nipd7

ERD for back-end API:
  http://imgur.com/YY2mK6S
