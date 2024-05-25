# Write your MySQL query statement below
SELECT 
activity_date AS day,

count(distinct user_id) as active_users
FROM
 activity
 WHERE
 DATEDIFF('2019-07-27', activity_date) <30 and DATEDIFF('2019-07-27', activity_date)>=0
 GROUP BY 1