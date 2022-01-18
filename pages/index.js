//pages/index.js

import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Users({ pageTitle, isConnected, users }) {
  return (
    <div className="container">
      <Head>
        <title>Longpole</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{pageTitle}</h1>

        <br></br>
        <table className="table-auto text-left shadow-lg bg-white">
          <thead>
            <tr>
              <th></th>
              <th className="bg-blue-100 border text-left px-8 py-1">_id</th>
              <th className="bg-blue-100 border text-left px-8 py-1">
                Username
              </th>
              <th className="bg-blue-100 border text-left px-8 py-1">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key="{user._id}">
                <td className="border px-2 py-1 hover:bg-red-600">#</td>
                <td className="border px-8 py-1">{user._id}</td>
                <td className="border px-8 py-1">{user.username}</td>
                <td className="border px-8 py-1">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer>
        <br></br>
        {isConnected ? (
          <h2>You are connected to MongoDB.</h2>
        ) : (
          <h2>
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}

        <div class="footer">
          <div class="hwrap">
            <div class="hmove">
              <div class="hitem">INTERNAL USE ONLY</div>
              <div class="hitem">
                Warning: Settings have not been defined. Click here to...
              </div>
              <div class="hitem">Remember: This is a work in progress...</div>
              <div class="hitem">
                Email acamodio@gmail.com if you have an idea for a name for this
                app.
              </div>
            </div>
          </div>
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

    const db = client.db("longpole");

    let users = await db.collection("users").find({}).toArray();
    users = JSON.parse(JSON.stringify(users));

    return {
      props: {
        pageTitle: "longpole://pages/index.js",
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
