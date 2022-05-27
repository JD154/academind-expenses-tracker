import {
  ChartBarIcon,
  PaperClipIcon,
  ChartPieIcon,
  NewspaperIcon,
  ClockIcon,
} from '@heroicons/react/outline'

function Drawer(props) {
  return (
    <div className="drawer drawer-mobile my-6">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <div className="app w-full px-6">
          <h3 className="font-bold text-2xl">My lastest transactions</h3>
          {props.children}
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side rounded-box shadow-xl">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          <li>
            <a>
              <ChartBarIcon className="h-7 w-7" />
              <span className="font-bold text-lg">Resume</span>
            </a>
          </li>
          <li>
            <a>
              <PaperClipIcon className="h-7 w-7" />
              <span className="font-bold text-lg">Productivity</span>
            </a>
          </li>
          <li>
            <a>
              <ChartPieIcon className="h-7 w-7" />
              <span className="font-bold text-lg">Reports</span>
            </a>
          </li>
          <li>
            <a>
              <NewspaperIcon className="h-7 w-7" />
              <span className="font-bold text-lg">Analytics</span>
            </a>
          </li>
          <li>
            <a>
              <ClockIcon className="h-7 w-7" />
              <span className="font-bold text-lg">Invoices</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
