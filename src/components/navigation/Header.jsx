function Header() {
  return (
    <div className="navbar bg-primary text-primary-content rounded-box shadow-xl">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">exTracker</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nbatitlechase.com%2Fwp-content%2Fuploads%2F2019%2F12%2FPHOTO-Apple-And-Android-Baby-Yoda-Emoji-768x777.jpg&f=1&nofb=1" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
