'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { enquirySchema, type EnquiryFormData } from '@/lib/validation';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button3D } from '@/components/ui/Button3D';
import { Alert } from '@/components/ui/Alert';
import { SERVICES } from '@/lib/constants';
import { Loader2 } from 'lucide-react';

const serviceOptions = [
  { value: '', label: 'Select a service (optional)' },
  ...SERVICES.map((service) => ({ value: service.id, label: service.title })),
];

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you! Your enquiry has been submitted successfully.',
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit enquiry. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Send us an Enquiry</h2>
      
      {submitStatus && (
        <Alert type={submitStatus.type} className="mb-6">
          {submitStatus.message}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Full Name"
          {...register('name')}
          error={errors.name?.message}
          placeholder="John Doe"
          required
        />

        <Input
          label="Email Address"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="john@example.com"
          required
        />

        <Input
          label="Contact Number"
          type="tel"
          {...register('contact')}
          error={errors.contact?.message}
          placeholder="+1 234 567 8900"
          required
        />

        <Select
          label="Service Interest"
          {...register('service')}
          error={errors.service?.message}
          options={serviceOptions}
        />

        <Textarea
          label="Message"
          {...register('message')}
          error={errors.message?.message}
          placeholder="Tell us about your requirements..."
          rows={5}
        />

        <Button3D type="submit" disabled={isSubmitting} className="w-full" size="lg">
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </Button3D>
      </form>
    </div>
  );
}

