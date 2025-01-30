import {clsx} from 'clsx'

import {
  type ButtonRecipeContract,
  type ButtonRecipeProps as CompleteButtonRecipeProps,
  buttonRecipe,
  disabledStyle
} from './buttonRecipe'
import React from 'react'
import {makeBabeleElement, type BabeleComponentProps} from '~/utils'

export function forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- We actually need that because React typings are bad.
  T extends React.FunctionComponent<any>
>(render: T) {
  const Role = React.forwardRef((props, ref) => render({...props, ref}))
  Role.displayName = render.displayName ?? render.name
  return Role as unknown as T
}

export type ButtonRecipeProps = Omit<CompleteButtonRecipeProps, 'contentType'>
export type ButtonProps = Readonly<
  BabeleComponentProps<'button'> & {
    variant?: ButtonRecipeProps
    isLoading?: boolean
  }
>

export const Button = forwardRef(function Button({
  variant: _variant,
  isLoading,
  ...props
}: ButtonProps) {
  const variant = {
    ..._variant,
    contentType: 'regular'
  } as const

  if (isLoading) {
    const htmlProps = {
      ...props,
      className: clsx(props.className, buttonRecipe(variant), 'relative', 'pointer-events-none'),
      disabled: true,
      children: (
        <>
          <div className="absolute inset-0 flex items-center justify-center">loading...</div>
          <span className="invisible">{props.children}</span>
        </>
      )
    }
    return makeBabeleElement('button', htmlProps)
  }

  const htmlProps = {
    ...props,
    className: clsx(props.className, disabledStyle, buttonRecipe(variant))
  }
  return makeBabeleElement('button', htmlProps)
})
