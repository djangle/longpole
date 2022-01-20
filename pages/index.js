//pages/index.js

// TODO:
// Implement iron-session or uninstall it
// Implement GridFS for file storage
// Use schema.org and JSON-LD standards to improve SEO
// Implement a persistent/module layout
// Implment tooltips
// Build nav menus
// 1) App
// 1a) Profile
// 1b) Settings
// 2) Database
// 2a) Reports
// 3) Collection
// 3a) Create (auto/en mass)
// 3b) Read
// 3c) Update (auto/en mass)
// 3d) Delete (auto/clean up)
// Implment auth0 or something for login
// Add user profiles
// Build out collection data
// Deploy for public testing
// Build out settings page
// Implment search
// Play with SVGs
// Add export, PDF, connect to visualizers features
// Add legal page
// Add data templates
//

import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Users({
  isConnected,
  currentClient,
  currentCollection,
  users,
}) {
  return (
    <div className="container px-12 py-8 select-none">
      <Head>
        <title>Longpole</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-indigo-900">longpole</h1>
        <span className="text-gray-100">version 0.01</span>

        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                App
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                  Database
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>

                {isConnected ? (
                  <span className="bg-blue-100 text-indigo-900 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    &nbsp;
                    {currentCollection}
                  </span>
                ) : (
                  <div>
                    <div
                      className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                      role="alert"
                    >
                      <svg
                        className="inline flex-shrink-0 mr-3 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <span className="text-md text-red-700 italic">
                          Error: Check the cables.
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ol>
        </nav>
        <br></br>
        <br></br>

        <table className="shadow-lg bg-white">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-center px-2 py-1 hover:bg-yellow-500 text-indigo-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </th>
              <th className="bg-blue-100 border text-left px-8 py-1">_id</th>
              <th className="bg-blue-100 border text-left px-2 py-1">
                isActive
              </th>
              <th className="bg-blue-100 border text-left px-8 py-1">
                Username
              </th>
              <th className="bg-blue-100 border text-left px-8 py-1">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key="{user._id}">
                <td className="border text-center px-2 py-1 hover:bg-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </td>
                <td className="border text-left px-8 py-1">{user._id}</td>
                <td className="border text-left px-2 py-1">
                  {user.isActive.toString()}
                </td>
                <td className="border text-left px-8 py-1">{user.username}</td>
                <td className="border text-left px-8 py-1">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {isConnected ? (
          <span className="text-xs italic">{currentClient}</span>
        ) : (
          <div>
            <div
              className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <svg
                className="inline flex-shrink-0 mr-3 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <span className="">
                  You are NOT connected to MongoDB. Check the{" "}
                  <code>README.md</code> for instructions.
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer>
        <br></br>
        <div>
          <a href="legal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    const client = await clientPromise;

    const currentClient = process.env.MONGODB_URI.toString();
    const currentCollection = "users";

    const db = client.db("longpole");

    let users = await db.collection("users").find({}).toArray();
    users = JSON.parse(JSON.stringify(users));

    return {
      props: {
        isConnected: true,
        currentClient,
        currentCollection,
        users,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
