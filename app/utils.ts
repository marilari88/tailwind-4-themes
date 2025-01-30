import * as React from 'react'

type RenderFn = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: React.HTMLAttributes<any> & {ref?: React.Ref<any>}
) => React.ReactElement
export type BabeleRenderProp = RenderFn | React.ReactElement
export type BabeleComponentProps<TEl extends React.ElementType> = Omit<
  React.ComponentPropsWithRef<TEl>,
  'render' // unfortunately, some native components use render as standard attribute
> & {
  render?: BabeleRenderProp
}
export function makeBabeleElement<TEl extends React.ElementType>(
  el: TEl,
  {render, ...props}: BabeleComponentProps<TEl>,
  ...children: readonly React.ReactNode[]
): React.ReactElement {
  if (render == null) {
    return React.createElement(el, props, ...children)
  }

  if (React.isValidElement(render)) {
    // eslint-disable-next-line @eslint-react/no-clone-element
    return React.cloneElement(render, props, ...children)
  }

  return render(props)
}

export const useSafeLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
