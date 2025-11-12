import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-blue-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg',
            'focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
            'transition-all duration-200 resize-none',
            error && 'border-blue-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-blue-500">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

