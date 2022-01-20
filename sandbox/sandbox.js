// Ticker tape footer
<div className="footer">
  <div className="hwrap">
    <div className="hmove">
      <div className="hitem">INTERNAL USE ONLY</div>
      <div className="hitem">
        Warning: Settings have not been defined. Click here to...
      </div>
      <div className="hitem">Remember: This is a work in progress...</div>
      <div className="hitem">
        Email acamodio@gmail.com for more information...
      </div>
    </div>
  </div>
</div>




// Tailwindcss tabs
<div class="mb-4 border-b border-gray-200 dark:border-gray-700 max-w-lg">
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
<div id="myTabContent" class="max-w-lg">
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



// Basic form
<br></br>
<br></br>
Enter data:
<input
type="text"
class="
          mt-1
          block
          max-w-md
          rounded-md
          bg-gray-100
          border-transparent
          focus:border-gray-500 focus:bg-white focus:ring-0
        "
placeholder="Full Name"
></input>





// Last Updated
var LastUpdated = document.lastModified;
document.writeln ("This page was last updated " + LastUpdated);





// Warning alert
<br></br>
<br></br>
<br></br>
<div
  id="alert-additional-content-4"
  class="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200 mt-8 max-w-3xl"
  role="alert"
>
  <div class="flex items-center">
    <svg
      class="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800"
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
    <h3 class="text-lg font-medium text-yellow-700 dark:text-yellow-800">
      Warning
    </h3>
  </div>
  <div class="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
    Looks like you have not setup your account. Take a few moments to{" "}
    <a href="profile.js">review your profile</a> before moving forward.
  </div>
  <div class="flex">
    <button
      type="button"
      class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900"
    >
      <svg
        class="-ml-0.5 mr-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
        <path
          fill-rule="evenodd"
          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      View more
    </button>
    <button
      type="button"
      class="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white"
      data-collapse-toggle="alert-additional-content-4"
      aria-label="Close"
    >
      Dismiss
    </button>
  </div>
</div>
