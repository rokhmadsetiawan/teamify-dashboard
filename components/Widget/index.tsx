import React, { ReactNode } from 'react'
import Card from '../Card'
import cx from 'classnames'

type WidgetProps = {
  children: ReactNode
}

type WidgetLabelProps = {
  children: ReactNode
  circleClass?: string
  labelClass?: string
}

type WidgetBodyProps = {
  children: ReactNode
}

const Widget = ({ children, ...props }: WidgetProps) => {
  return <Card>{children}</Card>
}

const WidgetHeader = ({ children, ...props }: WidgetProps) => (
  <div className="flex items-center mb-6" {...props}>
    {children}
  </div>
)

const WidgetHeaderLeft = ({ children, ...props }: WidgetProps) => (
  <div className="flex-1" {...props}>
    {children}
  </div>
)

const WidgetHeaderRight = ({ children, ...props }: WidgetProps) => (
  <div className="flex" {...props}>
    {children}
  </div>
)

const WidgetTitle = ({ children, ...props }: WidgetProps) => (
  <h2 className="lg:text-lg font-bold" {...props}>
    {children}
  </h2>
)

const WidgetDate = ({ children, ...props }: WidgetProps) => (
  <span className="text-xs text-gray-500" {...props}>
    {children}
  </span>
)

const WidgetValue = ({ children, ...props }: WidgetProps) => (
  <p className="text-lg font-bold text-gray-700" {...props}>
    {children}
  </p>
)

const WidgetLabel = ({
  children,
  circleClass = 'bg-gray-500',
  labelClass,
  ...props
}: WidgetLabelProps) => (
  <div className={cx('flex items-center', labelClass)}>
    <div
      className={cx('w-3 h-3 mr-2 rounded-full', circleClass)}
      {...props}
    ></div>
    <p className="text-sm font-semibold text-gray-500" {...props}>
      {children}
    </p>
  </div>
)

const WidgetBody = ({ children, ...props }: WidgetBodyProps) => (
  <div
    {...props}
  >
    {children}
  </div>
)

// combine with widget
Widget.Header = WidgetHeader
Widget.HeaderLeft = WidgetHeaderLeft
Widget.HeaderRight = WidgetHeaderRight
Widget.Title = WidgetTitle
Widget.Date = WidgetDate
Widget.Label = WidgetLabel
Widget.Body = WidgetBody

export default Widget
