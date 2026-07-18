import { AppError } from './AppError';

export function normalizeNigerianPhone(phone: string): string {
  const alreadyInternational = phone.trim().startsWith('+234');

  const digits = phone.replace(/\D+/g, ''); // strip everything except digits

  let normalized: string;

  if (alreadyInternational) {
    normalized = '+234' + digits.slice(3); // digits after stripping '+' still has leading 234
  } else if (digits.startsWith('0')) {
    normalized = '+234' + digits.slice(1);
  } else if (digits.startsWith('234')) {
    normalized = '+' + digits;
  } else {
    throw new AppError('Invalid Nigerian phone number', 400);
  }

  return normalized;
}