'use client';

import { useState } from 'react';
import { WaitlistFormData, ApiResponse } from '../types/waitlist';

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setMessage({ text: data.message, type: 'success' });
        setFormData({ name: '', email: '', description: '' });
      } else {
        setMessage({ text: data.message, type: 'error' });
      }
    } catch {
      setMessage({ text: 'Something went wrong. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={100}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <textarea
            name="description"
            placeholder="What's your main goal?"
            value={formData.description}
            onChange={handleChange}
            maxLength={500}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}
    </div>
  );
}
