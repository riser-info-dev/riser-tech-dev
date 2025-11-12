import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';

interface AlertProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  children: ReactNode;
  className?: string;
}

export function Alert({ type = 'info', children, className }: AlertProps) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const styles = {
    success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900 dark:border-green-800 dark:text-green-200',
    error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900 dark:border-red-800 dark:text-red-200',
    info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900 dark:border-blue-800 dark:text-blue-200',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-800 dark:text-yellow-200',
  };

  const Icon = icons[type];

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 rounded-lg border',
        styles[type],
        className
      )}
    >
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1">{children}</div>
    </div>
  );
}

