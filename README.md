# LambdaEmailStateMachine
A email processing state machine using AWS Lambda &amp; Step Functions

Why spin up a whole server for a simple automation task when you can easily 
create a flexible serverless architecture. 

Benefits: 

* your code is reduced to the smallest most action full pieces, a few lines of code
that do the work, no boilerplate !
* easily expand and change the architecture, with defaults and fallbacks
* Safety - Amazon deals with it 
* Up Time - Amazon deals with it
* Built in Scalability - Amazon deals with it
* Task parallelization if required with zero programming overhead
* Possible to mix several languages if the task requires it.
* can access external endpoints if required

Negatives:

* deal with amazon api's
* vendor lock
* cost / although cost might not actually turn out to be a negative when
fully compared with other solutions.

About the code:

This example was created directly in the AWS console, I have not yet explored
a fully automated path from code to working. 

1) Create AWS Lambdas for each of the tasks; I divided the tasks into :
Email Verification, HTML Body stripping, Email thru SendGrid, Email thru MailGun
* All lambdas used Node
* I used requests node library to send the emails, this required packaging 
those two lambdas to include the library and its requirements.

2) The ASL JSON defines the state machine for AWS Step Functions:
It does Email verification erroring out if failed to verify, then
strips the html and saves a stripped body, and then checks which service to
use to send mail, this would be sent in with the email json. 


