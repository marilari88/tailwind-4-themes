import {type VariantProps, cva} from 'class-variance-authority'
import clsx from 'clsx'

type VariantContract<TRecipe extends Record<string, unknown>> = {
  [K in keyof TRecipe]-?: Exclude<TRecipe[K], null>
}

export const disabledStyle = clsx('disabled:pointer-events-none')
export const buttonRecipe = cva(
  clsx([
    'transition-colors',
    'whitespace-nowrap',
    'flex items-center justify-center',
    'font-medium cursor-pointer',
    'outline-none outline-2 outline-offset-2 focus-visible:outline-solid'
  ]),
  {
    variants: {
      shape: {
        regular: clsx('rounded-sm'),
        round: clsx('rounded-[3.5rem]')
      },
      tone: {
        neutral: clsx('outline-utility-focus'),
        accent: clsx('outline-utility-focus'),
        critical: clsx('outline-utility-focus-critical'),
        success: clsx('outline-utility-focus')
      },
      size: {
        xl: clsx('gap-2 text-body-lg', 'h-[3.5rem]'),
        lg: clsx('gap-2 text-body-md', 'h-12'),
        md: clsx('gap-1.5 text-body-sm', 'h-10'),
        sm: clsx('gap-1.5 text-body-sm', 'h-8'),
        xs: clsx('gap-1 text-body-sm', 'h-6')
      },
      mode: {
        solid: null,
        outline: clsx('border-1'),
        ghost: null,
        subtle: null
      },
      contentType: {
        regular: null,
        icon: null
      }
    },
    compoundVariants: [
      {
        size: 'xl',
        contentType: 'regular',
        className: clsx('px-6')
      },
      {
        size: 'lg',
        contentType: 'regular',
        className: clsx('px-5')
      },
      {
        size: 'md',
        contentType: 'regular',
        className: clsx('px-4')
      },
      {
        size: 'sm',
        contentType: 'regular',
        className: clsx('px-3')
      },
      {
        size: 'xs',
        contentType: 'regular',
        className: clsx('px-2')
      },
      {
        size: 'xl',
        contentType: 'icon',
        className: clsx('min-w-[3.5rem]')
      },
      {
        size: 'lg',
        contentType: 'icon',
        className: clsx('min-w-12')
      },
      {
        size: 'md',
        contentType: 'icon',
        className: clsx('min-w-10')
      },
      {
        size: 'sm',
        contentType: 'icon',
        className: clsx('min-w-8')
      },
      {
        size: 'xs',
        contentType: 'icon',
        className: clsx('min-w-6')
      },

      /**
       * Solid tones
       */
      {
        mode: 'solid',
        tone: 'neutral',
        className: clsx([
          'text-primary-onfill',
          'bg-fill-primary',

          /**
           * Hover
           */
          'enabled:hover:bg-fill-primary-hover',

          /**
           * Active
           */
          'enabled:active:bg-fill-primary-selected'
        ])
      },
      {
        mode: 'solid',
        tone: 'accent',
        className: clsx([
          'text-primary-onaccent',
          'bg-fill-brand',

          /**
           * Hover
           */
          'enabled:hover:bg-fill-brand-hover',

          /**
           * Active
           */
          'enabled:active:bg-fill-brand-selected'
        ])
      },
      {
        mode: 'solid',
        tone: 'critical',
        className: clsx([
          'text-white',
          'bg-fill-critical',

          /**
           * Hover
           */
          'enabled:hover:bg-fill-critical-hover',

          /**
           * Active
           */
          'enabled:active:bg-fill-critical-selected'
        ])
      },
      {
        mode: 'solid',
        tone: 'success',
        className: clsx([
          'text-white',
          'bg-fill-success',

          /**
           * Hover
           */
          'enabled:hover:bg-fill-success-hover',

          /**
           * Active
           */
          'enabled:active:bg-fill-success-selected'
        ])
      },

      {
        mode: 'subtle',
        tone: 'neutral',
        className: clsx([
          'text-primary',
          'bg-secondary-alpha',

          /**
           * Hover
           */
          'enabled:hover:bg-secondary-hover-alpha',

          /**
           * Active
           */
          'enabled:active:bg-secondary-selected-alpha'
        ])
      },

      /**
       * Non solid tones
       */
      {
        tone: 'neutral',
        mode: ['outline', 'ghost'],
        className: clsx('text-primary', 'enabled:hover:bg-hover enabled:active:bg-selected')
      },
      {
        tone: 'accent',
        mode: ['outline', 'ghost'],
        className: clsx(
          'text-brand-primary',
          'enabled:hover:bg-brand-hover enabled:active:bg-brand-selected'
        )
      },
      {
        tone: 'critical',
        mode: ['outline', 'ghost'],
        className: clsx(
          'text-critical-primary',
          'enabled:hover:bg-critical-hover enabled:active:bg-critical-selected'
        )
      },
      {
        tone: 'success',
        mode: ['outline', 'ghost'],
        className: clsx(
          'text-success-primary',
          'enabled:hover:bg-success-hover enabled:active:bg-success-selected'
        )
      },

      /**
       * outline tones
       */
      {
        tone: 'neutral',
        mode: 'outline',
        className: clsx('border-secondary-alpha')
      },
      {
        tone: 'accent',
        mode: 'outline',
        className: clsx('border-accent-secondary-alpha')
      },
      {
        tone: 'critical',
        mode: 'outline',
        className: clsx('border-critical-secondary-alpha')
      },
      {
        tone: 'success',
        mode: 'outline',
        className: clsx('border-success-secondary-alpha')
      }
    ],
    defaultVariants: {
      tone: 'neutral',
      mode: 'solid',
      size: 'md',
      shape: 'regular',
      contentType: 'regular'
    }
  }
)

export type ButtonRecipeProps = Readonly<VariantProps<typeof buttonRecipe>>
export type ButtonRecipeContract = VariantContract<ButtonRecipeProps>
