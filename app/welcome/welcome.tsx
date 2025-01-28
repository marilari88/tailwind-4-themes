import clsx from 'clsx'
import React from 'react'

export function Welcome() {
  const [isDark, setIsDark] = React.useState(false)

  const mainClassName = isDark ? 'inverted' : ''

  return (
    <div
      className={clsx(
        'to-utility-yellow-500 from-utility-red-500 via-utility-orange-500 h-screen bg-gradient-to-r p-2',
        'flex flex-col gap-2'
      )}
    >
      <div className="bg-alpha-100 p-2">ciao</div>
      <div
        className={clsx(
          'bg-default/70 flex h-full flex-col items-center justify-center gap-2 rounded-lg',
          mainClassName
        )}
      >
        <main className={clsx('bg-default/80 text-primary flex flex-col gap-2 rounded-lg p-4')}>
          <div>ole</div>
          <div>ole</div>
          <div>ole</div>
          <div>ole</div>
        </main>
        <button
          className="bg-default text-neutral rounded-lg p-2"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle inverted mode
        </button>
      </div>
    </div>
  )
}
