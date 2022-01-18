import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Users({ users }) {
  return (
    <div className="container">
      <Head>
        <title>Longpole</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <ul>
            {users.map((user) => (
              <li key="{user._id}">
                {user._id} # {user.username}: {user.email}
              </li>
            ))}
          </ul>
        </div>
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
      props: { users },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { users: false },
    };
  }
}
