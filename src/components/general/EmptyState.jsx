import { ExclamationCircleIcon } from '@heroicons/react/outline'

function EmptyState({ title, subtitle }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <ExclamationCircleIcon className="h-12 w-12" />
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-xl">{subtitle}</p>
    </div>
  )
}

export default EmptyState
