# waste-sorter

First put this in your command line: : pip install --upgrade "watson-developer-cloud>=1.0,<2.0"

Running locally: 
Change the file path in the welcome.py file to where you have the demo/test image stored in your directory. 
Put the following in the command line: python welcome.py
If that doesn't work try (on a Mac) python3 welcome.py 

Pushing to bluemix: 
- Change the API key and classifier_id in the python code if you're using your own account
- Then/or put the following in your command line: bluemix app push 

To develop your own custom classifier you can use the image files provided in the zip files. 
