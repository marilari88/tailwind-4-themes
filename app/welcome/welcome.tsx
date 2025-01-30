import clsx from 'clsx'
import React from 'react'
import {Button} from '~/ui/Button/Button'

export function Welcome() {
  const [isDark, setIsDark] = React.useState(false)

  return (
    <main
      data-inverted={isDark}
      className="bg-sunken text-primary flex flex-col gap-4 rounded-lg p-8"
    >
      <h1>Welcome to button page</h1>
      <Button className="bg-default text-neutral rounded-lg p-2" onClick={() => setIsDark(!isDark)}>
        Toggle inverted mode
      </Button>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Neutral solid</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'neutral', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'neutral', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'neutral', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'neutral', mode: 'solid'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Neutral subtle</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'neutral', mode: 'subtle'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'neutral', mode: 'subtle'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'neutral', mode: 'subtle'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'neutral', mode: 'subtle'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Neutral outline</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'neutral', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'neutral', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'neutral', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'neutral', mode: 'outline'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Neutral ghost</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'neutral', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'neutral', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'neutral', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'neutral', mode: 'ghost'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Accent solid</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'accent', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'accent', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'accent', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'accent', mode: 'solid'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Accent outline</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'accent', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'accent', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'accent', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'accent', mode: 'outline'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Accent ghost</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'accent', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'accent', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'accent', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'accent', mode: 'ghost'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Critical solid</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'critical', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'critical', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'critical', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'critical', mode: 'solid'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Critical outline</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'critical', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'critical', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'critical', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'critical', mode: 'outline'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Critical ghost</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'critical', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'critical', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'critical', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'critical', mode: 'ghost'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Success solid</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'success', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'success', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'success', mode: 'solid'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'success', mode: 'solid'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Success outline</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'success', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'success', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'success', mode: 'outline'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'success', mode: 'outline'}}>Button</Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-lg font-medium">Success ghost</div>
          <div className="flex gap-2">
            <Button variant={{size: 'xl', tone: 'success', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'lg', tone: 'success', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'md', tone: 'success', mode: 'ghost'}}>Button</Button>
            <Button variant={{size: 'sm', tone: 'success', mode: 'ghost'}}>Button</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
