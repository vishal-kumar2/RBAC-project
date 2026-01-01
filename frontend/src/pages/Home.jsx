const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-3xl bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Role-Based Access Control (RBAC) System
        </h1>

        <p className="text-gray-600 mb-4">
          This project demonstrates a secure <span className="font-semibold">Role-Based Access Control (RBAC)</span> system
          built using <span className="font-semibold">Node.js, Express, MongoDB, JWT, and React</span>.
          It focuses on backend-driven authorization with a minimal yet functional frontend.
        </p>

        <p className="text-gray-600 mb-4">
          Users can register and log in, while administrators have additional privileges
          such as viewing all users, managing roles, and creating other admin accounts.
          Access to routes and UI elements is strictly controlled based on user roles.
        </p>

        <p className="text-gray-600 mb-4">
          The system enforces important security rules, including:
        </p>

        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>JWT-based authentication</li>
          <li>Role-based authorization middleware</li>
          <li>Admin-only protected APIs</li>
          <li>Prevention of admin self-demotion</li>
          <li>Guarantee that at least one admin always exists</li>
        </ul>

        <p className="text-gray-600">
          This project is designed to reflect real-world RBAC implementations
          commonly used in enterprise applications.
        </p>
      </div>
    </div>
  );
};

export default Home;
