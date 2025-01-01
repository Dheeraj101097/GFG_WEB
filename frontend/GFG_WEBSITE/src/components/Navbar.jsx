export default function Navbar(props) {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono px-20" role="navigation">
            <h1 className="text-2xl font-bold text-green-600">gfgstudentchapterggv</h1>
            <div className="px-4 flex items-center cursor-pointer">
              <i className="fas fa-user"></i>
              <p className="mx-2">{props.user}</p>
              <button className="bg-green-500 text-white px-2 py-1 text-inherit rounded-md" onClick={props.handleLogout}>Logout<i class="fa-solid fa-arrow-right-from-bracket mx-2"></i></button>
            </div>
        </nav>
    );
}