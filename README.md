This is a packages shop simulation where you can shop for packages.

How to Run :

    #1 : checkout/download the Project @ https://github.com/technopreneur-milind/Project

You will get 2 Projects as a result of this :

a) ecommerce2 : This is server side Application built on top of Spring Boot & exposing Rest Points

b) packages-shop : This is a application built in typescript

    #2 : Starting the Backend Server : 

  a) Navigate to ecommerce2 from a Terminal
  
  Execute following sh file as :
                          ./run.sh  
  In about 2 mins, You should see server available at 8080
  
  Navigate to following link to make sure , server has started :
  
  http://localhost:8080/ecommerce/packages
  
  
    #3 : Starting the UI 
 There are multiple ways of running the UI 
 
 For all the ways, first please navigate to packages-shop directory from the terminal
 
        #Way1 : For this way , you need to have docker on your machine and access to docker-hub
 The Docker image is available at https://hub.docker.com/repository/docker/milindtechnopreneur/packages-shop
 
                            Execute following sh file as :
                            ./runAsDocker.sh  
  This will download the image from docker-hub and get the application running , easy !
  
         #Way2 : (Without Docker)
         
 If you want to run it without docker: 
 
                             Execute following sh file as :
                             
                            ./run.sh  
 This will download the required libraries and get application running in some time ( This may take up to 5 minutes)
 
 
         #Way3 : Build Docker Image on local & run it !
         
 If you want to go this way ,
 
                              Execute following sh file as :
                          
                              ./buildDockerNRun.sh 
 
 
      #4 : Navigate to UI
      
 Now navigate to http://docker-ip:4200 ( if you are running UI with docker) 
 or navigate to http://localhost:4200 otherwise.
 
 Tip : You can find your docker-ip by running following command 
 
 docker-machine ip  ( for me it is 192.168.99.100 or 192.168.99.101)
 
      #5 : Start Purchasing the packages
      
 Navigate to packages tab and you should be able to see list of packages here.
 
 
 
 
 For any issues , please reach out to : milind.technopreneur@gmail.com/+49 162 454 3978
 
 
