export interface ILocaleLayoutWrapperProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  messages?: Record<string, string>;
}