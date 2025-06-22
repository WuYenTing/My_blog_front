import classNames from 'classnames'
import dynamic from 'next/dynamic'

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

export interface MarkDownInputProps {
  label?: string
  value?: string
  isError?: boolean
  errorMessage?: string
  onChanged?: (value?: string) => void
}


const MarkDownInput: React.FunctionComponent<MarkDownInputProps> = ({
  label,
  value,
  isError = false,
  errorMessage,
  onChanged,
}) => {
  return (
    <div className='w-full'>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-200">
          {label}
        </label>
      )}
      <div
        className={classNames(
          'border rounded',
          isError ? 'border-red-300 border-3' : 'broder-gray-100',
        )}
      >
        <MDEditor
          className="bg-emerald-50/20"
          fullscreen={false}
          value={value}
          onChange={(value) => onChanged && onChanged(value)}
          textareaProps={{
            placeholder: 'Please enter Markdown text',
            color: '#f43f5e',
          }}
        />
      </div>
      {isError && errorMessage && (
        <p className="mt-2 text-xs text-red-600">{errorMessage}</p>
      )}
    </div>
  )
}

export default MarkDownInput