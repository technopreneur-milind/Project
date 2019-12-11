FROM maven:3.6.0-jdk-11-slim AS build
COPY src /usr/app/src
COPY pom.xml /usr/app
RUN mvn -f /usr/app/pom.xml clean package

# Alpine Linux with OpenJDK JRE
FROM openjdk:8-jre-alpine
# copy WAR into image
COPY /target/ecommerce-0.0.1-SNAPSHOT.jar /usr/app/ecommerce.jar
EXPOSE 9090
# run application with this command line
CMD ["/usr/bin/java", "-jar", "-Dserver.port=9090","-Dspring.profiles.active=default", "/usr/app/ecommerce.jar"]
