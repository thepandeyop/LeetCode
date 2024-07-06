# Write your MySQL query statement below
SELECT 
activity_date AS day,

count(distinct user_id) as active_users
FROM
 activity
 WHERE
 activity_date > '2019-06-27' AND activity_date <= '2019-07-27' 
 GROUP BY 1