**6-19-20**  

This is how I did a mysql dump  
`mysqldump drupal7 -ujabal -psocialma1 --host localhost > drupal7.sql`  

I originally got permission errors so the following gave me one-time access  
`mysqldump --opt --single-transaction -u jabal -p drupal7 > dump.sql`  

This is how to connect to my personal server with ssh:  
`ssh jabaltorres@23.229.174.73`  

This is where I'm going to be working from on my local server:  
`/home/jabaltorres/public_html/drupal-test`  

This was the command that I used to copy the sql(tar) file from my local machine to the live server:  
`scp drupal7-dump.sql.tar.gz jabaltorres@23.229.174.73:/home/jabaltorres/public_html/drupal-test`  

Copy the drupal directory(tar) file from my local machine to the live server:  
`scp drupal7.tar.gz jabaltorres@23.229.174.73:/home/jabaltorres/public_html/drupal-test`  

Another way (shorter) of doing this would be:  
`scp drupal7.tar.gz jabaltorres@23.229.174.73:~/public_html/drupal-test`  

Expand the directory tree (unpackage) -  I personally didn’t need the “sudo”  
`sudo tar -xzf drupal7.tar.gz`  

Extracting the tar file  
`tar -xzvf drupal-7.38.tar.gz`  
`sudo tar -xzf drupal7-dump.sql.tar.gz` 