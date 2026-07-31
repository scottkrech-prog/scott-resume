import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [submitError, setSubmitError] = useState('');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};
      setData(previousData => ({...previousData, ...fieldData}));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitError('');
      setSubmitState('sending');

      try {
        const response = await fetch('/api/contact', {
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'},
          method: 'POST',
        });
        const result = (await response.json()) as {error?: string; success?: true};
        if (!response.ok || !result.success) {
          throw new Error(result.error || 'Message could not be sent.');
        }
        setData(defaultData);
        setSubmitState('sent');
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : 'Message could not be sent. Please try again.');
        setSubmitState('error');
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-[#2878f1]-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';
  const isSending = submitState === 'sending';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-[#1a5bc2] bg-[#0d1020] px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-[#171923] focus:ring-2 focus:ring-[#2878f1]-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSending}
        type="submit">
        {isSending ? 'Sending…' : 'Send Message'}
      </button>
      {submitState === 'sent' && <p className="text-sm font-medium text-green-300">Thanks — your message was sent.</p>}
      {submitState === 'error' && <p className="text-sm font-medium text-red-300">{submitError}</p>}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
