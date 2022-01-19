//pages/index.js
//TODO: Implement iron-session or uninstall it
//TODO: Implement GridFS for file storage
//TODO: Use schema.org and JSON-LD standards to improve SEO

import Head from "next/head";
import Script from "next/script";
import clientPromise from "../lib/mongodb";

export default function Users({ isConnected, users }) {
  return (
    <div className="container px-12 py-8">
      <Head>
        <title>Longpole</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold">longpole</h1>
        <br></br>

        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="true"
              >
                Dashboard
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </button>
            </li>
            <li role="presentation">
              <button
                class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                id="api-tab"
                data-tabs-target="#api"
                type="button"
                role="tab"
                aria-controls="api"
                aria-selected="false"
              >
                API
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
            </p>
          </div>
          <div
            class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
            </p>
          </div>
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
            </p>
          </div>
          <div
            class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="api"
            role="tabpanel"
            aria-labelledby="api-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
              API tab's associated content
              </strong>
            </p>
          </div>
        </div>

        <br></br>
        <br></br>
        <table className="shadow-lg bg-white">
          <thead>
            <tr>
              <th className="border text-center px-2 py-1 hover:bg-yellow-500">
                +
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
                  #
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
          <span class="text-xs italic">
            via mongodb+srv://cluster0.6qm0m.mongodb.net/
          </span>
        ) : (
          <div>
          <div
            class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <svg
              class="inline flex-shrink-0 mr-3 w-5 h-5"
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
            <span class="">
              You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
              for instructions.
            </span>
            </div>
          </div>
        </div>
        )}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2022
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              TBD: Invite alpha tester?
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Need a proof of concept first.
            </p>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 2022
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Still working out the idea...
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              This should be useful, or else why make it?
            </p>
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              December 2021
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Start to use Nextjs, MongoDB and Tailwindcss.
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              Clean up github account and setup repository.
            </p>
          </li>
        </ol>
      </main>

      <footer></footer>
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

    const db = client.db("longpole");

    let users = await db.collection("users").find({}).toArray();
    users = JSON.parse(JSON.stringify(users));

    return {
      props: {
        isConnected: true,
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
