# Docker_node
How to Dockerize a React Project (linux)
<h4> By Oliveira, C. R., Eng.</h4>
<h1>Dockerizing a  Graphql Application</h1>
<h2>Contents</h2>
<ul>
  <li>Why learn this?</li>
  <li>Dependencies and his installation</li>
  <li>Setting up a graphql mock simple project</li>
</ul>
<h2>Dependecies</h2>
<ul>
  <li>nodeJs</li>
  <li>npm</li>
  <li><a href="https://www.npmjs.com/package/apollo-server">apollo-server</a></li>
  <li><a href="https://www.npmjs.com/package/graphql">graphql</a></li>
  <li><a href="https://hub.docker.com">docker</a></li>
 </ul>
 <h3>Why to learn docker</h3>
<h4>Portability</h4>
Once you have tested your containerized application you can deploy it to any other system where Docker is running and you can be sure that your application will perform exactly as it did when you tested it.
<h4>Performance</h4>
Although virtual machines are an alternative to containers, the fact that containers do not contain an operating system (whereas virtual machines do) means that containers have much smaller footprints than virtual machines, are faster to create, and quicker to start.
<h4>Agility</h4>
The portability and performance benefits offered by containers can help you make your development process more agile and responsive. Enhancing your continuous integration and continuous delivery processes to take advantage of containers and technology such as Enterprise Developer Build Tools for Windows makes it easier for you to deliver the right software at the right time. Enterprise Developer Build Tools for Windows is a component of Enterprise Developer which provides all of the functionality of Enterprise Developer to enable you to compile, build, and test COBOL code but without the overhead of an IDE.
<h4>Isolation</h4>
A Docker container that contains one of your applications also includes the relevant versions of any supporting software that your application requires. If other Docker containers contain applications that require different versions of the same supporting software, that isn't a problem because the different Docker containers are totally independent of one other.
This also means that as you move through the various stages of your development lifecycle, you can have total confidence that an image you create during development will perform exactly the same as it moves through testing and potentially to your users.
<h4>Scalability</h4>
You can quickly create new containers if demand for your applications requires them. When using multiple containers you can take advantage of a range of container management options. See the Docker documentation for more information on these options.

<h3>Installing NodeJs and npm with package manager</h3>
First, update the aṕt:

```
sudo apt update
```
Now to install the NodeJs (asynchronous event-driven JavaScript runtime):

```
sudo apt-get nodejs
```
You can test the isntallantion using

```
node -v && npm -v
```

<h3>Setting up a graphql mock simple project</h3>


```
npm init -t server
```

Access the project packge folder:

```
cd server
```
installing apollo-server and graphql:

```
npm install apollo-server graphql
```

Create a file called server.js and open  it:


```
touch server.js
```
First all, import ApolloServer and gql to your project in server.js:

```
import {ApolloServer, gql} from 'apollo-server';
```

And create a 'typeDefs' object to use in our server, here we will simulate a User to mock our app (server.js).
Is Good to know, a complete graphql project need resolvers to access a real data from a database, but here we just need the mocks.


```
const typeDefs = gql`
  type Query{
    getAllUsers: [User]
  }
  
  type User{
    ID: ID!
    name: String!
  }
`
```

Now let's instace our apollo server, pass the typeDefs object and allow mocks from it:

```
const server = new ApolloServer({
  typeDefs,
  mocks: true
});
```

At last, allow a port (arbitrary 4000 in example) to hear our server for standart (docker can redirect the port, so keep calm):

```
server.listen(4000).then((URL)=>{
  console.log(`Server hosted at ${URL.url}`);
});
```

<h3>Install and configure docker</h3>

To install docker tun the prompt command:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

The docker requires a container "system" version, can be confuse, but it isn't a virtual machine, doesn't have a complete OS version inside, just the necessary to run our apps and keep the server OS pure and untouched, the dependecies and modifications will run just inside our containner.
