import React from 'react';

const Blogs = () => {
    return (
        <div>
            <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Difference between SQL and NoSQL?</h3>

                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">SQL databases are primarily called RDBMS or Relational Databases otherhand NoSQL databases are primarily called as Non-relational or distributed database. SQL design for Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems but NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.SQL databases are table based databases but NoSQL databases can be document based, key-value pairs, graph databases.
                                SQL databases have a predefined schema but NoSQL databases use dynamic schema for unstructured data. SQL example: Oracle, Postgres, and MS-SQL. and NoSQL example MongoDB, Redis, Neo4j, Cassandra, Hbase.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">What is JWT, and how does it work?</h3>
                            <p className="mb-5 ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.
                                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                                User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                                Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">What is the difference between javascript and NodeJS?</h3>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript can only be run in the browsers but We can run Javascript outside the browser with the help of NodeJS. JS is basically used on the client-side. NodeJs is s mostly used on the server-side.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">How does NodeJS handle multiple requests at the same time?</h3>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        </div>
                    </article>
                </li>
            </ul>
        </div >
    );
};

export default Blogs;